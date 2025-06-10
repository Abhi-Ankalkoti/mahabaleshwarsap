
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new opportunities, collaborations, and exciting projects. 
            Let's connect and build something amazing together!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:mahabaleshwarsa@gmail.com" 
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all border"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              <span>mahabaleshwarsa@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/mahabaleshwar-s-a-9ba722291" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all border"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span>LinkedIn Profile</span>
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all border"
            >
              <Github className="w-5 h-5 text-blue-600" />
              <span>GitHub Profile</span>
            </a>
            
            <a 
              href="tel:9019986670" 
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-all border"
            >
              <span className="text-blue-600">📱</span>
              <span>9019986670</span>
            </a>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.open("mailto:mahabaleshwarsa@gmail.com", "_blank")}
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
