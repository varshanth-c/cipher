import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import VigenereConcept from "@/components/VigenereConcept";
import VigenereSteps from "@/components/VigenereSteps";
import VigenereExample from "@/components/VigenereExample";
import VigenereInteractive from "@/components/VigenereInteractive";
import MonoalphabeticSection from "@/components/MonoalphabeticSection";
import MonoalphabeticInteractive from "@/components/MonoalphabeticInteractive";
import FrequencyAnalysisDetailed from "@/components/FrequencyAnalysisDetailed";
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
      <VigenereInteractive />
      <MonoalphabeticSection />
      <MonoalphabeticInteractive />
      <FrequencyAnalysisDetailed />
      <ComparisonSection />
      <Conclusion />
    </main>
  );
};

export default Index;
