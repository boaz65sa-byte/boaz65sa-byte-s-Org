
import React from 'react';
import { useApp } from '../context/AppContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Home: React.FC = () => {
  const { content } = useApp();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <EditableImage 
          path="home.heroImage" 
          value={content.home.heroImage} 
          className="absolute inset-0 w-full h-full animate-fade-in" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl space-y-6">
              <div className="animate-fade-in delay-100">
                <EditableText
                  path="home.heroTitle"
                  value={content.home.heroTitle}
                  className="text-4xl md:text-7xl font-black text-white leading-tight"
                />
              </div>
              <div className="animate-fade-in delay-200">
                <EditableText
                  path="home.heroSubtitle"
                  value={content.home.heroSubtitle}
                  multiline
                  className="text-xl md:text-2xl text-blue-50 font-medium"
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in delay-300">
                <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl transition-all hover:-translate-y-1">
                  הזמן נסיעה עכשיו
                </button>
                <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/50 px-8 py-4 rounded-2xl font-black text-xl transition-all hover:-translate-y-1">
                  הכירו את הצי שלנו
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in delay-100">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">השירותים שלנו</h2>
            <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => {
              const delays = ["delay-200", "delay-300", "delay-400"];
              return (
                <div key={i} className={`group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 animate-fade-in ${delays[i-1]}`}>
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 transform group-hover:rotate-6 transition-transform">
                    {i === 1 ? '🚌' : i === 2 ? '🚕' : '🏢'}
                  </div>
                  <EditableText
                    path={`home.service${i}Title`}
                    value={(content.home as any)[`service${i}Title`]}
                    className="text-2xl font-black text-blue-900 mb-4"
                  />
                  <EditableText
                    path={`home.service${i}Desc`}
                    value={(content.home as any)[`service${i}Desc`]}
                    multiline
                    className="text-slate-600 leading-relaxed font-medium"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Stats / Why Us */}
      <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'שנות ניסיון', value: '15+' },
              { label: 'לקוחות מרוצים', value: '10K+' },
              { label: 'כלי רכב', value: '50+' },
              { label: 'זמינות', value: '24/7' },
            ].map((stat, idx) => (
              <div key={idx} className={`space-y-2 animate-fade-in`} style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                <div className="text-4xl md:text-6xl font-black text-blue-400">{stat.value}</div>
                <div className="text-blue-100 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
