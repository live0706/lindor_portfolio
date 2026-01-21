import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/lyndor-fn', icon: <Github size={20} />, name: 'GitHub' },
    { href: 'https://www.linkedin.com/in/pape-lindor-fall-5847b2342/', icon: <Linkedin size={20} />, name: 'LinkedIn' },
    { href: 'https://x.com/lyndor_jr', icon: <Twitter size={20} />, name: 'Twitter' },
  ];

  return (
    <footer className="bg-card-bg border-t border-primary/20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Lindor. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;