import { Building2, Hospital, Landmark, Scale } from "lucide-react";

export function Audience() {
  const audiences = [
    {
      icon: Hospital,
      title: "Organizações de Saúde",
      description: "Hospitais, OSs e clínicas."
    },
    {
      icon: Landmark,
      title: "Empresas com contratos públicos",
      description: "Contratos e obrigações regulatórias."
    },
    {
      icon: Building2,
      title: "Pequenas e médias empresas",
      description: "Operações com dados sensíveis."
    },
    {
      icon: Scale,
      title: "Jurídico, Compliance, DPO e TI",
      description: "Times responsáveis por governança de dados."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3 text-gray-900">
            Ideal para
          </h2>
          <p className="text-lg text-gray-600">
            Organizações que precisam reduzir riscos e apresentar evidências com segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-white p-3 shadow-sm mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
