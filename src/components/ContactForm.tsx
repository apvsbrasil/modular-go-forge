
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Input
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          className="bg-transparent border-gray-500 placeholder:text-gray-400"
          required
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Seu melhor email"
          value={formData.email}
          onChange={handleChange}
          className="bg-transparent border-gray-500 placeholder:text-gray-400"
          required
        />
      </div>
      <div>
        <Input
          name="phone"
          placeholder="Telefone / WhatsApp"
          value={formData.phone}
          onChange={handleChange}
          className="bg-transparent border-gray-500 placeholder:text-gray-400"
          required
        />
      </div>
      <div>
        <Input
          name="company"
          placeholder="Empresa"
          value={formData.company}
          onChange={handleChange}
          className="bg-transparent border-gray-500 placeholder:text-gray-400"
          required
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Como podemos ajudar você?"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="bg-transparent border-gray-500 placeholder:text-gray-400"
        />
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-[#c5a46d] hover:bg-[#b08d54] text-[#1c2c3c] font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
      
      <p className="text-sm text-center text-gray-400">
        Seus dados estão seguros conosco. Não compartilhamos com terceiros.
      </p>
    </form>
  );
};

export default ContactForm;
