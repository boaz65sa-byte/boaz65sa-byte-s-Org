
import React from 'react';
import { useApp } from '../context/AppContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const About: React.FC = () => {
  const { content, isAdmin, updateContent } = useApp();

  return (
    <div className="pt-20 pb-32">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="animate-fade-in delay-100">
            <EditableText
              path="about.title"
              value={content.about.title}
              className="text-4xl md:text-6xl font-black text-blue-900 mb-8"
            />
          </div>
          <div className="animate-fade-in delay-200">
            <EditableText
              path="about.description"
              value={content.about.description}
              multiline
              className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in delay-100">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">ההנהלה שלנו</h2>
            <p className="text-slate-500 font-bold">האנשים שמובילים את נתיבי אצבע הגליל</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.team.map((member, index) => (
              <div key={member.id} className={`group relative animate-fade-in`} style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                  <EditableImage
                    path={`about.team.${index}.image`}
                    value={member.image}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-6 right-6 left-6 text-white">
                    <EditableText
                      path={`about.team.${index}.name`}
                      value={member.name}
                      className="text-2xl font-black mb-1"
                    />
                    <EditableText
                      path={`about.team.${index}.role`}
                      value={member.role}
                      className="text-blue-200 font-bold"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
