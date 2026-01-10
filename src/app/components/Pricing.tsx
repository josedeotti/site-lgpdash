import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Para PMEs iniciando na jornada LGPD",
      price: "497",
      period: "mês",
      features: [
        "Até 50 colaboradores",
        "Dashboard executivo",
        "Diagnóstico LGPD",
        "Relatórios básicos",
        "Gestão de consentimentos",
        "Suporte por e-mail"
      ],
      cta: "Começar teste gratuito",
      popular: false
    },
    {
      name: "Professional",
      description: "Para empresas em crescimento",
      price: "997",
      period: "mês",
      features: [
        "Até 500 colaboradores",
        "Todos os 14 módulos",
        "Relatórios automatizados ilimitados",
        "Mapeamento de dados completo",
        "Gestão de incidentes",
        "Integração com sistemas",
        "Suporte prioritário",
        "Treinamento da equipe"
      ],
      cta: "Começar demo gratuita",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Para grandes corporações",
      price: "Personalizado",
      period: "",
      features: [
        "Colaboradores ilimitados",
        "Todos os recursos Professional",
        "Infraestrutura dedicada",
        "SLA personalizado",
        "Gerente de sucesso dedicado",
        "Customizações e integrações",
        "Consultoria estratégica",
        "Auditoria e certificações"
      ],
      cta: "Falar com especialista",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Planos que cabem no seu orçamento
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Todos os planos incluem trial gratuito de 30 dias — sem cartão de crédito
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
            <Sparkles className="h-5 w-5 text-orange-600" />
            <span className="text-orange-700">Economize 20% pagando anualmente</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-2xl scale-105 border-4 border-blue-400' 
                  : 'bg-gray-50 text-gray-900 shadow-sm border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                {plan.price === "Personalizado" ? (
                  <div className="text-3xl">{plan.price}</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm">R$</span>
                    <span className="text-5xl">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-blue-200' : 'text-green-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Todas as empresas economizam em média <span className="text-green-600">R$ 50.000/ano</span> em custos de consultoria
          </p>
          <p className="text-sm text-gray-500">
            Cancele a qualquer momento • Dados seguros no Brasil • Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
