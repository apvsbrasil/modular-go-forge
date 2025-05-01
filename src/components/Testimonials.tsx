
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Go Modular has completely transformed how we build and maintain our microservices. The modular architecture has made our codebase more maintainable and easier to test.",
      author: "Alex Johnson",
      role: "CTO, TechCorp",
      avatar: "AJ"
    },
    {
      quote: "After struggling with monolithic Go applications, switching to Go Modular was like a breath of fresh air. Our development speed increased by 40%.",
      author: "Sarah Lee",
      role: "Lead Developer, CloudNative",
      avatar: "SL"
    },
    {
      quote: "The dependency injection and modular architecture have significantly improved our code quality. New team members can understand our codebase much faster now.",
      author: "Michael Chen",
      role: "Engineering Manager, DataFlow",
      avatar: "MC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Go Developers</span> Everywhere
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what developers and companies are saying about Go Modular
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
