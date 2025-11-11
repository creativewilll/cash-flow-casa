import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Shield, Brain, Zap, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Nationwide Coming Soon Access",
    description: "Search all Coming Soon listings across multiple platforms in one place. No more checking 10 different sites—we aggregate it all for you.",
    icon: Globe,
    badge: "All Platforms",
    color: "text-accent"
  },
  {
    title: "Hyperlocal Intelligence", 
    description: "Get neighborhood and block-level insights from actual property owners. Real truths about schools, noise, and development—not just MLS data.",
    icon: Brain,
    badge: "Community-Verified",
    color: "text-primary"
  },
  {
    title: "Community Connection",
    description: "Connect with Past, Present, and Future owners. Get mentorship, share insights, and verify information through real owner experiences.",
    icon: Shield, 
    badge: "Owner-to-Owner",
    color: "text-success"
  },
  {
    title: "Social Media Integrated",
    description: "Share listings, connect with neighbors, and discover properties through your social networks. Built for how people really communicate.",
    icon: Smartphone,
    badge: "Social-First",
    color: "text-warning"
  },
  {
    title: "Intelligence Tools", 
    description: "Access market analysis, agent audits, contract reviews, and net proceeds calculators. Make informed decisions with real data.",
    icon: Zap,
    badge: "Data-Driven",
    color: "text-accent"
  },
  {
    title: "No Egos, Just Owners",
    description: "We don't push agendas or sell services. Just property owners helping each other make better decisions with better information.",
    icon: Lock,
    badge: "Community First", 
    color: "text-primary"
  }
];

export const Features = () => { 
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for Property Owners,{" "}
            <span className="text-accent">Powered by Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not a marketplace pushing services. ComingSoonMLS is a community platform connecting property owners 
            with intelligence, inventory, and each other. All the listings. Zero egos.
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