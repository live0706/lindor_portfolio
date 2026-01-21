import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
};

const ProjectCard = ({ title, description, technologies, liveDemo, github }: ProjectCardProps) => {
  return (
    <div className="card-advanced bg-card-bg rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col border border-primary/30 card-hover animate-fade-up">
      <div className="card-border-glow" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-inter text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-primary/60 text-gray-100 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 bg-dark-bg/50 border-t border-primary/30 flex justify-end items-center">
        <div className="flex items-center gap-4">
           <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center gap-2" title="Live Demo">
            <ExternalLink size={20} />
          </a>
           <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center gap-2" title="GitHub Repository">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;