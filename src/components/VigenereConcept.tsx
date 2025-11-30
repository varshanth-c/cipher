import { Key, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const VigenereConcept = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
              <Key className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">Vigenère Cipher</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A polyalphabetic cipher that uses a keyword to create multiple alphabet shifts, 
            making it significantly harder to break than simple substitution ciphers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Uses Repeating Keyword</h3>
              </div>
              <p className="text-muted-foreground">
                A secret keyword is repeated to match the length of the message, providing the encryption key.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Multiple Alphabet Shifts</h3>
              </div>
              <p className="text-muted-foreground">
                Each letter can be shifted by a different amount, creating a complex encryption pattern.
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-card to-muted/30 border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Harder to Break</h3>
              </div>
              <p className="text-muted-foreground">
                The varying shifts make frequency analysis much more difficult than with monoalphabetic ciphers.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VigenereConcept;
