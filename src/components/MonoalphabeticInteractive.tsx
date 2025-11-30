import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, Shuffle } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const inputSchema = z.object({
  plaintext: z.string()
    .trim()
    .min(1, { message: "Plaintext cannot be empty" })
    .max(200, { message: "Plaintext must be less than 200 characters" })
    .regex(/^[A-Za-z\s]*$/, { message: "Only letters and spaces allowed" })
});

const MonoalphabeticInteractive = () => {
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [substitutionMap, setSubstitutionMap] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const generateRandomSubstitution = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shuffled = alphabet.split('').sort(() => Math.random() - 0.5);
    const map: Record<string, string> = {};
    
    for (let i = 0; i < alphabet.length; i++) {
      map[alphabet[i]] = shuffled[i];
    }
    
    setSubstitutionMap(map);
    toast({
      title: "New Substitution Created!",
      description: "A random substitution mapping has been generated."
    });
  };

  useEffect(() => {
    generateRandomSubstitution();
  }, []);

  const encrypt = () => {
    try {
      const validated = inputSchema.parse({ plaintext });
      
      const cleanPlaintext = validated.plaintext.toUpperCase();
      let result = "";
      
      for (let char of cleanPlaintext) {
        if (char === ' ') {
          result += ' ';
        } else {
          result += substitutionMap[char] || char;
        }
      }
      
      setCiphertext(result);
      
      toast({
        title: "Encryption Successful!",
        description: "Your message has been encrypted."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    }
  };

  const reset = () => {
    setPlaintext("");
    setCiphertext("");
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Try It Yourself: Monoalphabetic Cipher</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Enter your message and see how it's encrypted with a fixed substitution alphabet
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/5 border-border/50">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mono-plaintext">Your Message (Plaintext)</Label>
                  <Input
                    id="mono-plaintext"
                    value={plaintext}
                    onChange={(e) => setPlaintext(e.target.value)}
                    placeholder="Enter message (letters only)"
                    maxLength={200}
                    className="mt-2 font-mono"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Only letters and spaces allowed, max 200 characters</p>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={encrypt}
                    className="flex-1 bg-gradient-to-r from-secondary to-accent"
                  >
                    Encrypt
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    onClick={reset}
                    variant="outline"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
                
                <Button 
                  onClick={generateRandomSubstitution}
                  variant="outline"
                  className="w-full"
                >
                  <Shuffle className="mr-2 w-4 h-4" />
                  Generate New Substitution
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-border/50">
              <h3 className="font-semibold mb-4 text-lg">Results</h3>
              <div className="space-y-4">
                {ciphertext ? (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Encrypted Message:</div>
                    <div className="font-mono text-2xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent bg-accent/10 px-4 py-3 rounded-lg break-all">
                      {ciphertext}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    Enter a message and click Encrypt to see the result
                  </div>
                )}
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Current Substitution Mapping</h3>
              <span className="text-sm text-muted-foreground">A fixed mapping for all letters</span>
            </div>
            <div className="grid grid-cols-13 gap-2">
              {alphabet.split('').map((letter) => (
                <div key={letter} className="text-center">
                  <div className="font-mono text-xs font-bold text-muted-foreground mb-1">{letter}</div>
                  <div className="font-mono text-sm font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {substitutionMap[letter]}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Notice how each letter always maps to the same encrypted letter - this is the weakness!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MonoalphabeticInteractive;
