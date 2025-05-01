
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Package } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid z-0 opacity-70"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-600 font-medium text-sm animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Modern Go Development
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Build Scalable <span className="gradient-text">Modular</span> Go Applications
            </h1>
            
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Simplify your Go projects with a structured, maintainable, and scalable architecture.
              Accelerate development and improve code quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200">
                View Documentation
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30"></div>
              <div className="code-block animate-float">
                <pre><code>{`package main

import (
    "github.com/yourdomain/modular/core"
    "github.com/yourdomain/modular/modules/auth"
    "github.com/yourdomain/modular/modules/user"
)

func main() {
    app := core.New()
    
    // Register modules
    app.RegisterModule(auth.New())
    app.RegisterModule(user.New())
    
    // Start the application
    app.Run()
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {["GitHub", "Docker", "Kubernetes", "AWS"].map((tech) => (
            <div key={tech} className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-400">Works with</p>
                <p className="text-lg font-semibold">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
