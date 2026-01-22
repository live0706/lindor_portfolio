import { useState } from 'react';
import html2pdf from 'html2pdf.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  const downloadPDF = () => {
    try {
      setIsGeneratingPDF(true);
      const element = document.body;
      const options = {
        margin: 0.5,
        filename: 'portfolio-pape-lindor-fall.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(options).from(element).save().then(() => {
        setIsGeneratingPDF(false);
      }).catch((error) => {
        console.error('Erreur lors de la génération du PDF:', error);
        alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
        setIsGeneratingPDF(false);
      });
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
      setIsGeneratingPDF(false);
    }
  };

  return (
    <header className="bg-dark-bg/85 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700/50 shadow-sm animate-fade-down">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-inter text-white">
          Pape Lindor Fall<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium hover:underline underline-offset-4 decoration-accent/80"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={downloadPDF}
            disabled={isGeneratingPDF}
            className="bg-accent hover:bg-accent/80 disabled:bg-accent/50 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 disabled:cursor-not-allowed"
          >
            {isGeneratingPDF ? 'Génération...' : 'Télécharger CV'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-t border-gray-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                downloadPDF();
              }}
              disabled={isGeneratingPDF}
              className="bg-accent hover:bg-accent/80 disabled:bg-accent/50 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 mt-2 disabled:cursor-not-allowed"
            >
              {isGeneratingPDF ? 'Génération...' : 'Télécharger CV'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;