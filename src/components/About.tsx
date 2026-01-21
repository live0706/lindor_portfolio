const About = () => {
  return (
    <section id="about" className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          À Propos de Moi
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="bg-primary w-60 h-60 md:w-72 md:h-72 rounded-full mx-auto flex items-center justify-center border-4 border-accent/50 shadow-lg">
                <span className="text-gray-300 text-xl font-inter">Photo</span>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-inter text-accent mb-4">Passionné par le Développement Web</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Développeur frontend avec une passion pour la création d'expériences utilisateur fluides et engageantes. J'ai de l'expérience dans la construction et la maintenance d'applications web en utilisant des technologies modernes comme React, TypeScript, et Tailwind CSS.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences et contribuer à des projets innovants. Mon objectif est d'écrire du code propre, efficace et maintenable qui résout de vrais problèmes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;