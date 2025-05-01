
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              Marketing Digital e Performance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Transforme seu <span className="gradient-text">Negócio</span> com Estratégias Digitais
            </h1>
            
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Aumente suas vendas, conquiste mais clientes e fortaleça sua marca com estratégias de marketing digital personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Agendar Consultoria Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200">
                Conhecer Serviços
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30"></div>
              <div className="code-block animate-float">
                <pre><code>{`📈 Resultados Comprovados:

✓ Aumento médio de 180% em tráfego orgânico
✓ Redução de até 40% no custo por lead
✓ ROI médio de 300% em campanhas de tráfego pago
✓ Taxa de conversão superior à média do mercado
✓ Análise avançada de dados e métricas
✓ Estratégias omnichannel personalizadas`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {["Google", "Facebook", "Instagram", "LinkedIn"].map((tech) => (
            <div key={tech} className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-400">Parceiros</p>
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
