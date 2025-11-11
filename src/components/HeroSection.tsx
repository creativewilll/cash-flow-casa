import { Button } from "@/components/ui/button";
import { Home, Search, Users } from "lucide-react";
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
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            ComingSoonMLS:{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              All the Inventory. None of the Egos.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nationwide MLS access meets hyperlocal intelligence. Property owners helping property owners. 
            Community-driven. Social-powered. Coming Soon listings before they go public.
          </p>

          {/* Three Owner Type Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            >
              <Search className="mr-2 h-5 w-5" />
              I'm Looking to Buy
              <span className="ml-2 text-xs opacity-80">Future Owner</span>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            >
              <Home className="mr-2 h-5 w-5" />
              I'm Thinking of Selling
              <span className="ml-2 text-xs opacity-80">Present Owner</span>
            </Button>

            <Button 
              size="lg" 
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group w-full sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              I'm a Past Owner
              <span className="ml-2 text-xs opacity-80">Community Member</span>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">247</div>
              <div className="text-sm text-muted-foreground">Coming Soon Properties Showcased</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">1,834</div>
              <div className="text-sm text-muted-foreground">Property Owners in Community</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-2">63</div>
              <div className="text-sm text-muted-foreground">Hyperlocal Markets Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4,921</div>
              <div className="text-sm text-muted-foreground">Intelligence Reports Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};