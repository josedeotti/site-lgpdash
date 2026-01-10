import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../../assets/lgpdash-logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-1 mb-4">
              <img
                src={logo}
                alt="LGPDash"
                className="h-12 w-12"
              />
              <div>
                <span className="text-xl text-white-900">LGP</span>
                <span className="text-xl text-emerald-500">Dash</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 mb-4">
              Plataforma completa de gestão de conformidade com a LGPD para empresas modernas.
            </p>
            <p className="text-xs text-gray-500">
              Compliance Brazil Assessoria Empresarial Ltda
              <br />
              CNPJ: 35.251.783/0001-60
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/company/compliancebrazil/"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/compliancebrazilconsultoria"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
                rel="noreferrer"
                target="_blank"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/compliancebrazilconsultoria"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@ComplianceBrazil"
                className="p-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="YouTube"
                rel="noreferrer"
                target="_blank"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Produto */}
          <div>
            <h4 className="text-white mb-4">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#solucao" className="hover:text-blue-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Benefícios</a></li>
              <li><a href="#planos" className="hover:text-blue-400 transition-colors">Planos e Preços</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Recursos */}
          <div>
            <h4 className="text-white mb-4">Recursos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Guias LGPD</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@lgpdash.pro" className="hover:text-blue-400 transition-colors">
                  contato@compliancebrazil.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5561983155088?text=Ol%C3%A1%21%20Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20LGPDash."
                  className="hover:text-blue-400 transition-colors"
                  rel="noreferrer"
                  target="_blank"
                >
                  (61) 98315-5088
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  STN, Asa Norte<br />
                  Brasília, DF - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Compliance Brazil. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/termos" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
              <a href="/privacidade" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
              <a
                href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
                className="hover:text-blue-400 transition-colors"
                rel="noreferrer"
                target="_blank"
              >
                LGPD
              </a>
              <a href="/cookies" className="hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              LGPDash é uma plataforma SaaS de gestão de conformidade com a Lei Geral de Proteção de Dados (LGPD). 
              Dados armazenados no Brasil com certificação SOC 2 Type 2. 
              Esta plataforma não oferece consultoria jurídica e não substitui a orientação de profissionais especializados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
