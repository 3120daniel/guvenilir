import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
        title="Change language"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
          <div className="p-2 max-h-64 overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-xs opacity-75">{lang.code.toUpperCase()}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile-friendly dropdown alternative */}
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="sm:hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}
