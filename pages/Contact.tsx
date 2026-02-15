
import React from 'react';
import { useApp } from '../context/AppContext';
import EditableText from '../components/EditableText';

const Contact: React.FC = () => {
  const { content } = useApp();

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-4">צור קשר</h1>
          <p className="text-xl text-slate-500 font-bold">אנחנו כאן לכל שאלה, בקשה או הצעת מחיר</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: '📧', label: 'דוא"ל', path: 'contact.email', value: content.contact.email },
                { icon: '📱', label: 'וואטסאפ', path: 'contact.whatsapp', value: content.contact.whatsapp },
                { icon: '📍', label: 'כתובת', path: 'contact.address', value: content.contact.address },
                { icon: '📞', label: 'טלפון', path: 'contact.phone', value: content.contact.phone }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-blue-200 transition-colors animate-fade-in`}
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-black text-blue-900 mb-2">{item.label}</h3>
                  <EditableText path={item.path} value={item.value} className="text-slate-600 font-bold" />
                </div>
              ))}
            </div>

            {/* Simulated Map */}
            <div className="h-[400px] bg-slate-200 rounded-3xl relative overflow-hidden group animate-fade-in delay-500">
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                 <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">📍</div>
                    <div className="text-blue-900 font-black text-xl">מפת מיקום החברה</div>
                    <div className="text-blue-600 font-bold">אצבע הגליל, ישראל</div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-blue-50 animate-fade-in delay-300">
            <h2 className="text-3xl font-black text-blue-900 mb-8">שלחו לנו הודעה</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-400">
                  <label className="block text-slate-500 font-bold mb-2">שם מלא</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-blue-400 focus:outline-none transition-all" />
                </div>
                <div className="animate-fade-in delay-500">
                  <label className="block text-slate-500 font-bold mb-2">טלפון</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-blue-400 focus:outline-none transition-all" />
                </div>
              </div>
              <div className="animate-fade-in delay-700">
                <label className="block text-slate-500 font-bold mb-2">נושא</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-blue-400 focus:outline-none transition-all" />
              </div>
              <div className="animate-fade-in delay-700">
                <label className="block text-slate-500 font-bold mb-2">הודעה</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-blue-400 focus:outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-[0.98] animate-fade-in delay-1000">
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
