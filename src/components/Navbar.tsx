
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Serviços", href: "#features" },
    { label: "Como Trabalhamos", href: "#how-it-works" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 font-bold text-xl">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                H
              </div>
              <span className="hidden sm:inline">Hever Company</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span>Contato</span>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Agendar Consultoria
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <Button variant="outline" className="justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Contato</span>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white justify-center">
                  Agendar Consultoria
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
