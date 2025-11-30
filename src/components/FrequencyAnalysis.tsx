import { Card } from "@/components/ui/card";
import { BarChart3, Search } from "lucide-react";

const FrequencyAnalysis = () => {
  const frequencies = [
    { letter: "E", percent: 12.7, color: "primary" },
    { letter: "T", percent: 9.1, color: "secondary" },
    { letter: "A", percent: 8.2, color: "accent" },
    { letter: "O", percent: 7.5, color: "primary" },
    { letter: "I", percent: 7.0, color: "secondary" },
    { letter: "N", percent: 6.7, color: "accent" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl">
              <Search className="w-12 h-12 text-accent" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">Frequency Analysis</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            How cryptanalysts break monoalphabetic ciphers by analyzing letter patterns
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-xl">English Letter Frequencies</h3>
              </div>
              
              <div className="space-y-3">
                {frequencies.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono font-bold">{item.letter}</span>
                      <span className="text-muted-foreground">{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${item.color} to-${item.color}/70 rounded-full transition-all duration-500`}
                        style={{ width: `${(item.percent / 12.7) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Count Letter Occurrences</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyze the encrypted text and count how many times each letter appears.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Match with English Frequencies</h4>
                    <p className="text-sm text-muted-foreground">
                      Compare the frequency distribution with known English letter frequencies.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Deduce the Mapping</h4>
                    <p className="text-sm text-muted-foreground">
                      The most frequent encrypted letter likely represents 'E', the second most frequent likely 'T', and so on.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequencyAnalysis;
