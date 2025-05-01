import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import ImageGallery from '../components/ImageGallery';
import { images } from '../data/images';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const { textSize } = useAccessibility();

  useEffect(() => {
    document.title = `${t('welcome.title')} - Luz Abello`;
  }, [t]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
          {t('welcome.title')}
        </h1>
        <h2 className="text-xl md:text-2xl text-amber-600 mb-6">
          {t('welcome.subtitle')}
        </h2>
        <div 
          className="max-w-2xl mx-auto bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200"
          style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
        >
          <p className="text-amber-900 leading-relaxed">
            {t('welcome.message')}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <ImageGallery 
              images={images.switzerland} 
              title="Suisse / Schweiz" 
            />
          </div>
          <div>
            <ImageGallery 
              images={images.montpellier} 
              title="Montpellier" 
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <div className="inline-block bg-gradient-to-r from-amber-100 to-rose-100 px-8 py-4 rounded-lg shadow-md">
          <p 
            className="text-amber-800 italic"
            style={{ fontSize: `${1 + (textSize - 1) * 0.3}rem` }}
          >
            "L'hospitalité, c'est ouvrir sa porte et son cœur."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;