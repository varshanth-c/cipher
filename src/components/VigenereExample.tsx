import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const VigenereExample = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Vigenère Cipher Example</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            See how the Vigenère cipher transforms a simple message
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Plaintext</div>
                  <div className="font-mono text-2xl font-bold text-foreground bg-muted/50 px-4 py-3 rounded-lg">
                    ATTACK
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Keyword</div>
                  <div className="font-mono text-2xl font-bold text-primary bg-primary/10 px-4 py-3 rounded-lg">
                    LEMON
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Repeated Key</div>
                <div className="font-mono text-2xl font-bold text-secondary bg-secondary/10 px-4 py-3 rounded-lg text-center">
                  LEMONL
                </div>
              </div>
              
              <div className="flex items-center justify-center py-2">
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Ciphertext (Encrypted)</div>
                <div className="font-mono text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-accent/10 px-4 py-4 rounded-lg text-center">
                  LXFOPV
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border/50">
            <h3 className="font-semibold mb-3 text-lg">How it happened:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>A (0) + L (11) = 11 → <strong className="text-foreground">L</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>T (19) + E (4) = 23 → <strong className="text-foreground">X</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>T (19) + M (12) = 31 mod 26 = 5 → <strong className="text-foreground">F</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>A (0) + O (14) = 14 → <strong className="text-foreground">O</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>C (2) + N (13) = 15 → <strong className="text-foreground">P</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>K (10) + L (11) = 21 → <strong className="text-foreground">V</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VigenereExample;
