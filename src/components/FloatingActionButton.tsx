
import { useState } from 'react';
import { MessageSquare, Github, Linkedin, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:mahabaleshwarsa@gmail.com',
      label: 'Email',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mahabaleshwar-s-a-9ba722291',
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'bg-gray-800 hover:bg-gray-900'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col gap-3 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 ${isOpen ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          <Button
            onClick={scrollToContact}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
            size="icon"
            title="Contact Me"
          >
            <MessageSquare className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main FAB */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        }`}
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
