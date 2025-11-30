import { Card } from "@/components/ui/card";
import { Lightbulb, History, GraduationCap } from "lucide-react";

const Conclusion = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
              <Lightbulb className="w-12 h-12 text-accent" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">Key Takeaways</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            What we learned about classical cryptography
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-xl inline-flex mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Vigenère is Stronger</h3>
              <p className="text-muted-foreground text-sm">
                The polyalphabetic nature and use of keywords make it significantly more secure than simple substitution.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-secondary/10 rounded-xl inline-flex mb-4">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Monoalphabetic is Simple</h3>
              <p className="text-muted-foreground text-sm">
                Easy to understand and use, but the fixed substitution pattern makes it vulnerable to attacks.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-accent/10 rounded-xl inline-flex mb-4">
                <History className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Historical Importance</h3>
              <p className="text-muted-foreground text-sm">
                Both ciphers demonstrate how encryption evolved from simple substitution to more complex methods.
              </p>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Understanding Classical Cryptography</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              While neither of these ciphers would be considered secure by modern standards, they represent 
              important stepping stones in the history of cryptography. The Vigenère cipher's use of multiple 
              alphabet shifts was revolutionary for its time, and the weaknesses of the monoalphabetic cipher 
              taught cryptographers the importance of avoiding patterns. Today's encryption methods like AES 
              and RSA build upon these foundational concepts, using complex mathematics to create virtually 
              unbreakable codes that protect our digital communications.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
