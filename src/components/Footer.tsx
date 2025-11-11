import { Button } from "@/components/ui/button";
import { Home, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">ComingSoonMLS.com</span>
            </div>
            <p className="text-background/80 text-lg leading-relaxed mb-6 max-w-md">
              All the inventory. None of the egos. Nationwide MLS access with hyperlocal intelligence. 
              Property owners helping property owners connect and make informed decisions.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Join the Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-background/80 hover:text-primary transition-colors">
                  AI Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/80 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#agents" className="text-background/80 hover:text-primary transition-colors">
                  AI Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>hello@comingsoonmls.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>1-800-REALTY-AI</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 ComingSoonMLS.com | Powered by AORPO. Community-driven. Intelligence-first.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};