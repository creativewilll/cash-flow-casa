import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Mic, Calculator } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register Your Search",
    description: "Tell us what you're looking for—one time. We search all Coming Soon platforms for you.",
    icon: Zap,
    color: "text-primary"
  },
  {
    number: "02", 
    title: "Get Matched with Owners",
    description: "Connect directly with sellers before properties go public. Past owners provide neighborhood intel.",
    icon: BarChart3,
    color: "text-accent"
  },
  {
    number: "03",
    title: "Access Intelligence Tools",
    description: "Use market analysis, agent audits, and community insights to make informed decisions.",
    icon: Mic,
    color: "text-success"
  },
  {
    number: "04",
    title: "Choose Your Path",
    description: "Hire an agent, use an attorney, go DIY—we support whatever works for you.",
    icon: Calculator,
    color: "text-warning"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How <span className="text-accent">ComingSoonMLS</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Intelligence first. Community connection. Then you decide your next step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-card hover:shadow-lg transition-all group">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-muted/20 mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                
                <div className={`w-16 h-16 rounded-full bg-${step.color.replace('text-', '')}/10 flex items-center justify-center mb-6`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all group"
          >
            <Mic className="mr-2 h-5 w-5" />
            Register as Buyer
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            List Coming Soon Property
          </Button>
        </div>
      </div>
    </section>
  );
};