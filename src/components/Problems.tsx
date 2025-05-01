
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ShieldAlert, DollarSign, Users, Clock } from "lucide-react";

export const Problems = () => {
  const problems = [
    {
      title: "Investimento sem Retorno",
      description: "Está gastando em marketing digital sem ver retorno real em vendas?",
      icon: DollarSign
    },
    {
      title: "Tráfego sem Conversão",
      description: "Muitas visitas ao site, mas poucos leads ou vendas efetivas?",
      icon: TrendingUp
    },
    {
      title: "Concorrência à Frente",
      description: "Concorrentes estão dominando as buscas e atraindo seus clientes?",
      icon: ShieldAlert
    },
    {
      title: "Cliente Ideal não Encontrado",
      description: "Dificuldade em alcançar e engajar seu público-alvo ideal?",
      icon: Users
    },
    {
      title: "Tempo Desperdiçado",
      description: "Sem tempo para focar no seu negócio por gerenciar o marketing?",
      icon: Clock
    }
  ];

  return (
    <section id="problems" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problemas que a <span className="gradient-text">Hever Company</span> Resolve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos seus desafios de marketing digital em oportunidades de crescimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-start">
                <div className="h-12 w-12 rounded-lg bg-[#1c2c3c]/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-[#1c2c3c]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1c2c3c]">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
