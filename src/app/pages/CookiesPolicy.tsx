import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                Documentação legal
              </p>
              <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">
                Política de Cookies
              </h1>
              <p className="text-sm text-gray-600">
                Última atualização: 09/01/2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-8 text-gray-700">
              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">1. Objetivo</h2>
                <p>
                  Esta Política de Cookies explica como o LGPDash utiliza
                  cookies e tecnologias similares para oferecer uma navegação
                  segura, funcional e aprimorada.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">2. O que são cookies</h2>
                <p>
                  Cookies são pequenos arquivos armazenados no seu dispositivo
                  que permitem reconhecer preferências, melhorar funcionalidades
                  e registrar padrões de uso.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">3. Tipos de cookies</h2>
                <p>
                  Utilizamos cookies necessários para operação, cookies de
                  desempenho para melhoria contínua e, quando aplicável, cookies
                  de análise para compreender a utilização da plataforma.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">4. Finalidades</h2>
                <p>
                  Os cookies ajudam a manter sessões ativas, garantir segurança,
                  lembrar preferências e gerar informações estatísticas de uso.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">5. Gestão de cookies</h2>
                <p>
                  Você pode gerenciar permissões de cookies diretamente no seu
                  navegador. A desativação pode impactar certas funcionalidades
                  da plataforma.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">6. Cookies de terceiros</h2>
                <p>
                  Alguns cookies podem ser definidos por serviços de terceiros
                  usados para análises ou suporte. Esses fornecedores seguem
                  suas próprias políticas de privacidade.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">7. Alterações</h2>
                <p>
                  Esta Política pode ser atualizada periodicamente. A versão
                  vigente estará sempre disponível nesta página.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">8. Contato</h2>
                <p>
                  Para dúvidas sobre cookies, entre em contato pelo e-mail
                  contato@compliancebrazil.com.br.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
