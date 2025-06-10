
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "🧩",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "SQL", level: 80 },
        { name: "Google Cloud", level: 75 }
      ]
    },
    {
      title: "AI/ML & Data",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "NLP", level: 80 },
        { name: "OpenCV", level: 78 },
        { name: "Data Analysis", level: 82 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "Docker", level: 70 },
        { name: "Power BI", level: 75 },
        { name: "Excel", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Problem Solving", level: 92 },
        { name: "Time Management", level: 88 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        <span className="text-sm text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden relative">
        <div
          className={`h-3 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative ${
            isVisible ? '' : 'w-0'
          }`}
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.5) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl"></div>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className={`text-3xl mr-3 p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      delay={index * 200 + skillIndex * 100}
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
