
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a final-year Computer Science & Engineering student passionate about building 
            AI-driven applications that solve real-world problems. With experience across frontend, 
            backend, AI/ML, and cloud platforms, I've worked on projects that span education, 
            healthcare, governance, and productivity. My goal is to create technology that makes 
            a meaningful impact on society while pushing the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
