import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Plus, Zap, Truck } from "lucide-react";

const offerOptions = [
  {
    title: "Basic Listing",
    description: "Free",
    icon: DollarSign,
    features: ["Address & basic specs", "Property photos", "Direct buyer contact"],
    isRecommended: false
  },
  {
    title: "Enhanced Listing",
    description: "$197",
    icon: Plus,
    features: ["Virtual tour included", "Featured placement", "Buyer matching alerts", "Community verification"],
    isRecommended: true
  },
  {
    title: "Premium Showcase",
    description: "$497",
    icon: Zap,
    features: ["Professional staging photos", "Video walkthrough", "Highlight placement", "Social media promotion"],
    isRecommended: false
  },
  {
    title: "Intelligence Package",
    description: "Add-On",
    icon: Truck,
    features: ["Market analysis", "Agent audit access", "Net proceeds calculator", "Community insights"],
    isRecommended: false
  }
];

export const CashOfferOptions = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-accent">Coming Soon</span> Showcase Tiers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            List your Coming Soon property and connect with pre-registered buyers before going public
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerOptions.map((option, index) => (
            <Card key={index} className={`relative transition-all hover:shadow-lg ${
              option.isRecommended ? 'ring-2 ring-primary shadow-lg' : ''
            }`}>
              {option.isRecommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {option.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">$$$,$$$ </div>
                  <p className="text-sm text-muted-foreground">OFFER AMOUNT</p>
                </div>

                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    option.isRecommended 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-accent hover:bg-accent/90'
                  }`}
                >
                  View details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};