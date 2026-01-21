import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-[calc(100vh-80px)] flex items-center justify-center text-center bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-inter text-white mb-4 leading-tight">
          Développeur Frontend Créatif
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Je transforme des idées complexes en applications web élégantes et intuitives. Bienvenue dans mon univers digital.
        </p>
        <a
          href="#projects"
          className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 inline-flex items-center text-lg"
        >
          Découvrir mes projets
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#about" aria-label="Scroll to about section">
              <ArrowDown className="w-8 h-8 text-gray-500 animate-bounce hover:text-accent" />
          </a>
      </div>
    </section>
  );
};

export default Hero;