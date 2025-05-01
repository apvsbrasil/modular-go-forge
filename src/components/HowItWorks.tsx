
import { CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      description: "Analisamos seu negócio, concorrência e público-alvo para identificar oportunidades de crescimento digital.",
      code: `Análise de mercado
Estudo da concorrência
Identificação de oportunidades`,
    },
    {
      number: "02",
      title: "Planejamento Personalizado",
      description: "Criamos um planejamento estratégico sob medida que atende às necessidades específicas do seu negócio.",
      code: `Definição de objetivos
Seleção de canais
Estratégia de conteúdo`,
    },
    {
      number: "03",
      title: "Implementação Profissional",
      description: "Nossa equipe implementa as estratégias definidas com foco em resultados mensuráveis.",
      code: `Criação de campanhas
Otimização de conteúdo
Implementação técnica`,
    },
    {
      number: "04",
      title: "Análise e Otimização",
      description: "Monitoramos continuamente os resultados e ajustamos as estratégias para maximizar o retorno sobre investimento.",
      code: `Acompanhamento de métricas
Otimização contínua
Relatórios detalhados`,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como a <span className="gradient-text">Hever Company</span> Trabalha
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo estruturado que transforma sua presença digital e impulsiona seus resultados de negócio.
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
                  <span>Metodologia comprovada</span>
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
