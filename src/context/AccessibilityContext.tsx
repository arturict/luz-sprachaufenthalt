import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AccessibilityContextType {
  textSize: number;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  readText: (text: string) => void;
  isReading: boolean;
  stopReading: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [textSize, setTextSize] = useState<number>(1);
  const [isReading, setIsReading] = useState<boolean>(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [utterance]);

  const increaseTextSize = () => {
    setTextSize(prev => Math.min(prev + 0.1, 1.5));
  };

  const decreaseTextSize = () => {
    setTextSize(prev => Math.max(prev - 0.1, 0.8));
  };

  const readText = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const newUtterance = new SpeechSynthesisUtterance(text);
      
      // Try to find a French or German voice based on text
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.lang.startsWith('fr') || voice.lang.startsWith('de')
      );
      
      if (preferredVoice) {
        newUtterance.voice = preferredVoice;
      }
      
      newUtterance.onend = () => setIsReading(false);
      newUtterance.onerror = () => setIsReading(false);
      
      setUtterance(newUtterance);
      setIsReading(true);
      
      window.speechSynthesis.speak(newUtterance);
    }
  };

  const stopReading = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <AccessibilityContext.Provider 
      value={{ 
        textSize, 
        increaseTextSize, 
        decreaseTextSize, 
        readText, 
        isReading, 
        stopReading 
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};