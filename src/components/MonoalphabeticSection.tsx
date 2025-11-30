import { Card } from "@/components/ui/card";
import { Shuffle, AlertCircle } from "lucide-react";

const MonoalphabeticSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl">
              <Shuffle className="w-12 h-12 text-secondary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">Monoalphabetic Cipher</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A simple substitution cipher where each letter of the alphabet is replaced with one fixed letter throughout the entire message.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/5 border-border/50">
              <h3 className="font-semibold text-xl mb-4">Example Mapping</h3>
              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-lg font-bold">A</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-lg font-bold text-secondary">Q</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-lg font-bold">B</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-lg font-bold text-secondary">M</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-lg font-bold">C</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-lg font-bold text-secondary">X</span>
                </div>
                <div className="text-center text-muted-foreground text-sm pt-2">
                  ... and so on for all 26 letters
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-card to-accent/5 border-border/50">
              <h3 className="font-semibold text-xl mb-4">Quick Example</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Plaintext:</div>
                  <div className="font-mono text-xl font-bold bg-muted/50 px-4 py-2 rounded-lg">
                    HELLO
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Ciphertext:</div>
                  <div className="font-mono text-xl font-bold bg-accent/10 px-4 py-2 rounded-lg text-accent">
                    SVOOL
                  </div>
                </div>
                <div className="text-sm text-muted-foreground italic">
                  Using mapping: H→S, E→V, L→O
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Simple but Weak</h3>
                <p className="text-muted-foreground">
                  While easy to understand and implement, monoalphabetic ciphers are vulnerable to frequency analysis 
                  because each letter always maps to the same encrypted letter, revealing patterns.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MonoalphabeticSection;
