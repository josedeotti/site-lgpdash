import { Upload, Cog, BarChart3, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Diagnóstico Inicial",
      description: "Complete nosso questionário especializado e receba uma avaliação completa do seu nível de conformidade em minutos"
    },
    {
      number: "02",
      icon: Cog,
      title: "Configuração Automatizada",
      description: "Nossa plataforma mapeia seus processos, sistemas e dados automaticamente, criando um inventário completo"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Plano de Ação Personalizado",
      description: "Receba um roadmap detalhado com prioridades, prazos e responsáveis para cada ação de conformidade"
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Monitoramento Contínuo",
      description: "Dashboard em tempo real com alertas proativos, relatórios automáticos e gestão completa de incidentes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Como funciona o LGPDash
          </h2>
          <p className="text-xl text-gray-600">
            De zero à conformidade completa em 4 passos simples
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={index}
                  className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="flex items-start gap-4 mt-2">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-6 py-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="text-green-700">Implementação média de 1-3 semanas</span> — comece a economizar imediatamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
