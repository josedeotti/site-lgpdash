import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "../../assets/lgpdash-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1">
            <img
              src={logo}
              alt="LGPDash"
              className="h-14 w-14"
            />
            <div>
              <span className="text-2xl font-bold text-gray-600">LGP</span>
              <span className="text-2xl font-bold text-emerald-500">Dash</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucao" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solução
            </a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Benefícios
            </a>
            <a href="#planos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Planos
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600" asChild>
              <a href="https://app.lgpdash.pro/login">Login</a>
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Demo Gratuita
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#solucao" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Solução
              </a>
              <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Benefícios
              </a>
              <a href="#planos" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Planos
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://app.lgpdash.pro/login">Login</a>
                </Button>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Trial Gratuito
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
