import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Banque Numerique - Application Web',
    description: 'Une application de logiciel de banque permettant de gérer les transactions et les utilisateurs d’une banque .',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    liveDemo: '#',
    github: 'https://github.com/lyndor-fn/banque-numerique',
  },
  {
    title: 'SUNUPHARMA - Application Mobile',
    description: 'Application mobile pour la gestion de stock et ventes pharmaceutiques avec un programme console permettant la manipulation, le stockage et l’affichage des données avec gestion d’erreurs',
    technologies: ['Language C'],
    liveDemo: '#',
    github: 'https://github.com/lyndor-fn/ProjetSunupharma'
  },
  {
    title: 'Gestion des Notes Etudiants',
    description: 'Un programme local complet pour la gestion des notes des étudiants, incluant l\'authentification, la gestion des notes ',
    technologies: ['Language C'],
    liveDemo: '#',
    github: 'https://github.com/lyndor-fn/gestion-notes',
  },
    {
    title: 'Application de réservation de services de beauté',
    description: 'Site web moderne et réactif pour une filtrage, réservation, validation des formulaires,confirmation dynamique et suppression d’éléments',
    technologies: ['React', 'JavaScript', 'DOM', 'Bootstrap'],
    liveDemo: '#',
    github: 'https://github.com/lyndor-fn/hair-studio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          Mes Projets de coeur
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 grid-cards">
          {projectsData.map((project, i) => (
            <div key={project.title} className="reveal" style={{animationDelay: `${i * 60}ms`}}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;