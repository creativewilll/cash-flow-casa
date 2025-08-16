import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Plus, Zap, Truck } from "lucide-react";

const offerOptions = [
  {
    title: "Cash Offer",
    description: "powered by RealtyAI",
    icon: DollarSign,
    features: ["Instant valuation", "No repairs needed", "Close in 7 days"],
    isRecommended: false
  },
  {
    title: "The Cash+",
    description: "powered by RealtyAI",
    icon: Plus,
    features: ["Higher offer amount", "Professional staging", "Market timing optimization"],
    isRecommended: true
  },
  {
    title: "Cash+ with Upgrades",
    description: "powered by RealtyAI",
    icon: Zap,
    features: ["Premium renovations", "AI-powered improvements", "Maximum value strategy"],
    isRecommended: false
  },
  {
    title: "Sell Now, Move Later",
    description: "powered by RealtyAI",
    icon: Truck,
    features: ["Flexible timing", "Rent-back options", "Moving assistance"],
    isRecommended: false
  }
];

export const CashOfferOptions = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-accent">Cash offer</span> options
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect selling strategy that maximizes your proceeds and fits your timeline
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