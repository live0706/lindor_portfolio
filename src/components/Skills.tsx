import { Code, Server, Smartphone, Cloud, BrainCircuit } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const skillsData = {
  frontend: [
    { name: 'React', icon: <Code size={32} /> },
    { name: 'TypeScript', icon: <Code size={32} /> },
    { name: 'Tailwind CSS', icon: <Code size={32} /> },
    { name: 'Next.js', icon: <Code size={32} /> },
  ],
  backend: [
    { name: 'Node.js', icon: <Server size={32} /> },
    { name: 'Express', icon: <Server size={32} /> },
    { name: 'Supabase', icon: <Cloud size={32} /> },
    { name: 'MySQL', icon: <Server size={32} /> },
  ],
  mobile: [
      { name: 'React Native', icon: <Smartphone size={32} /> },
  ],
  other: [
      { name: 'Git & GitHub', icon: <BrainCircuit size={32} /> },
      { name: 'Figma', icon: <BrainCircuit size={32} /> },
      { name: 'Jest', icon: <BrainCircuit size={32} /> },
  ]
};

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="card-advanced p-6">
    <div className="card-border-glow" />
    <h3 className="text-xl font-bold font-inter text-accent mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map(skill => (
        <div key={skill.name} className="flex items-center gap-3 bg-dark-bg/40 p-3 rounded-md reveal">
          <div className="text-accent bg-dark-bg/20 p-2 rounded-full inline-flex items-center justify-center">{skill.icon}</div>
          <span className="font-medium text-gray-200">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          Mes Compétences Techniques
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 grid-cards">
          <SkillCard title="Frontend" skills={skillsData.frontend} />
          <SkillCard title="Backend" skills={skillsData.backend} />
          <SkillCard title="Mobile" skills={skillsData.mobile} />
          <SkillCard title="Autres Outils" skills={skillsData.other} />
        </div>
      </div>
    </section>
  );
};

export default Skills;