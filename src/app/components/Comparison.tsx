import { Check, X } from "lucide-react";

export function Comparison() {
  const features = [
    {
      feature: "Custo de implementação",
      consultoria: "R$ 50k - R$ 200k",
      manual: "Tempo da equipe",
      lgpdash: "A partir de R$ 997/mês"
    },
    {
      feature: "Tempo de implementação",
      consultoria: "3-12 meses",
      manual: "6-18 meses",
      lgpdash: "1-3 semanas"
    },
    {
      feature: "Relatórios automatizados",
      consultoria: false,
      manual: false,
      lgpdash: true
    },
    {
      feature: "Dashboard em tempo real",
      consultoria: false,
      manual: false,
      lgpdash: true
    },
    {
      feature: "Mapeamento de dados",
      consultoria: "Manual",
      manual: "Planilhas",
      lgpdash: "Automático"
    },
    {
      feature: "Gestão de incidentes",
      consultoria: false,
      manual: "E-mail/planilhas",
      lgpdash: "Workflow completo"
    },
    {
      feature: "Atualizações e manutenção",
      consultoria: "Custo adicional",
      manual: "Esforço contínuo",
      lgpdash: "Incluído"
    },
    {
      feature: "Suporte técnico",
      consultoria: "Limitado",
      manual: false,
      lgpdash: "24/7"
    }
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            LGPDash vs. Alternativas Tradicionais
          </h2>
          <p className="text-xl text-gray-600">
            Compare e veja por que centenas de empresas escolheram nossa plataforma
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-w-[700px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-6 text-gray-900">Critério</th>
                  <th className="text-center p-6 text-gray-600">Consultoria</th>
                  <th className="text-center p-6 text-gray-600">Processos Manuais</th>
                  <th className="text-center p-6 bg-blue-50 text-blue-900">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">LGPDash</span>
                      <span className="text-xs text-blue-600 mt-1">Recomendado</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-6 text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center">{renderCell(row.consultoria)}</td>
                    <td className="p-6 text-center">{renderCell(row.manual)}</td>
                    <td className="p-6 text-center bg-blue-50/50">{renderCell(row.lgpdash)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-6 py-4">
              <Check className="h-6 w-6 text-green-600" />
              <p className="text-gray-700">
                Economize <span className="text-green-700">até 70% em custos</span> e <span className="text-green-700">90% em tempo</span> com automação inteligente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
