import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import { motion } from 'framer-motion';

const ThankYouPage: React.FC = () => {
  const { t } = useLanguage();
  const { textSize } = useAccessibility();

  useEffect(() => {
    document.title = `${t('thankYou.title')} - Luz Abello`;
  }, [t]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
          {t('thankYou.title')}
        </h1>
        <div 
          className="max-w-2xl mx-auto bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200"
          style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
        >
          <p className="text-amber-900 leading-relaxed">
            {t('thankYou.message')}
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md border border-amber-200"
        >
          <div className="flex flex-col h-full">
            <div 
              className="flex-grow"
              style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
            >
              <p className="text-amber-900 leading-relaxed italic mb-4">
                {t('thankYou.fromArtur')}
              </p>
            </div>
            <div className="mt-4 text-right">
              <span className="inline-block bg-amber-200 px-4 py-1 rounded-full text-amber-800 font-medium">
                Artur
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg shadow-md border border-rose-200"
        >
          <div className="flex flex-col h-full">
            <div 
              className="flex-grow"
              style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
            >
              <p className="text-rose-900 leading-relaxed italic mb-4">
                {t('thankYou.fromYannick')}
              </p>
            </div>
            <div className="mt-4 text-right">
              <span className="inline-block bg-rose-200 px-4 py-1 rounded-full text-rose-800 font-medium">
                Yannick
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-amber-200 to-rose-200 px-8 py-6 rounded-lg shadow-md">
          <p 
            className="text-2xl font-bold text-amber-800"
            style={{ fontSize: `${1.5 + (textSize - 1) * 0.5}rem` }}
          >
            Merci / Danke ❤️
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;