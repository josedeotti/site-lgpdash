import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

export function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            A inadequação à LGPD é um risco que sua empresa não pode correr
          </h2>
          <p className="text-xl text-gray-600">
            Multas de até R$ 50 milhões, processos judiciais e danos irreparáveis à reputação
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl text-gray-900">Multas Pesadas</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Até 2% do faturamento (máx. R$ 50 milhões) por descumprimento da LGPD
            </p>
            <div className="text-3xl text-red-600 mb-2">R$ 50M</div>
            <p className="text-sm text-gray-500">Multa máxima por infração</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <TrendingDown className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl text-gray-900">Custos Ocultos</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Consultorias tradicionais cobram entre R$ 50-200 mil por projeto
            </p>
            <div className="text-3xl text-orange-600 mb-2">R$ 50k+</div>
            <p className="text-sm text-gray-500">Investimento em consultoria</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl text-gray-900">Tempo Perdido</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Processos manuais consomem centenas de horas da equipe por ano
            </p>
            <div className="text-3xl text-yellow-600 mb-2">40h/mês</div>
            <p className="text-sm text-gray-500">Desperdiçadas em burocracia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
