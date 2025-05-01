
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#1c2c3c] text-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-opacity-20 bg-white border border-white/20 px-3 py-1 rounded-full text-[#c5a46d] font-medium text-sm animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="flex h-2 w-2 rounded-full bg-[#c5a46d]"></span>
              Marketing Digital & Performance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Transforme seu <span className="text-[#c5a46d]">Marketing</span> em Resultados Reais
            </h1>
            
            <p className="text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Estratégias de marketing digital focadas em métricas e crescimento real para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-[#c5a46d] hover:bg-[#b08d54] text-[#1c2c3c] font-semibold">
                Agende uma Reunião
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white/10">
                Nossos Serviços
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1c2c3c] to-[#c5a46d] rounded-lg blur opacity-30"></div>
              <div className="relative bg-[#1c2c3c] border border-gray-700 rounded-lg p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-[#c5a46d]">Resultados Comprovados:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Aumento médio de 180% em tráfego qualificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Redução de até 40% no custo por lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>ROI médio de 300% em campanhas de tráfego pago</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Conversão superior à média do mercado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Estratégias personalizadas para cada segmento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {["Google", "Meta", "LinkedIn", "TikTok"].map((tech) => (
            <div key={tech} className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-400">Parceiro</p>
                <p className="text-lg font-semibold text-gray-200">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
