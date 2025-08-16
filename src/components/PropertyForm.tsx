import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export const PropertyForm = () => {
  const [step, setStep] = useState(1);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold mb-4">
              Get Your Free Cash Offer
            </CardTitle>
            
            {/* Progress steps */}
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  1
                </div>
                <span className={step >= 1 ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                  Property
                </span>
              </div>
              
              <div className="w-16 h-0.5 bg-border" />
              
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  2
                </div>
                <span className={step >= 2 ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                  Details
                </span>
              </div>
              
              <div className="w-16 h-0.5 bg-border" />
              
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  3
                </div>
                <span className={step >= 3 ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                  Contact
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="address" className="text-base font-medium">
                    Street Address
                  </Label>
                  <Input 
                    id="address"
                    placeholder="123 Main St"
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-base font-medium">
                      City
                    </Label>
                    <Input 
                      id="city"
                      placeholder="City"
                      className="mt-2 h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state" className="text-base font-medium">
                      State
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 h-12 text-base">
                        <SelectValue placeholder="CA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="zip" className="text-base font-medium">
                      ZIP
                    </Label>
                    <Input 
                      id="zip"
                      placeholder="90210"
                      className="mt-2 h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="beds" className="text-base font-medium">
                      Beds
                    </Label>
                    <Input 
                      id="beds"
                      placeholder="3"
                      className="mt-2 h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="baths" className="text-base font-medium">
                      Baths
                    </Label>
                    <Input 
                      id="baths"
                      placeholder="2"
                      className="mt-2 h-12 text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8">
              <Button 
                variant="outline" 
                className="px-8 py-3"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
              
              <Button 
                className="px-8 py-3 bg-success hover:bg-success/90 text-success-foreground"
                onClick={() => step < 3 ? setStep(step + 1) : null}
              >
                {step === 3 ? 'Get My Offers' : 'Continue'}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center pt-4">
              By submitting, you agree this is a request you initiated. We may contact you to help review offers and negotiate.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};