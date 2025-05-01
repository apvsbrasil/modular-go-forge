
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, Zap, RefreshCcw, Layers, Code } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Marketing Digital",
      description: "Estratégias completas de marketing digital para aumentar sua visibilidade online e gerar mais vendas.",
      icon: Package,
    },
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
      title: "Gestão de Redes Sociais",
      description: "Criação de conteúdo relevante e gestão completa das suas redes sociais para engajar seu público-alvo.",
      icon: RefreshCcw,
    },
    {
      title: "Funis de Vendas",
      description: "Desenvolvimento de funis de conversão que transformam visitantes em leads e leads em clientes.",
      icon: Layers,
    },
    {
      title: "Análise de Dados",
      description: "Monitoramento e análise de métricas para ajustar estratégias e maximizar resultados.",
      icon: Code,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo o que Você Precisa para <span className="gradient-text">Marketing Digital de Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa abordagem ajuda empresas a construírem uma presença digital robusta, gerando mais leads e aumentando suas vendas.
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
