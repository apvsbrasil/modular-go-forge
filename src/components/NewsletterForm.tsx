
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-lg p-4 text-center animate-fade-in">
          Obrigado! Em breve entraremos em contato.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <p className="text-sm text-blue-100 mb-2">
            Receba nosso conteúdo exclusivo sobre marketing digital:
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
              required
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 px-4">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
