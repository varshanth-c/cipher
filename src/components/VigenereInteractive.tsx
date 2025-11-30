import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const inputSchema = z.object({
  plaintext: z.string()
    .trim()
    .min(1, { message: "Plaintext cannot be empty" })
    .max(100, { message: "Plaintext must be less than 100 characters" })
    .regex(/^[A-Za-z\s]*$/, { message: "Only letters and spaces allowed" }),
  keyword: z.string()
    .trim()
    .min(1, { message: "Keyword cannot be empty" })
    .max(20, { message: "Keyword must be less than 20 characters" })
    .regex(/^[A-Za-z]*$/, { message: "Only letters allowed in keyword" })
});

const VigenereInteractive = () => {
  const [plaintext, setPlaintext] = useState("");
  const [keyword, setKeyword] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [repeatedKey, setRepeatedKey] = useState("");
  const [steps, setSteps] = useState<Array<{letter: string, keyLetter: string, result: string, calculation: string}>>([]);
  const { toast } = useToast();

  const encrypt = () => {
    try {
      const validated = inputSchema.parse({ plaintext, keyword });
      
      const cleanPlaintext = validated.plaintext.toUpperCase().replace(/\s/g, '');
      const cleanKeyword = validated.keyword.toUpperCase();
      
      if (cleanPlaintext.length === 0) {
        toast({
          title: "Error",
          description: "Please enter some text to encrypt",
          variant: "destructive"
        });
        return;
      }
      
      let result = "";
      let keyRepeated = "";
      const detailedSteps = [];
      
      for (let i = 0; i < cleanPlaintext.length; i++) {
        const plainChar = cleanPlaintext[i];
        const keyChar = cleanKeyword[i % cleanKeyword.length];
        keyRepeated += keyChar;
        
        const plainNum = plainChar.charCodeAt(0) - 65;
        const keyNum = keyChar.charCodeAt(0) - 65;
        const encryptedNum = (plainNum + keyNum) % 26;
        const encryptedChar = String.fromCharCode(encryptedNum + 65);
        
        result += encryptedChar;
        
        detailedSteps.push({
          letter: plainChar,
          keyLetter: keyChar,
          result: encryptedChar,
          calculation: `${plainChar}(${plainNum}) + ${keyChar}(${keyNum}) = ${encryptedNum} → ${encryptedChar}`
        });
      }
      
      setCiphertext(result);
      setRepeatedKey(keyRepeated);
      setSteps(detailedSteps);
      
      toast({
        title: "Encryption Successful!",
        description: `Your message has been encrypted.`
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
    setKeyword("");
    setCiphertext("");
    setRepeatedKey("");
    setSteps([]);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Try It Yourself: Vigenère Cipher</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Enter your own message and keyword to see how the Vigenère cipher works in real-time
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-border/50">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="plaintext">Your Message (Plaintext)</Label>
                  <Input
                    id="plaintext"
                    value={plaintext}
                    onChange={(e) => setPlaintext(e.target.value)}
                    placeholder="Enter message (letters only)"
                    maxLength={100}
                    className="mt-2 font-mono"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Only letters and spaces allowed, max 100 characters</p>
                </div>
                
                <div>
                  <Label htmlFor="keyword">Secret Keyword</Label>
                  <Input
                    id="keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword (letters only)"
                    maxLength={20}
                    className="mt-2 font-mono"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Letters only, max 20 characters</p>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={encrypt}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary"
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
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-card to-secondary/5 border-border/50">
              <h3 className="font-semibold mb-4 text-lg">Results</h3>
              <div className="space-y-4">
                {repeatedKey && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Repeated Key:</div>
                    <div className="font-mono text-lg bg-secondary/10 px-4 py-2 rounded-lg text-secondary break-all">
                      {repeatedKey}
                    </div>
                  </div>
                )}
                
                {ciphertext && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Encrypted Message:</div>
                    <div className="font-mono text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-accent/10 px-4 py-3 rounded-lg break-all">
                      {ciphertext}
                    </div>
                  </div>
                )}
                
                {!ciphertext && (
                  <div className="text-center text-muted-foreground py-8">
                    Enter a message and keyword, then click Encrypt to see the result
                  </div>
                )}
              </div>
            </Card>
          </div>
          
          {steps.length > 0 && (
            <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-border/50">
              <h3 className="font-semibold mb-4 text-lg">Step-by-Step Calculation</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {steps.map((step, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">Step {index + 1}</span>
                      <span className="font-mono text-xl font-bold text-accent">{step.result}</span>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono break-all">
                      {step.calculation}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default VigenereInteractive;
