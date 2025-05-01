
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
    { label: "Por que nos escolher", href: "#why-choose-us" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-97 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 font-bold text-xl">
              <div className="h-10 w-10 rounded-md bg-[#1c2c3c] flex items-center justify-center text-white">
                H
              </div>
              <span className="hidden sm:inline text-[#1c2c3c]">Hever Company</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#1c2c3c] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2 border-[#1c2c3c] text-[#1c2c3c] hover:bg-[#1c2c3c] hover:text-white">
              <Phone className="h-4 w-4" />
              <span>Contato</span>
            </Button>
            <Button size="sm" className="bg-[#c5a46d] hover:bg-[#b08d54] text-white">
              Agendar Reunião
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
                  className="text-gray-700 hover:text-[#1c2c3c] font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <Button variant="outline" className="justify-center gap-2 border-[#1c2c3c] text-[#1c2c3c]">
                  <Phone className="h-4 w-4" />
                  <span>Contato</span>
                </Button>
                <Button className="bg-[#c5a46d] hover:bg-[#b08d54] text-white justify-center">
                  Agendar Reunião
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
