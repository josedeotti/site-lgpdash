import { TrendingUp, Clock, Zap, DollarSign, Target, Rocket } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      metric: "75%",
      label: "Menos tempo",
      description: "em preparação para auditorias",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      metric: "40h/mês",
      label: "Economizadas",
      description: "em mapeamento de dados",
      color: "text-green-600"
    },
    {
      icon: Zap,
      metric: "60%",
      label: "Mais rápido",
      description: "na resposta a incidentes",
      color: "text-purple-600"
    },
    {
      icon: DollarSign,
      metric: "R$ 50k/ano",
      label: "De economia",
      description: "vs. consultoria tradicional",
      color: "text-orange-600"
    },
    {
      icon: Target,
      metric: "300%",
      label: "ROI médio",
      description: "no primeiro ano",
      color: "text-red-600"
    },
    {
      icon: Rocket,
      metric: "1-3 semanas",
      label: "Implementação",
      description: "rápida e completa",
      color: "text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Resultados comprovados em centenas de empresas
          </h2>
          <p className="text-xl text-blue-100">
            Economize tempo, reduza custos e elimine riscos com automação inteligente
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Icon className="h-10 w-10 mx-auto mb-4 text-white" />
                <div className="text-3xl md:text-4xl mb-2">{benefit.metric}</div>
                <div className="text-sm text-blue-100 mb-1">{benefit.label}</div>
                <div className="text-xs text-blue-200">{benefit.description}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Target className="h-5 w-5" />
            <span className="text-lg">Mais de 100 empresas economizaram milhares de R$ em adequação LGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
