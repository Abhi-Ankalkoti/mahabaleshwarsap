import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ParticleSystem from "./ParticleSystem";
import TerminalIntro from "./TerminalIntro";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const roles = ["AI Innovator 🤖", "Full-Stack Explorer 🚀", "Purpose-Driven Builder 💡"];

  useEffect(() => {
    const timer = setTimeout(() => setShowTerminal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mahabaleshwar_S_Ankalkoti_Resume.jpeg'; // Path to your resume in the public folder
    link.download = '/Mahabaleshwar_S_Ankalkoti_Resume.jpeg'; // Desired file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      {/* Particle System */}
      <ParticleSystem />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image with unique styling */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <img 
                src="/lovable-uploads/3e92a313-4c25-4f3c-96a0-b54f227357bc.png" 
                alt="Mahabaleshwar S Ankalkoti"
                className="w-36 h-36 rounded-full mx-auto border-4 border-white/20 shadow-2xl hover:scale-110 transition-transform duration-300 relative z-10 backdrop-blur-sm bg-white/10 object-cover"
                style={{ 
                  transform: 'translate(8px, 8px)',
                  filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.25))'
                }}
              />
            </div>
          </div>

          {/* Name with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mahabaleshwar S Ankalkoti
            </h1>
            
            <div className="h-16 flex items-center justify-center mb-4">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Passionate developer and AI enthusiast with a track record of building impactful, 
              socially-driven tech products. Winner of multiple hackathons and builder of RankTrek.in, 
              a platform that has helped over <span className="text-yellow-400 font-bold">500+ students</span> and counting.
            </p>
          </div>

          {/* Terminal Intro */}
          {showTerminal && (
            <div className="animate-fade-in mb-8">
              <TerminalIntro />
            </div>
          )}

          {/* Action Buttons with glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm border border-white/20"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("projects")}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white"
            >
              🔗 Explore Projects
            </Button>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:mahabaleshwarsa@gmail.com" 
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group shadow-xl"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/mahabaleshwar-s-a-9ba722291" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group shadow-xl"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 group shadow-xl"
            >
              <Github className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
