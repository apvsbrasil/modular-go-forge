
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, Zap, RefreshCcw, Layers, Code } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Modular Architecture",
      description: "Organize your Go code into independent, reusable modules that are easy to maintain and test.",
      icon: Package,
    },
    {
      title: "Rapid Development",
      description: "Accelerate development with ready-made components and a standardized project structure.",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description: "Built-in security features and best practices to protect your applications from common vulnerabilities.",
      icon: Shield,
    },
    {
      title: "Hot Reloading",
      description: "Improve your development workflow with automatic code reloading during development.",
      icon: RefreshCcw,
    },
    {
      title: "Dependency Injection",
      description: "Clean and testable code with automatic dependency injection throughout your application.",
      icon: Layers,
    },
    {
      title: "Code Generation",
      description: "Generate boilerplate code with CLI tools to speed up common development tasks.",
      icon: Code,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for <span className="gradient-text">Modern Go Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our modular approach helps teams build robust, maintainable Go applications with less effort and higher quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
