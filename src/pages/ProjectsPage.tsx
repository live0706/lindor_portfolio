import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Zuri Market',
    description: 'A responsive e-commerce platform built with React and Stripe API, featuring a clean and modern UI.',
    tech: ['React', 'Tailwind CSS', 'Stripe API'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Sankofa Analytics',
    description: 'A data visualization dashboard using Chart.js and a custom API for real-time analytics.',
    tech: ['React', 'Chart.js', 'Node.js', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Jollof Real-time',
    description: 'A real-time chat application with Firebase authentication and Firestore database.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 font-['Inter']">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            technologies={project.tech}
            liveDemo={project.liveUrl}
            github={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;