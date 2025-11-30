import { Card } from "@/components/ui/card";
import { FileKey, Repeat, Binary, Plus, Type } from "lucide-react";

const steps = [
  {
    icon: FileKey,
    title: "Choose a Keyword",
    description: "Select a secret word that will be used as the encryption key",
    color: "primary"
  },
  {
    icon: Repeat,
    title: "Repeat the Keyword",
    description: "Repeat the keyword to match the length of your message",
    color: "secondary"
  },
  {
    icon: Binary,
    title: "Convert to Numbers",
    description: "Transform both the plaintext and key letters into numbers (A=0, B=1, etc.)",
    color: "accent"
  },
  {
    icon: Plus,
    title: "Add & Apply Modulo",
    description: "Add plaintext and key numbers together, then apply mod 26 to stay in alphabet range",
    color: "primary"
  },
  {
    icon: Type,
    title: "Convert Back to Letters",
    description: "Transform the resulting numbers back into letters to get your ciphertext",
    color: "secondary"
  }
];

const VigenereSteps = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Follow these five simple steps to encrypt a message using the Vigenère cipher
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Example: Encrypting "HELLO" with key "KEY"</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary mb-2">Step 1</div>
                  <div className="font-mono text-xl font-bold bg-primary/10 px-4 py-3 rounded-lg">KEY</div>
                  <div className="text-xs text-muted-foreground mt-2">Our keyword</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-secondary mb-2">Step 2</div>
                  <div className="font-mono text-xl font-bold bg-secondary/10 px-4 py-3 rounded-lg">KEYKE</div>
                  <div className="text-xs text-muted-foreground mt-2">Repeated to match HELLO length</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-accent mb-2">Step 3</div>
                  <div className="space-y-1 bg-accent/10 px-4 py-3 rounded-lg">
                    <div className="font-mono text-sm">H=7, E=4, L=11</div>
                    <div className="font-mono text-sm">K=10, E=4, Y=24</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Convert to numbers</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary mb-2">Step 4</div>
                  <div className="space-y-1 bg-primary/10 px-4 py-3 rounded-lg">
                    <div className="font-mono text-sm">7+10=17</div>
                    <div className="font-mono text-sm">4+4=8</div>
                    <div className="font-mono text-sm">11+24=9</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Add & mod 26</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-sm font-semibold text-secondary mb-2">Step 5</div>
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent bg-accent/10 px-4 py-3 rounded-lg">RIJVS</div>
                  <div className="text-xs text-muted-foreground mt-2">Final ciphertext!</div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-card to-muted/20 border-border/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  
                  <div className="mt-4 mb-4">
                    <div className={`p-3 bg-${step.color}/10 rounded-xl inline-flex group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 text-${step.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VigenereSteps;
