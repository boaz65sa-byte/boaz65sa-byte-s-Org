
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AdminLogin from './AdminLogin';
import AdminSettings from './AdminSettings';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isAdmin, logout } = useApp();
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminSettings, setShowAdminSettings] = useState(false);

  const links = [
    { name: 'ראשי', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'גלריה', path: '/gallery' },
    { name: 'צור קשר', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">נ</div>
            <span className="text-xl font-black text-blue-900 hidden sm:block">נתיבי אצבע הגליל</span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {links.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-bold transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {isAdmin && (
                <button
                  onClick={() => setShowAdminSettings(true)}
                  className="bg-cyan-50 text-cyan-600 p-2 rounded-full hover:bg-cyan-100 transition-colors"
                  title="הגדרות אתר"
                >
                  🛠️
                </button>
              )}
              {isAdmin ? (
                <button
                  onClick={logout}
                  className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-200 hover:bg-red-100 transition-colors"
                >
                  יציאה
                </button>
              ) : (
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors"
                  title="כניסת מנהל"
                >
                  ⚙️
                </button>
              )}
              <a
                href="https://wa.me/972538282832"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-green-600 transition-transform active:scale-95 flex items-center gap-2"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile menu - bottom bar */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 h-16 glass rounded-2xl shadow-2xl flex items-center justify-around px-4 border border-blue-100/50">
           {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-400'}`}
            >
              <span className="text-xs font-bold">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {showAdminLogin && <AdminLogin onClose={() => setShowAdminLogin(false)} />}
      {showAdminSettings && <AdminSettings onClose={() => setShowAdminSettings(false)} />}
    </>
  );
};

export default Navbar;
