import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-4 bg-amber-800 text-amber-100">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Artur & Yannick
        </p>
        <p className="text-xs mt-1">
          Avec ♥ de la Suisse à Montpellier
        </p>
      </div>
    </footer>
  );
};

export default Footer;