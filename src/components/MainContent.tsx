import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import ImageGallery from './ImageGallery';
import { images } from '../data/images';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const MainContent: React.FC = () => {
  const { t } = useLanguage();
  const { textSize } = useAccessibility();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12"
      >
        <p 
          className="text-lg text-amber-900 leading-relaxed mb-8"
          style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
        >
          {t('message')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ImageGallery 
            images={images.switzerland} 
            title="Suisse / Schweiz" 
          />
          <ImageGallery 
            images={images.montpellier} 
            title="Montpellier" 
          />
        </div>

        <div className="space-y-8">
          {t('moments').map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-6 rounded-lg ${
                index % 2 === 0 
                  ? 'bg-amber-50 border-l-4 border-amber-400' 
                  : 'bg-rose-50 border-l-4 border-rose-400'
              }`}
            >
              <h3 className="text-xl font-bold mb-3 text-amber-800">
                {moment.title}
              </h3>
              <p 
                className="text-amber-900 leading-relaxed"
                style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
              >
                {moment.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Quote size={24} className="text-amber-800" />
              <p 
                className="text-amber-900 leading-relaxed italic"
                style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
              >
                {t('fromArtur')}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-amber-200 px-4 py-1 rounded-full text-amber-800 font-medium">
                Artur
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Quote size={24} className="text-rose-800" />
              <p 
                className="text-rose-900 leading-relaxed italic"
                style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
              >
                {t('fromYannick')}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-rose-200 px-4 py-1 rounded-full text-rose-800 font-medium">
                Yannick
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;