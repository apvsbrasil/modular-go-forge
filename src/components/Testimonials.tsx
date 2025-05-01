
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Hever Company revolucionou completamente nossa presença digital. O tráfego para nosso site aumentou em 200% e as conversões cresceram significativamente.",
      author: "Alexandre Silva",
      role: "Diretor Comercial, TechBrasil",
      avatar: "AS"
    },
    {
      quote: "Depois de trabalhar com várias agências, encontrar a Hever Company foi como um sopro de ar fresco. Nossa taxa de conversão aumentou em mais de 40%.",
      author: "Sara Almeida",
      role: "CEO, CloudNativa",
      avatar: "SA"
    },
    {
      quote: "As estratégias de marketing digital implementadas pela Hever Company impulsionaram nossas vendas e fortaleceram nossa marca no mercado.",
      author: "Miguel Costa",
      role: "Gerente de Marketing, DataFlow",
      avatar: "MC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confiado por <span className="gradient-text">Empresas</span> de Todo o Brasil
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de marketing digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="text-lg text-gray-700">"{testimonial.quote}"</div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
