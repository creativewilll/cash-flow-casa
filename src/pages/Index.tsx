import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CashOfferOptions } from "@/components/CashOfferOptions";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AIAgents } from "@/components/AIAgents";
import { PropertyForm } from "@/components/PropertyForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CashOfferOptions />
      <Features />
      <HowItWorks />
      <AIAgents />
      <PropertyForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
