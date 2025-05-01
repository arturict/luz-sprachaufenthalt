import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <div className="flex flex-col min-h-screen bg-amber-50">
          <Header />
          <main className="flex-grow">
            <MainContent />
          </main>
          <Footer />
        </div>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App