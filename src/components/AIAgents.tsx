import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Calculator, Users, TrendingUp, Calendar } from "lucide-react";

const agents = [
  {
    title: "Coming Soon Scout",
    badge: "gemini-2.5-pro",
    description: "Finds off-market and pre-listing properties before they hit the public market",
    icon: Search,
    capabilities: [
      "Natural language property search",
      "Match buyer preferences to coming soon inventory", 
      "Schedule private showings",
      "Track interest and notify of competition"
    ],
    color: "text-accent"
  },
  {
    title: "Contract Analyzer", 
    badge: "gpt-4-pro",
    description: "Reviews contracts and legal documents to protect you from hidden fees and bad terms",
    icon: FileText,
    capabilities: [
      "Extract key terms via OCR",
      "Identify red flags and hidden fees",
      "Compare to market standards", 
      "Suggest negotiation points"
    ],
    color: "text-primary"
  },
  {
    title: "Net Proceeds Calculator",
    badge: "gemini-2.5-flash", 
    description: "Calculates exactly how much money you'll walk away with after all fees and taxes",
    icon: Calculator,
    capabilities: [
      "Real-time fee calculation",
      "Commission comparison",
      "Closing cost breakdown",
      "Tax implications estimate"
    ],
    color: "text-success"
  },
  {
    title: "Agent Matchmaker",
    badge: "gemini-2.5-pro",
    description: "Audits and ranks real estate agents to find the best fit for your needs",
    icon: Users,
    capabilities: [
      "Performance analysis",
      "Commission comparison", 
      "Specialization matching",
      "Red flag detection"
    ],
    color: "text-warning"
  },
  {
    title: "Market Intelligence",
    badge: "gpt-4-pro",
    description: "Provides real-time market analysis and timing recommendations",
    icon: TrendingUp,
    capabilities: [
      "Real-time valuations",
      "Trend analysis",
      "Timing recommendations", 
      "Competition tracking"
    ],
    color: "text-accent"
  },
  {
    title: "Showing Coordinator", 
    badge: "gpt-4-flash",
    description: "Schedules showings and coordinates with all parties automatically",
    icon: Calendar,
    capabilities: [
      "Calendar integration",
      "Multi-party coordination",
      "Reminder system",
      "Route optimization"
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
            Meet Your AI Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Six Specialized AI Agents{" "}  
            <span className="text-accent">Working For You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Each agent is trained for specific real estate tasks and can communicate through voice,
            text, or Siri integration.
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
                  Try This Agent →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};