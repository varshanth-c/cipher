import { Button } from "@/components/ui/button";
import { Lock, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("intro");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Classical Cryptography</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Vigenère Cipher
              </span>
              <br />
              <span className="text-foreground">&</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Monoalphabetic Cipher
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Simple explanation of two classical encryption methods that shaped the history of secure communication.
            </p>
            
            <Button 
              onClick={scrollToContent}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 group"
            >
              Learn More
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Cryptography and encryption illustration with lock and binary code" 
              className="relative rounded-3xl shadow-2xl w-full animate-float"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
