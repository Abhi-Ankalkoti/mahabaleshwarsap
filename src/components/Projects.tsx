
import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "AI Resume Analyzer",
      summary: "Extracts key insights from resumes using NLP and provides intelligent recommendations.",
      tech: ["Python", "NLP", "Flask", "Machine Learning"],
      category: "AI/ML",
      featured: true,
      status: "Completed"
    },
    {
      title: "AlertQ – Disaster Management Platform",
      summary: "Real-time coordination system for emergencies with location tracking and communication tools.",
      tech: ["React", "Node.js", "MongoDB", "Firebase"],
      category: "Web Development",
      featured: true,
      status: "Completed"
    },
    {
      title: "Smart Compost Maker",
      summary: "IoT-enabled compost device with sensors, automation, and mobile app control.",
      tech: ["Arduino", "Python", "IoT", "Mobile App"],
      category: "IoT",
      featured: false,
      status: "Completed"
    },
    {
      title: "DocMorph AI",
      summary: "Document formatting & OCR-based smart converter with AI-powered text extraction.",
      tech: ["Python", "OpenCV", "Tesseract", "AI"],
      category: "AI/ML",
      featured: true,
      status: "Completed"
    },
    {
      title: "RankTrek.in",
      summary: "EdTech platform supporting 2nd PUC students' career mapping and guidance.",
      tech: ["Firebase", "Python", "SQL", "Analytics"],
      category: "Web Development",
      featured: true,
      status: "Live"
    },
    {
      title: "Smart Health Band for Defence",
      summary: "Health tracker for soldiers with real-time vital monitoring and emergency alerts.",
      tech: ["Embedded Systems", "Cloud", "IoT", "Mobile"],
      category: "IoT",
      featured: true,
      status: "Prototype"
    },
    {
      title: "Construction Material Trading Platform",
      summary: "E-commerce platform for organized material procurement with supplier management.",
      tech: ["React", "Supabase", "TypeScript", "E-commerce"],
      category: "Web Development",
      featured: false,
      status: "In Progress"
    },
    {
      title: "Realtime Motion Tracker",
      summary: "Computer Vision tool for motion detection with intelligent alerts and tracking.",
      tech: ["OpenCV", "Python", "Computer Vision"],
      category: "AI/ML",
      featured: false,
      status: "Completed"
    }
  ];

  const categories = ["All", "AI/ML", "Web Development", "IoT"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Prototype": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my technical projects spanning AI/ML, web development, and IoT solutions.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="hover:scale-105 transition-transform duration-200"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border hover:border-primary/30 group relative overflow-hidden"
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">{project.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium hover:bg-blue-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
