
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Go Development?
          </h2>
          <p className="text-xl text-blue-50">
            Join thousands of developers who are building better Go applications faster with Go Modular.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </Button>
          </div>
          
          <p className="text-sm text-blue-100">
            Open-source and MIT licensed. Free for commercial use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
