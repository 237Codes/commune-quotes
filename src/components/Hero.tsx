import { Github } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-hero py-20 px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Github className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Git & GitHub Workshop</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contributors Quotes Board
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Quotes added by students during the Git & GitHub workshop. 
            <br />
            Fork, edit, and submit your own!
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </header>
  );
};

export default Hero;
