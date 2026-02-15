
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface AdminSettingsProps {
  onClose: () => void;
}

const AdminSettings: React.FC<AdminSettingsProps> = ({ onClose }) => {
  const { content, updateContent } = useApp();
  const [newCode, setNewCode] = useState(content.settings.adminCode);
  const [musicUrl, setMusicUrl] = useState(content.settings.backgroundMusicUrl);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    updateContent('settings.adminCode', newCode);
    updateContent('settings.backgroundMusicUrl', musicUrl);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-black text-blue-900 mb-6 flex items-center gap-2">
          <span>הגדרות מערכת</span>
          <span className="text-xl">🛠️</span>
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">קוד כניסת מנהל חדש</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 focus:outline-none transition-all"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              placeholder="הזן קוד חדש..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">כתובת שיר רקע (URL)</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 focus:outline-none transition-all"
              value={musicUrl}
              onChange={(e) => setMusicUrl(e.target.value)}
              placeholder="https://example.com/song.mp3"
            />
            <p className="text-xs text-slate-400 mt-1">מומלץ להשתמש בקישור ישיר לקובץ MP3</p>
          </div>

          <div className="flex items-center gap-3">
            <input 
                type="checkbox" 
                id="musicToggle"
                checked={content.settings.musicEnabled}
                onChange={(e) => updateContent('settings.musicEnabled', e.target.checked)}
                className="w-5 h-5 accent-blue-600"
            />
            <label htmlFor="musicToggle" className="font-bold text-slate-700">הפעל מוזיקת רקע</label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all shadow-lg ${isSaved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {isSaved ? 'נשמר בהצלחה! ✓' : 'שמור שינויים'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-bold text-slate-400 hover:bg-slate-50 transition-colors"
            >
              ביטול
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
