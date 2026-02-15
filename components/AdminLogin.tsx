
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

interface AdminLoginProps {
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const { toggleAdmin } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (toggleAdmin(code)) {
      onClose();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        <h2 className="text-2xl font-black text-blue-900 mb-6 text-center">כניסת מנהל מערכת</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">קוד גישה (ברירת מחדל: 1234)</label>
            <input
              type="password"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none ${error ? 'border-red-500 animate-pulse' : 'border-slate-100 focus:border-blue-500'}`}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="הזן קוד..."
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            כניסה
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full text-slate-400 font-bold hover:text-slate-600 transition-colors"
          >
            ביטול
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
