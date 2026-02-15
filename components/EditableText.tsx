
import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';

interface EditableTextProps {
  path: string;
  value: string;
  className?: string;
  multiline?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({ path, value, className, multiline }) => {
  const { isAdmin, updateContent, improveText } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (isEditing && multiline && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [isEditing, value, multiline]);

  if (!isAdmin) return <div className={className}>{value}</div>;

  const handleImprove = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImproving(true);
    const improved = await improveText(value);
    updateContent(path, improved);
    setIsImproving(false);
  };

  return (
    <div 
      className={`relative group border-2 border-transparent transition-all px-2 -mx-2 rounded-xl 
        ${isEditing ? 'border-blue-400 bg-white shadow-inner z-10' : 'hover:border-blue-200 hover:bg-blue-50/50 cursor-text'} 
        ${className}`}
    >
      {isEditing ? (
        <div className="relative w-full py-1">
          {multiline ? (
            <textarea
              ref={textareaRef}
              className="w-full text-inherit bg-transparent focus:outline-none resize-none overflow-hidden leading-relaxed"
              value={value}
              onChange={(e) => updateContent(path, e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <input
              className="w-full text-inherit bg-transparent focus:outline-none font-inherit"
              value={value}
              onChange={(e) => updateContent(path, e.target.value)}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          )}
          <div className="absolute -top-7 right-0 flex gap-1 animate-fade-in pointer-events-none">
            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm whitespace-nowrap">
              עריכה פעילה...
            </span>
          </div>
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)} className="min-h-[1.5em] relative py-1">
          {value || <span className="text-slate-300 italic">לחץ להזנת טקסט...</span>}
          
          {/* Action Buttons - Positioned for RTL layout */}
          <div className="absolute top-0 -right-12 opacity-0 group-hover:opacity-100 flex flex-row-reverse gap-1.5 transition-all duration-200 z-20">
             <button 
              onClick={handleImprove}
              disabled={isImproving}
              className="bg-gradient-to-tr from-purple-600 to-indigo-600 text-white p-2 rounded-full text-xs hover:scale-110 transition-transform flex items-center justify-center shadow-lg w-9 h-9 border border-white/20"
              title="שפר עם בינה מלאכותית ✨"
            >
              {isImproving ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : "✨"}
            </button>
            <button className="bg-blue-600 text-white p-2 rounded-full text-xs hover:scale-110 transition-transform flex items-center justify-center shadow-lg w-9 h-9 border border-white/20">
              ✎
            </button>
          </div>
          
          {/* Help Tooltip */}
          <div className="absolute -bottom-6 right-0 opacity-0 group-hover:opacity-100 text-[10px] text-blue-500 font-bold pointer-events-none transition-opacity bg-white px-2 py-0.5 rounded shadow-sm border border-blue-100">
            לחץ לעריכת המלל
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableText;
