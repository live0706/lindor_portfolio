import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Zuri Market - Plateforme E-commerce',
    description: 'Une application e-commerce complète avec des fonctionnalités de panier, de paiement et de gestion des produits.',
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Afya-App - Suivi de Santé',
    description: 'Application mobile pour le suivi des signes vitaux et la prise de rendez-vous médicaux en ligne.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Jifunze - Plateforme E-learning',
    description: 'Une plateforme pour suivre des cours en ligne, avec gestion des progrès et certifications.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Vercel'],
    liveDemo: '#',
    github: '#',
  },
    {
    title: 'Sankofa Solutions - Site Vitrine',
    description: 'Site web moderne et réactif pour une startup technologique, axé sur la performance et le SEO.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    liveDemo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          Mes Projets Récents
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