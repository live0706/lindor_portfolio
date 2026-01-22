const About = () => {
  return (
    <section id="about" className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          À Propos de Moi
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <div className="md:w-1/3 shrink-0">
            <div className="w-72 h-72 md:w-80 md:h-80 mx-auto border-4 border-accent/50 shadow-lg bg-card-bg flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-inter text-accent mb-4">Passionné par le Développement Web</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Développeur full stack avec une passion pour la création d'expériences utilisateur fluides et engageantes. J'ai de l'expérience dans la construction et la maintenance d'applications web en utilisant des technologies modernes comme React, TypeScript, et Tailwind CSS.
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