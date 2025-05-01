
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-[#1c2c3c] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pronto para transformar sua estratégia digital?
              </h2>
              <p className="text-xl text-gray-300">
                Agende uma reunião gratuita e descubra como podemos impulsionar seus resultados com estratégias de marketing digital personalizadas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" className="bg-[#c5a46d] hover:bg-[#b08d54] text-[#1c2c3c] font-semibold">
                  Agendar Reunião
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
              
              <div className="pt-8 border-t border-gray-700 mt-8">
                <h4 className="text-[#c5a46d] font-semibold mb-4">Por que agendar uma reunião?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Diagnóstico gratuito da sua estratégia atual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Identificação de oportunidades de crescimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Análise dos seus concorrentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c5a46d] mr-2">✓</span>
                    <span>Proposta personalizada para seu negócio</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center text-[#c5a46d]">Fale Conosco</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
