import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Atuamos na gestão de unidades de saúde e lidamos diariamente com dados sensíveis. O LGPDash nos ajudou a organizar fluxos, riscos e evidências de forma centralizada, facilitando tanto a gestão interna quanto a prestação de contas para auditorias e órgãos de controle.",
      role: "Coordenador de Compliance",
      company: "Organização Social de Saúde"
    },
    {
      quote:
        "A exigência de conformidade em contratos públicos aumentou muito. Com o LGPDash conseguimos estruturar diagnósticos, planos de ação e evidências de forma clara e profissional, reduzindo riscos contratuais e trazendo mais tranquilidade para a diretoria.",
      role: "Gerente Jurídico",
      company: "Empresa prestadora de serviços ao setor público"
    },
    {
      quote:
        "O diferencial do LGPDash não é apenas cumprir a LGPD, mas conseguir provar conformidade de forma organizada. Os relatórios e o histórico de ações facilitam muito a resposta a questionamentos internos, auditorias e eventuais fiscalizações.",
      role: "Gerente Jurídico e Compliance",
      company: "Empresa de médio porte"
    },
    {
      quote:
        "Do ponto de vista técnico, o LGPDash facilitou muito a integração entre processos, sistemas e controles. A plataforma reduz retrabalho, centraliza informações e melhora a comunicação entre TI, Jurídico e Compliance.",
      role: "Gerente de TI",
      company: "Empresa de tecnologia"
    },
    {
      quote:
        "Como diretor, preciso de clareza e previsibilidade. O LGPDash nos trouxe indicadores objetivos, visão de risco e relatórios executivos que apoiam decisões estratégicas. Hoje a LGPD deixou de ser um tema operacional e passou a ser gerenciado no nível certo.",
      role: "Diretor Executivo (CEO/COO)",
      company: "Empresa de serviços"
    }
  ];
  const track = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Empresas de diversos setores já transformaram sua gestão de conformidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 pr-6 animate-testimonials-marquee hover:[animation-play-state:paused]">
              {track.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative w-[320px] sm:w-[360px] shrink-0 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="absolute top-5 right-5 text-blue-100">
                    <Quote className="h-10 w-10" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-sm text-gray-900">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
