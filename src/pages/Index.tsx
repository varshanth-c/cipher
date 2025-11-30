import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import VigenereConcept from "@/components/VigenereConcept";
import VigenereSteps from "@/components/VigenereSteps";
import VigenereExample from "@/components/VigenereExample";
import MonoalphabeticSection from "@/components/MonoalphabeticSection";
import FrequencyAnalysis from "@/components/FrequencyAnalysis";
import ComparisonSection from "@/components/ComparisonSection";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <VigenereConcept />
      <VigenereSteps />
      <VigenereExample />
      <MonoalphabeticSection />
      <FrequencyAnalysis />
      <ComparisonSection />
      <Conclusion />
    </main>
  );
};

export default Index;
