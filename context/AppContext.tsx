
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SiteContent, AppContextType } from '../types';
import { DEFAULT_CONTENT } from '../constants';
import { GoogleGenAI } from "@google/genai";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('nativy_content');
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('nativy_content', JSON.stringify(content));
  }, [content]);

  const updateContent = useCallback((path: string, value: any) => {
    setContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let current: any = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  }, []);

  const toggleAdmin = (code: string) => {
    if (code === content.settings.adminCode) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const improveText = async (text: string): Promise<string> => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `שפר את הטקסט הבא עבור אתר חברת הסעות "נתיבי אצבע הגליל". הפוך אותו לשיווקי, מרשים ומקצועי יותר בעברית: "${text}"`,
        config: {
          temperature: 0.7,
        }
      });
      return response.text || text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return text;
    }
  };

  return (
    <AppContext.Provider value={{ content, isAdmin, updateContent, toggleAdmin, logout, improveText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
