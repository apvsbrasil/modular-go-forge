
import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Hever Company</h3>
            <p className="text-gray-400">
              Agência especializada em marketing digital e performance para impulsionar seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Materiais Gratuitos</a></li>
              <li><a href="#" className="hover:text-white">Estudos de Caso</a></li>
              <li><a href="#" className="hover:text-white">Vídeos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Carreiras</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:text-white">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-white">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-white">SEO</a></li>
              <li><a href="#" className="hover:text-white">Redes Sociais</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Hever Company. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
