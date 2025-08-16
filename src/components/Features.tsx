import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, Brain, Zap, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Voice-First Experience",
    description: "Talk to your AI agents through Siri, Alexa, Google Assistant, or direct voice commands. No apps to download or interfaces to learn.",
    icon: Smartphone,
    badge: "Siri Integration",
    color: "text-accent"
  },
  {
    title: "Always On Your Side", 
    description: "Unlike traditional real estate platforms that serve everyone, RealtyAI's AI only works for YOU. We're your personal advocate, not a marketplace.",
    icon: Shield,
    badge: "User-Centric",
    color: "text-primary"
  },
  {
    title: "Learns & Adapts",
    description: "Each interaction makes your AI smarter. It remembers your preferences, past transactions, and adapts its recommendations to your style.",
    icon: Brain, 
    badge: "Machine Learning",
    color: "text-success"
  },
  {
    title: "Lightning Fast Responses",
    description: "Get instant answers to complex real estate questions. Our AI processes market data, contracts, and regulations in milliseconds.",
    icon: Zap,
    badge: "1.2s Response",
    color: "text-warning"
  },
  {
    title: "Multi-Platform Access", 
    description: "Access your AI agents from anywhere - voice assistants, web chat, SMS, or direct integration with your favorite apps.",
    icon: Globe,
    badge: "Universal",
    color: "text-accent"
  },
  {
    title: "Privacy & Security First",
    description: "Voice biometric authentication, encrypted conversations, and user-controlled data retention. Your information stays private.",
    icon: Lock,
    badge: "Encrypted", 
    color: "text-primary"
  }
];

export const Features = () => { 
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for Real Estate,{" "}
            <span className="text-accent">Powered by AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not just another chatbot. RealtyAI is purpose-built for real estate with
            specialized AI that understands your market, your needs, and your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all group border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color.replace('text-', '')}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};