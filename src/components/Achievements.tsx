
const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Winner of Hyperthon @ KLE Institute of Technology",
      description: "AI platform recommending Govt. Schemes based on credentials"
    },
    {
      icon: "🛡",
      title: "Finalist at NAIN 2.0",
      description: "Smart Health Band for Defense Systems"
    },
    {
      icon: "👨‍💻",
      title: "Chief Technology Officer at RankTrek.in",
      description: "Benefited 500+ PUC students in career mapping"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-all hover:scale-105 border">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
