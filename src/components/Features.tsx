
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, RefreshCcw, Layers, Code } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Tráfego Pago",
      description: "Campanhas otimizadas para Google Ads, Facebook Ads e outras plataformas para maximizar seu ROI.",
      icon: Zap,
    },
    {
      title: "SEO",
      description: "Otimização para mecanismos de busca que aumenta seu posicionamento orgânico e traz visitantes qualificados.",
      icon: Shield,
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão desenvolvidas para transformar visitantes em leads e clientes.",
      icon: Code,
    },
    {
      title: "Criativos",
      description: "Design e conteúdo estratégico para suas campanhas digitais com foco em conversão.",
      icon: RefreshCcw,
    },
    {
      title: "Funis de Vendas",
      description: "Desenvolvimento de funis de conversão que transformam visitantes em leads e leads em clientes.",
      icon: Layers,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de marketing digital para alavancar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#1c2c3c]/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#1c2c3c]" />
                </div>
                <CardTitle className="text-[#1c2c3c]">{feature.title}</CardTitle>
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
