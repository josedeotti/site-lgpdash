import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo leva para implementar o LGPDash?",
      answer: "A implementação média leva de 1 a 3 semanas, dependendo do tamanho da sua empresa e complexidade dos processos. Nosso time de onboarding trabalha lado a lado com você para garantir uma transição suave e rápida."
    },
    {
      question: "Preciso ter conhecimento técnico para usar a plataforma?",
      answer: "Não! O LGPDash foi desenhado para ser intuitivo e acessível. Nossa interface é amigável e inclui tutoriais, documentação completa e suporte técnico sempre que precisar. A maioria dos usuários começa a usar produtivamente no primeiro dia."
    },
    {
      question: "Como funciona o trial gratuito de 30 dias?",
      answer: "Você tem acesso completo a todos os recursos da plataforma por 30 dias, sem necessidade de cartão de crédito. Durante esse período, nossa equipe está disponível para ajudar com configuração, treinamento e responder dúvidas. Não há compromisso e você pode cancelar a qualquer momento."
    },
    {
      question: "Meus dados ficam realmente armazenados no Brasil?",
      answer: "Sim! Toda a infraestrutura do LGPDash está hospedada em data centers no Brasil, garantindo conformidade total com a LGPD. Utilizamos criptografia AES-256, arquitetura multitenancy com isolamento completo e somos certificados SOC 2."
    },
    {
      question: "O LGPDash substitui a necessidade de um DPO?",
      answer: "O LGPDash é uma ferramenta poderosa que automatiza grande parte do trabalho operacional, mas não substitui o papel estratégico de um DPO. Nossa plataforma foi desenhada para empoderar DPOs e equipes de compliance, economizando tempo e reduzindo trabalho manual."
    },
    {
      question: "Posso integrar o LGPDash com outros sistemas?",
      answer: "Sim! O plano Professional e Enterprise incluem integrações com os principais sistemas de gestão, CRM, ERP e ferramentas de segurança. Nossa API REST permite criar integrações customizadas de acordo com suas necessidades específicas."
    },
    {
      question: "Qual é o ROI esperado do LGPDash?",
      answer: "Nossos clientes reportam ROI médio de 300% no primeiro ano, considerando economia com consultorias (R$ 50k+/ano), redução de 40h/mês em processos manuais, e 75% menos tempo em preparação para auditorias. O payback médio é de 3-4 meses."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa saber sobre o LGPDash
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <p className="text-gray-700 mb-4">
              Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@lgpdash.pro" 
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                contato@compliancebrazil.com.br
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a 
                href="https://wa.me/5561983155088?text=Ol%C3%A1%21%20Quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20LGPDash." 
                className="text-blue-600 hover:text-blue-700 hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                (61) 98315-5088
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
