
import React from 'react';
import { useApp } from '../context/AppContext';

interface EditableImageProps {
  path: string;
  value: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ path, value, className }) => {
  const { isAdmin, updateContent } = useApp();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateContent(path, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <img src={value} alt="Site Content" className="w-full h-full object-cover" />
      {isAdmin && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <label className="bg-white text-blue-600 px-4 py-2 rounded-lg cursor-pointer pointer-events-auto font-bold shadow-xl">
            החלף תמונה
            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
