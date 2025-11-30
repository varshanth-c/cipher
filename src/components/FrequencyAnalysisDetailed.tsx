import { Card } from "@/components/ui/card";
import { BarChart3, AlertTriangle, Search, CheckCircle2 } from "lucide-react";

const FrequencyAnalysisDetailed = () => {
  const allFrequencies = [
    { letter: "E", percent: 12.7, color: "primary" },
    { letter: "T", percent: 9.1, color: "secondary" },
    { letter: "A", percent: 8.2, color: "accent" },
    { letter: "O", percent: 7.5, color: "primary" },
    { letter: "I", percent: 7.0, color: "secondary" },
    { letter: "N", percent: 6.7, color: "accent" },
    { letter: "S", percent: 6.3, color: "primary" },
    { letter: "H", percent: 6.1, color: "secondary" },
    { letter: "R", percent: 6.0, color: "accent" },
    { letter: "D", percent: 4.3, color: "primary" },
    { letter: "L", percent: 4.0, color: "secondary" },
    { letter: "C", percent: 2.8, color: "accent" },
    { letter: "U", percent: 2.8, color: "primary" },
    { letter: "M", percent: 2.4, color: "secondary" },
    { letter: "W", percent: 2.4, color: "accent" },
    { letter: "F", percent: 2.2, color: "primary" },
    { letter: "G", percent: 2.0, color: "secondary" },
    { letter: "Y", percent: 2.0, color: "accent" },
    { letter: "P", percent: 1.9, color: "primary" },
    { letter: "B", percent: 1.5, color: "secondary" }
  ];

  const attackSteps = [
    {
      step: 1,
      title: "Collect the Ciphertext",
      description: "Gather a sufficiently long encrypted message. The longer the text, the more accurate the frequency analysis will be.",
      icon: Search,
      color: "primary"
    },
    {
      step: 2,
      title: "Count Letter Frequencies",
      description: "Count how many times each letter appears in the ciphertext. Create a frequency table showing the percentage of each letter.",
      icon: BarChart3,
      color: "secondary"
    },
    {
      step: 3,
      title: "Compare with English Frequencies",
      description: "Compare your frequency table with known English letter frequencies. Look for patterns and matches.",
      icon: CheckCircle2,
      color: "accent"
    },
    {
      step: 4,
      title: "Make Initial Substitutions",
      description: "Start with the most common letters. If 'X' appears most frequently, it's likely 'E'. If 'Y' is second most common, try 'T'.",
      icon: AlertTriangle,
      color: "primary"
    },
    {
      step: 5,
      title: "Look for Common Words",
      description: "Search for common short words like 'THE', 'AND', 'FOR'. Use context clues to verify your substitutions.",
      icon: Search,
      color: "secondary"
    },
    {
      step: 6,
      title: "Iteratively Refine",
      description: "Test your substitutions. If they don't make sense, adjust them. Continue until the message becomes readable.",
      icon: CheckCircle2,
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl">
              <Search className="w-12 h-12 text-accent" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">Frequency Analysis in Detail</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The most powerful technique for breaking monoalphabetic ciphers by analyzing letter patterns
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border/50 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-accent" />
              <h3 className="font-semibold text-2xl">Complete English Letter Frequency Table</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {allFrequencies.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-lg w-8">{item.letter}</span>
                      <span className="text-muted-foreground">
                        {index === 0 && "Most common"}
                        {index === 1 && "2nd most common"}
                        {index === 2 && "3rd most common"}
                        {index > 2 && index < 6 && "Very common"}
                        {index >= 6 && index < 10 && "Common"}
                        {index >= 10 && "Less common"}
                      </span>
                    </div>
                    <span className="font-semibold">{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${item.color} to-${item.color}/70 rounded-full transition-all duration-500`}
                      style={{ width: `${(item.percent / 12.7) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Why This Matters
              </h4>
              <p className="text-muted-foreground">
                In English text, the letter 'E' appears about 12.7% of the time - roughly 1 in every 8 letters! 
                This predictable pattern means that in a monoalphabetic cipher, whatever letter 'E' is encrypted 
                to will also appear about 12.7% of the time. By counting letters in the ciphertext and matching 
                their frequencies to this table, cryptanalysts can deduce the substitution mapping.
              </p>
            </div>
          </Card>
          
          <h3 className="text-3xl font-bold text-center mb-8">Step-by-Step Attack Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {attackSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} className={`p-6 bg-gradient-to-br from-${step.color}/5 to-transparent border-border/50 hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-${step.color}/10 flex items-center justify-center text-${step.color} font-bold flex-shrink-0`}>
                      {step.step}
                    </div>
                    <Icon className={`w-6 h-6 text-${step.color} mt-2`} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border-2 border-amber-500/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Real Example: Breaking a Cipher</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">Encrypted Message:</div>
                <div className="font-mono text-lg bg-background/50 px-4 py-3 rounded-lg">
                  ZMV JVXIVZ DVHHTLV TH MTAAVU TU ZMV XTIZ
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-3">Frequency Analysis:</div>
                  <div className="space-y-2 bg-background/50 p-4 rounded-lg">
                    <div className="flex justify-between font-mono text-sm">
                      <span>V appears 6 times</span>
                      <span className="text-green-500">→ likely E</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm">
                      <span>Z appears 4 times</span>
                      <span className="text-green-500">→ likely T</span>
                    </div>
                    <div className="flex justify-between font-mono text-sm">
                      <span>M appears 4 times</span>
                      <span className="text-green-500">→ likely H</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-3">Progressive Decryption:</div>
                  <div className="space-y-2 bg-background/50 p-4 rounded-lg">
                    <div className="font-mono text-sm">THE _E__E_ _E__A_E I_ HIDDEN IN THE _A__</div>
                    <div className="text-xs text-muted-foreground">↓ Fill in common words</div>
                    <div className="font-mono text-sm font-bold text-green-500">THE SECRET MESSAGE IS HIDDEN IN THE CART</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground italic pt-4">
                By combining frequency analysis with pattern recognition and common word knowledge, 
                the cipher can be broken without knowing the key!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FrequencyAnalysisDetailed;
