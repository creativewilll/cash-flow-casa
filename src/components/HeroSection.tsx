import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, MessageCircle, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main heading */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Sell Your Home{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agent-Free
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bypass high agent fees with our AI-powered platform. Get instant cash offers, 
            personalized marketing tools, and keep more money in your pocket.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group"
            >
              Get 4 Cash Offers Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
            >
              Calculate My Net Proceeds
            </Button>
          </div>

          {/* Quick action icons */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calculator className="h-5 w-5 text-primary" />
              <span>Instant Valuation</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MessageCircle className="h-5 w-5 text-accent" />
              <span>AI Assistant</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <TrendingUp className="h-5 w-5 text-success" />
              <span>Market Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};