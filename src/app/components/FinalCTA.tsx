import { ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Oferta limitada: Teste de 30 dias + Onboarding gratuito</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6">
            Comece sua jornada de conformidade LGPD hoje
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Junte-se a mais de 100 empresas que já economizaram milhões em custos de adequação e eliminaram riscos legais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6"
            >
              Iniciar teste gratuito de 30 dias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6"
            >
              Falar com especialista
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-3">
                <Shield className="h-8 w-8" />
              </div>
              <div className="text-2xl mb-1">R$ 50k+</div>
              <div className="text-sm text-blue-100">Economia média/ano</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-3">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-2xl mb-1">1-3 semanas</div>
              <div className="text-sm text-blue-100">Implementação completa</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white/10 rounded-lg mb-3">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-2xl mb-1">300% ROI</div>
              <div className="text-sm text-blue-100">Retorno no 1º ano</div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span>✓ Sem cartão de crédito</span>
              <span>✓ Cancele quando quiser</span>
              <span>✓ Suporte em português</span>
              <span>✓ Dados seguros no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
