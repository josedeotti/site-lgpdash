import { 
  LayoutDashboard, 
  FileText, 
  Database, 
  AlertCircle, 
  ClipboardCheck, 
  UserCheck 
} from "lucide-react";

export function Solution() {
  const modules = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Executivo",
      description: "Visão 360° do status de conformidade em tempo real com score visual e alertas proativos",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Relatórios Automatizados",
      description: "Geração automática de RIPD, RoPA e relatórios de conformidade em PDF/Excel com templates jurídicos aprovados",
      color: "green"
    },
    {
      icon: Database,
      title: "Mapeamento de Dados",
      description: "Rastreamento completo do ciclo de vida dos dados pessoais, bases legais e tempos de retenção",
      color: "purple"
    },
    {
      icon: AlertCircle,
      title: "Gestão de Incidentes",
      description: "Workflow completo desde detecção até comunicação à ANPD, classificação por severidade e ações corretivas",
      color: "red"
    },
    {
      icon: ClipboardCheck,
      title: "Diagnóstico LGPD",
      description: "Avaliação de maturidade com questionários especializados e geração de plano de ação personalizado",
      color: "orange"
    },
    {
      icon: UserCheck,
      title: "Gestão de Consentimentos",
      description: "Sistema completo de termos, envio por e-mail, assinatura digital e rastreamento de respostas",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", icon: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600", icon: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", icon: "text-purple-600" },
      red: { bg: "bg-red-100", text: "text-red-600", icon: "text-red-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", icon: "text-orange-600" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", icon: "text-teal-600" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Uma plataforma completa para sua <span className="text-blue-600">conformidade LGPD</span>
          </h2>
          <p className="text-xl text-gray-600">
            14 módulos integrados que automatizam todo o processo de adequação e gestão contínua
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl mb-3 text-gray-900">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            + 8 módulos adicionais: Plano de Ação, Gestão de Riscos, Contratos, Inventários e mais
          </p>
        </div>
      </div>
    </section>
  );
}
