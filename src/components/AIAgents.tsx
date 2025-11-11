import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Calculator, Users, TrendingUp, Calendar, BarChart3 } from "lucide-react";

const agents = [
  {
    title: "Coming Soon Finder",
    badge: "AI-Powered",
    description: "Searches all Coming Soon platforms nationwide and alerts you to matches instantly",
    icon: Search,
    capabilities: [
      "Aggregate multiple MLS sources",
      "Match to your exact preferences", 
      "Real-time alerts for new listings",
      "Connect you directly with sellers"
    ],
    color: "text-accent"
  },
  {
    title: "Hyperlocal Intel", 
    badge: "Community-Driven",
    description: "Neighborhood and block-level insights from actual property owners who lived there",
    icon: TrendingUp,
    capabilities: [
      "Real school reviews from parents",
      "Noise and traffic patterns",
      "Upcoming development intel", 
      "Community verification"
    ],
    color: "text-primary"
  },
  {
    title: "Agent Audit Tool",
    badge: "Intelligence", 
    description: "Background check any agent before you sign—performance data, fees, red flags",
    icon: Users,
    capabilities: [
      "Past listing performance",
      "Commission comparison",
      "Reviews and violations",
      "Marketing plan analysis"
    ],
    color: "text-success"
  },
  {
    title: "Net Proceeds Calculator",
    badge: "Financial",
    description: "Know exactly what you'll walk away with after all costs, fees, and taxes",
    icon: Calculator,
    capabilities: [
      "All-in cost breakdown",
      "Commission scenarios", 
      "Closing cost estimates",
      "Tax implications"
    ],
    color: "text-warning"
  },
  {
    title: "Market Pulse",
    badge: "Analytics",
    description: "Real-time market intelligence for your specific neighborhood and block",
    icon: BarChart3,
    capabilities: [
      "Hyperlocal valuations",
      "Days on market trends",
      "Buyer demand signals", 
      "Timing recommendations"
    ],
    color: "text-accent"
  },
  {
    title: "Owner Connector", 
    badge: "Social",
    description: "Connect Past, Present, and Future owners for mentorship and community support",
    icon: Users,
    capabilities: [
      "Past owner matching",
      "Seller-buyer direct connection",
      "Community Q&A forum",
      "Social sharing integration"
    ],
    color: "text-primary"
  }
];

export const AIAgents = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Intelligence Tools Built for Property Owners
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Six Tools to Power{" "}  
            <span className="text-accent">Your Decisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Community-verified intelligence, nationwide inventory access, and smart tools 
            that help you make informed decisions—without the sales pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all group border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${agent.color.replace('text-', '')}/10 flex items-center justify-center`}>
                    <agent.icon className={`h-6 w-6 ${agent.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {agent.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold mb-2">
                  {agent.title}
                </CardTitle>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {agent.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {agent.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className={`w-1.5 h-1.5 ${agent.color.replace('text-', 'bg-')} rounded-full mr-2 mt-2 flex-shrink-0`} />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className={`w-full border-${agent.color.replace('text-', '')} ${agent.color} hover:bg-${agent.color.replace('text-', '')}/10`}
                >
                  Use This Tool →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};