import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import { Type, Volume2, Languages } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { increaseTextSize, decreaseTextSize, readText, isReading, stopReading } = useAccessibility();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'de' : 'fr');
  };

  const readCurrentPageContent = () => {
    const mainContent = document.querySelector('main')?.textContent || '';
    readText(mainContent);
  };

  return (
    <header className="bg-gradient-to-r from-amber-100 to-rose-100 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold text-amber-800">{t('title')}</h1>
          <p className="text-amber-600">{t('intro')}</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={increaseTextSize}
            className="p-2 bg-amber-100 rounded-full text-amber-800 hover:bg-amber-200 transition-all"
            aria-label={t('accessibility.increaseText')}
            title={t('accessibility.increaseText')}
          >
            <Type size={20} />
            <span className="sr-only">{t('accessibility.increaseText')}</span>
          </button>
          <button 
            onClick={decreaseTextSize}
            className="p-2 bg-amber-100 rounded-full text-amber-800 hover:bg-amber-200 transition-all"
            aria-label={t('accessibility.decreaseText')}
            title={t('accessibility.decreaseText')}
          >
            <Type size={16} />
            <span className="sr-only">{t('accessibility.decreaseText')}</span>
          </button>
          <button 
            onClick={isReading ? stopReading : readCurrentPageContent}
            className={`p-2 rounded-full transition-all ${
              isReading 
                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
            aria-label={t('accessibility.readText')}
            title={t('accessibility.readText')}
          >
            <Volume2 size={18} />
            <span className="sr-only">{t('accessibility.readText')}</span>
          </button>
          <button 
            onClick={toggleLanguage}
            className="p-2 bg-amber-100 rounded-full text-amber-800 hover:bg-amber-200 transition-all"
            aria-label={t('accessibility.languageSwitch')}
            title={t('accessibility.languageSwitch')}
          >
            <Languages size={18} />
            <span className="sr-only">{t('accessibility.languageSwitch')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;