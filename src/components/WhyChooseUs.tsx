
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Shield } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Estratégia Personalizada",
      description: "Desenvolvemos estratégias únicas baseadas nos objetivos específicos do seu negócio.",
      icon: Star
    },
    {
      title: "Foco em Resultados",
      description: "Trabalhamos com métricas claras e relatórios transparentes para maximizar seu ROI.",
      icon: TrendingUp
    },
    {
      title: "Expertise Comprovada",
      description: "Equipe com mais de 10 anos de experiência em marketing digital para diversos setores.",
      icon: Users
    },
    {
      title: "Tecnologia Avançada",
      description: "Utilizamos as ferramentas e tecnologias mais avançadas do mercado para impulsionar seus resultados.",
      icon: Shield
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="text-[#c5a46d]">Hever Company</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Combinamos estratégia, tecnologia e criatividade para entregar resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-[#1c2c3c]/40 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-[#c5a46d]/20 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-[#c5a46d]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#c5a46d]">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
