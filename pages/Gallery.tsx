
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import EditableImage from '../components/EditableImage';

const Gallery: React.FC = () => {
  const { content, isAdmin, updateContent } = useApp();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const addImage = () => {
    const newImages = [...content.gallery.images, "https://picsum.photos/800/600"];
    updateContent('gallery.images', newImages);
  };

  const removeImage = (index: number) => {
    const newImages = content.gallery.images.filter((_, i) => i !== index);
    updateContent('gallery.images', newImages);
  };

  const handleShare = async (index: number, imageUrl: string) => {
    const shareData = {
      title: 'נתיבי אצבע הגליל - גלריה',
      text: 'צפו בתמונה מגלריית נתיבי אצבע הגליל',
      url: imageUrl.startsWith('data:') ? window.location.href : imageUrl,
    };

    if (navigator.share && !imageUrl.startsWith('data:')) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy link to clipboard
      try {
        const textToCopy = imageUrl.startsWith('data:') ? window.location.href : imageUrl;
        await navigator.clipboard.writeText(textToCopy);
        setCopiedId(index);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    }
  };

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-4">גלריית תמונות</h1>
            <p className="text-xl text-slate-500 font-bold">הצי החדיש והמתקדם שלנו בפעולה</p>
          </div>
          {isAdmin && (
            <button
              onClick={addImage}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-blue-700 transition-all active:scale-95"
            >
              הוסף תמונה חדשה +
            </button>
          )}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {content.gallery.images.map((img, index) => (
            <div 
              key={index} 
              className="relative group rounded-3xl overflow-hidden shadow-xl break-inside-avoid transition-all hover:shadow-2xl hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${(index % 6 + 1) * 100}ms` }}
            >
              <EditableImage
                path={`gallery.images.${index}`}
                value={img}
                className="w-full"
              />
              
              {/* Overlay Actions */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div className="flex gap-2 pointer-events-auto">
                  <button
                    onClick={() => handleShare(index, img)}
                    className="bg-white/90 backdrop-blur-sm text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
                    title="שתף תמונה"
                  >
                    {copiedId === index ? '✓' : '📤'}
                  </button>
                  {copiedId === index && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg self-center animate-fade-in">הקישור הועתק!</span>
                  )}
                </div>

                {isAdmin && (
                  <button
                    onClick={() => removeImage(index)}
                    className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 pointer-events-auto"
                    title="מחק תמונה"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
