import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PrivacyPolicy() {
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
                POLÍTICA DE PRIVACIDADE – LGPDash
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
              <p>
                A Compliance Brazil Assessoria Empresarial Ltda, pessoa jurídica de
                direito privado, inscrita no CNPJ sob nº 35.251.783/0001-60, com sede
                no Brasil, doravante denominada “Compliance Brazil”, valoriza a
                privacidade e a proteção dos dados pessoais e se compromete a tratá-los
                em conformidade com a Lei nº 13.709/2018 – Lei Geral de Proteção de
                Dados Pessoais (LGPD).
              </p>
              <p>
                Esta Política de Privacidade descreve como os dados pessoais são
                coletados, utilizados, armazenados e protegidos no âmbito do LGPDash,
                plataforma SaaS de gestão de conformidade com a LGPD.
              </p>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">1. Sobre o LGPDash</h2>
                <p>
                  O LGPDash é uma plataforma digital destinada à gestão de
                  conformidade com a LGPD, incluindo, entre outras funcionalidades:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Diagnóstico de maturidade em privacidade</li>
                  <li>Mapeamento de dados pessoais</li>
                  <li>Gestão de riscos e incidentes</li>
                  <li>Gestão de planos de ação</li>
                  <li>Geração de relatórios e evidências</li>
                  <li>Monitoramento contínuo de conformidade</li>
                </ul>
                <p>
                  O LGPDash é utilizado por empresas clientes, sendo a Compliance
                  Brazil a operadora da plataforma, nos termos da LGPD.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">
                  2. Papéis no tratamento de dados pessoais
                </h2>
                <p>Para fins da LGPD:</p>
                <p>
                  Cliente do LGPDash: atua, em regra, como Controlador dos dados
                  pessoais inseridos na plataforma.
                </p>
                <p>
                  Compliance Brazil: atua como Operadora, tratando os dados pessoais
                  conforme as instruções do Controlador e os limites contratuais
                  estabelecidos.
                </p>
                <p>
                  Em determinadas situações específicas (ex.: dados cadastrais de
                  usuários do sistema), a Compliance Brazil poderá atuar como
                  Controladora, conforme descrito nesta Política.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">3. Dados pessoais coletados</h2>
                <h3 className="text-base text-gray-900">
                  3.1. Dados de cadastro e uso da plataforma
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nome completo</li>
                  <li>E-mail corporativo</li>
                  <li>Cargo ou função</li>
                  <li>Empresa vinculada</li>
                  <li>Dados de login e autenticação</li>
                  <li>Registros de acesso (logs)</li>
                </ul>
                <h3 className="text-base text-gray-900">3.2. Dados inseridos pelos clientes</h3>
                <p>
                  O LGPDash pode armazenar dados pessoais inseridos diretamente
                  pelos clientes, incluindo, mas não se limitando a:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dados de colaboradores</li>
                  <li>Dados de terceiros, fornecedores ou titulares</li>
                  <li>Dados sensíveis, conforme definidos no art. 5º, II, da LGPD, quando aplicável</li>
                </ul>
                <p>
                  📌 A responsabilidade pelo conteúdo inserido é do Cliente, na
                  qualidade de Controlador.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">4. Finalidades do tratamento</h2>
                <p>Os dados pessoais tratados no LGPDash são utilizados para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Permitir o acesso e uso da plataforma</li>
                  <li>Executar funcionalidades contratadas</li>
                  <li>Gerenciar usuários e permissões</li>
                  <li>Gerar relatórios, diagnósticos e evidências</li>
                  <li>Monitorar segurança e prevenir fraudes</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Prestar suporte técnico e atendimento ao cliente</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">5. Bases legais do tratamento</h2>
                <p>
                  O tratamento de dados pessoais é realizado com fundamento nas
                  seguintes bases legais, conforme aplicável:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Execução de contrato ou de procedimentos preliminares (art. 7º, V)</li>
                  <li>Cumprimento de obrigação legal ou regulatória (art. 7º, II)</li>
                  <li>Legítimo interesse do controlador (art. 7º, IX)</li>
                  <li>Consentimento do titular, quando exigido (art. 7º, I)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">6. Compartilhamento de dados</h2>
                <p>A Compliance Brazil não comercializa dados pessoais.</p>
                <p>Os dados poderão ser compartilhados apenas quando necessário com:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provedores de infraestrutura tecnológica (ex.: hospedagem, cloud, backup)</li>
                  <li>Serviços de autenticação, segurança e monitoramento</li>
                  <li>Autoridades públicas, mediante obrigação legal</li>
                </ul>
                <p>
                  Sempre observando contratos, cláusulas de confidencialidade e
                  medidas de segurança adequadas.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">
                  7. Armazenamento e segurança da informação
                </h2>
                <p>Os dados tratados no LGPDash:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>São armazenados em servidores localizados no Brasil, salvo exceções tecnicamente justificadas</li>
                  <li>Utilizam criptografia em trânsito e em repouso, quando aplicável</li>
                  <li>Contam com controles de acesso, autenticação e registro de logs</li>
                  <li>São protegidos por medidas técnicas e administrativas adequadas</li>
                </ul>
                <p>
                  A Compliance Brazil adota boas práticas de segurança da informação,
                  alinhadas a padrões reconhecidos de mercado.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">8. Retenção e eliminação dos dados</h2>
                <p>Os dados pessoais serão mantidos:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pelo período necessário para cumprir as finalidades do tratamento</li>
                  <li>Enquanto perdurar a relação contratual</li>
                  <li>Pelo prazo exigido por obrigações legais ou regulatórias</li>
                </ul>
                <p>
                  Após o término do contrato, os dados poderão ser eliminados ou
                  devolvidos ao Cliente, conforme previsto contratualmente.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">
                  9. Direitos dos titulares de dados
                </h2>
                <p>Nos termos da LGPD, os titulares podem exercer, quando aplicável:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Confirmação da existência de tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos ou desatualizados</li>
                  <li>Anonimização, bloqueio ou eliminação</li>
                  <li>Portabilidade</li>
                  <li>Informação sobre compartilhamentos</li>
                  <li>Revogação do consentimento</li>
                </ul>
                <p>
                  📌 Quando a Compliance Brazil atuar como Operadora, as
                  solicitações serão encaminhadas ao Cliente Controlador.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">10. Incidentes de segurança</h2>
                <p>A Compliance Brazil mantém procedimentos internos para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Detecção de incidentes de segurança</li>
                  <li>Avaliação de riscos</li>
                  <li>Mitigação de impactos</li>
                  <li>Comunicação ao Cliente Controlador</li>
                </ul>
                <p>
                  A comunicação à Autoridade Nacional de Proteção de Dados (ANPD)
                  e aos titulares será realizada conforme a legislação aplicável,
                  quando exigido.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">
                  11. Cookies e tecnologias similares
                </h2>
                <p>O LGPDash poderá utilizar cookies e tecnologias similares para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Autenticação de usuários</li>
                  <li>Funcionamento adequado da plataforma</li>
                  <li>Melhoria da experiência do usuário</li>
                </ul>
                <p>
                  O uso de cookies respeita as boas práticas de transparência e
                  segurança.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">12. Atualizações desta Política</h2>
                <p>
                  Esta Política de Privacidade poderá ser atualizada a qualquer
                  momento para refletir:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Alterações legais</li>
                  <li>Evoluções da plataforma</li>
                  <li>Melhoria das práticas de governança</li>
                </ul>
                <p>
                  A versão atualizada estará sempre disponível no site e na
                  plataforma.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">13. Contato</h2>
                <p>
                  Para dúvidas, solicitações ou assuntos relacionados à
                  privacidade e proteção de dados, entre em contato:
                </p>
                <p>Compliance Brazil Assessoria Empresarial Ltda</p>
                <p>📧 E-mail: contato@compliancebrazil.com.br</p>
                <p>📍 Brasil</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
