import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAccessibility } from '../context/AccessibilityContext';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const SouvenirsPage: React.FC = () => {
  const { t } = useLanguage();
  const { textSize } = useAccessibility();

  useEffect(() => {
    document.title = `${t('souvenirs.title')} - Luz Abello`;
  }, [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
          {t('souvenirs.title')}
        </h1>
        <div className="inline-block bg-amber-100 px-4 py-2 rounded-full mb-6">
          <p className="text-amber-800 font-medium">
            {t('souvenirs.dateRange')}
          </p>
        </div>
        <div 
          className="max-w-2xl mx-auto bg-amber-50 p-6 rounded-lg shadow-md border border-amber-200"
          style={{ fontSize: `${1 + (textSize - 1) * 0.5}rem` }}
        >
          <p className="text-amber-900 leading-relaxed">
            {t('souvenirs.intro')}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {t('souvenirs.moments').map((moment, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`mb-8 p-6 rounded-lg shadow-md transition-all 
              ${index % 2 === 0 ? 'bg-amber-50 border-l-4 border-amber-400' : 'bg-rose-50 border-l-4 border-rose-400'}`}
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-amber-100 to-rose-100 px-8 py-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 text-amber-800">
            <Quote size={24} />
            <p 
              className="italic"
              style={{ fontSize: `${1 + (textSize - 1) * 0.3}rem` }}
            >
              {t('souvenirs.funFact')}
            </p>
            <Quote size={24} className="transform rotate-180" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SouvenirsPage;