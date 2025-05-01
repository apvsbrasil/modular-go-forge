
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Hever Company transformou completamente nossa estratégia digital. Conseguimos reduzir o custo por aquisição em mais de 35% e aumentar a taxa de conversão das nossas campanhas.",
      author: "Alexandre Silva",
      role: "CEO, TechBrasil",
      avatar: "AS"
    },
    {
      quote: "Depois de trabalhar com várias agências, encontrar a Hever Company foi um diferencial para o nosso negócio. Nosso tráfego qualificado aumentou em mais de 200% em apenas 6 meses.",
      author: "Carla Mendes",
      role: "Diretora de Marketing, CloudNativa",
      avatar: "CM"
    },
    {
      quote: "As estratégias de SEO implementadas pela Hever Company nos colocaram na primeira página do Google para as principais palavras-chave do nosso setor, o que impulsionou significativamente nossas vendas.",
      author: "Ricardo Almeida",
      role: "Fundador, NetSolutions",
      avatar: "RA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seu marketing digital com a Hever Company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="text-lg text-gray-700">"{testimonial.quote}"</div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-[#1c2c3c] text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-[#1c2c3c]">{testimonial.author}</p>
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
