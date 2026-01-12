import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../../assets/lgpdash-img-hero.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-14 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
              <CheckCircle2 className="h-4 w-4" />
              <span>Mais de 100 empresas já conformes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900">
              Conformidade LGPD completa em <span className="text-blue-600">semanas, não meses</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Sem gastar R$ 50 mil em consultoria. Sistema de gestão de riscos e evidências em privacidade, pronto para ANPD, contratos públicos e auditorias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-base md:text-lg px-7 py-6">
                Comece sua demo gratuita de 30 dias
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 py-6 border-gray-300">
                Agendar apresentação
              </Button>
            </div>
            
          </div>
          
          {/* Right Column - Dashboard Image */}
          <div className="relative">
            <div className="relative rounded-xl shadow-2xl overflow-hidden border-4 border-white">
              <ImageWithFallback
                src={heroImage}
                alt="Dashboard LGPDash"
                className="w-full h-auto"
              />
              {/* Floating metrics cards */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 animate-[float_3s_ease-in-out_infinite]">
                <div className="text-xs text-gray-600">Score de Conformidade</div>
                <div className="text-2xl text-green-600">92%</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 animate-[float_3s_ease-in-out_infinite_0.5s]">
                <div className="text-xs text-gray-600">Economia/ano</div>
                <div className="text-2xl text-orange-600">R$ 50k</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Implementação em 1-3 semanas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Dados no Brasil</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
