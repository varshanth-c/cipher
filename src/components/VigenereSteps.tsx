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
