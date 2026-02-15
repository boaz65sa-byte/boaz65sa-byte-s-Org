
import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { content } = useApp();

  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-white text-blue-900 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl">נ</div>
            <span className="text-2xl font-black">נתיבי אצבע הגליל</span>
          </div>
          <p className="text-blue-200 font-medium">
            השותף המקצועי שלך לכל צורך תחבורתי. אמינות, בטיחות ונוחות בכל קילומטר.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-black mb-6">ניווט מהיר</h4>
          <ul className="space-y-4 text-blue-200 font-bold">
            <li><Link to="/" className="hover:text-white transition-colors">ראשי</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">אודות החברה</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">גלריית תמונות</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black mb-6">צור קשר</h4>
          <ul className="space-y-4 text-blue-200 font-bold">
            <li>📞 {content.contact.phone}</li>
            <li>📧 {content.contact.email}</li>
            <li>📱 {content.contact.whatsapp}</li>
            <li>📍 {content.contact.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-black mb-6">שעות פעילות</h4>
          <ul className="space-y-4 text-blue-200 font-bold">
            <li className="flex justify-between"><span>א' - ה'</span> <span>24 שעות</span></li>
            <li className="flex justify-between"><span>יום ו'</span> <span>עד כניסת שבת</span></li>
            <li className="flex justify-between"><span>מוצ"ש</span> <span>מרגע צאת שבת</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-blue-800 text-center text-blue-400 font-bold">
        © {new Date().getFullYear()} נתיבי אצבע הגליל. כל הזכויות שמורות. נבנה בטכנולוגיית AI מתקדמת.
      </div>
    </footer>
  );
};

export default Footer;
