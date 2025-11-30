import { Shield } from "lucide-react";

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-6">What Is Cryptography?</h2>
          
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Cryptography is the art and science of protecting information by transforming it into an unreadable format. 
            For centuries, people have used encryption to keep messages secret from enemies, protect military plans, 
            and secure sensitive communications. Classical ciphers like the Vigenère and Monoalphabetic ciphers were 
            among the earliest methods used to encode messages before modern computers existed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
