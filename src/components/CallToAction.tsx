
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para transformar sua estratégia digital?
          </h2>
          <p className="text-xl text-blue-50">
            Agende uma consultoria gratuita e descubra como podemos impulsionar seus resultados com estratégias de marketing digital personalizadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-blue-700 hover:bg-blue-50">
              Agendar Consultoria Gratuita
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <ArrowRight className="mr-2 h-5 w-5" />
              Conhecer Nossos Serviços
            </Button>
          </div>
          
          <div className="pt-8 border-t border-blue-400/30 mt-8">
            <NewsletterForm />
          </div>
          
          <p className="text-sm text-blue-100">
            Seu negócio merece uma estratégia digital de sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
