
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Project Structure",
      description: "Start with our opinionated project structure that separates concerns and promotes clean architecture.",
      code: `go-modular init my-awesome-project`,
    },
    {
      number: "02",
      title: "Add Your Modules",
      description: "Generate new modules for different parts of your application using the CLI.",
      code: `go-modular module add user
go-modular module add auth`,
    },
    {
      number: "03",
      title: "Connect Your Dependencies",
      description: "Define module dependencies and let the framework handle the wiring for you.",
      code: `// user/module.go
func (m *Module) Requires() []interface{} {
    return []interface{}{
        &auth.Module{},
        &database.Module{},
    }
}`,
    },
    {
      number: "04",
      title: "Run Your Application",
      description: "Start your application with hot reloading for a smooth development experience.",
      code: `go-modular run`,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">Go Modular</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined development process that makes building Go applications faster and more enjoyable.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-600">{step.description}</p>
                <div className="flex gap-3 items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Simple and intuitive</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="code-block text-sm">
                  <pre><code>{step.code}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
