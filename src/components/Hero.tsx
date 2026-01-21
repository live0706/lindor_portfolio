import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-[calc(100vh-80px)] flex items-center justify-center text-center gradient-bg bg-animated relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-inter text-white mb-4 leading-tight animate-fade-up">
          Développeur Frontend Créatif
        </h1>
        <p className="text-lg md:text-xl text-gray-200/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '120ms'}}>
          Je transforme des idées complexes en applications web élégantes et intuitives. Bienvenue dans mon univers digital.
        </p>
        <a
          href="#projects"
          className="bg-accent/95 text-white font-bold py-3 px-8 rounded-full hover:brightness-105 transition duration-300 inline-flex items-center text-lg btn-animated animate-fade-up"
          style={{animationDelay: '220ms'}}
        >
          Découvrir mes projets
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#about" aria-label="Scroll to about section">
              <ArrowDown className="w-8 h-8 text-gray-200/80 animate-bounce hover:text-accent" />
          </a>
      </div>
    </section>
  );
};

export default Hero;