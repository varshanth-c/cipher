import { Card } from "@/components/ui/card";
import { Check, X, Shield, ShieldAlert } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Cipher Comparison</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding the key differences between these two classical encryption methods
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Vigenère Cipher</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Polyalphabetic</div>
                    <div className="text-sm text-muted-foreground">Uses multiple alphabet substitutions</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Keyword-Based</div>
                    <div className="text-sm text-muted-foreground">Requires a secret keyword for encryption</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">More Secure</div>
                    <div className="text-sm text-muted-foreground">Resistant to simple frequency analysis</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Complex Pattern</div>
                    <div className="text-sm text-muted-foreground">Same letter can encrypt differently each time</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Better Security</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-secondary/5 via-card to-accent/5 border-2 border-secondary/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <ShieldAlert className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Monoalphabetic Cipher</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Single Substitution</div>
                    <div className="text-sm text-muted-foreground">Each letter maps to one fixed letter</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Very Simple</div>
                    <div className="text-sm text-muted-foreground">Easy to understand and implement</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <X className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Weak Security</div>
                    <div className="text-sm text-muted-foreground">Vulnerable to frequency analysis attacks</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <X className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Fixed Pattern</div>
                    <div className="text-sm text-muted-foreground">Same letter always encrypts the same way</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Easy to Break</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
