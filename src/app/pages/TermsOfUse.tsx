import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function TermsOfUse() {
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
                TERMOS DE USO – LGPDash
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
                Estes Termos de Uso regulam o acesso e a utilização da plataforma
                LGPDash, desenvolvida e operada pela Compliance Brazil Assessoria
                Empresarial Ltda, pessoa jurídica de direito privado, inscrita no
                CNPJ sob nº 35.251.783/0001-60, doravante denominada “Compliance
                Brazil”.
              </p>
              <p>
                Ao acessar ou utilizar o LGPDash, o usuário declara que leu,
                compreendeu e concorda integralmente com estes Termos.
              </p>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">1. Definições</h2>
                <p>Para fins destes Termos:</p>
                <p>LGPDash: plataforma SaaS de gestão de conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
                <p>Usuário: pessoa física autorizada pelo Cliente a acessar a plataforma.</p>
                <p>Cliente: pessoa jurídica contratante do LGPDash.</p>
                <p>Controlador e Operador: conforme definidos pela Lei nº 13.709/2018 (LGPD).</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">2. Objeto</h2>
                <p>
                  O presente Termo tem por objeto estabelecer as condições para o
                  uso do LGPDash, plataforma destinada a apoiar empresas na gestão
                  de conformidade com a LGPD, incluindo diagnósticos, planos de
                  ação, gestão de riscos, incidentes, relatórios e evidências.
                </p>
                <p>
                  📌 O LGPDash é uma ferramenta de apoio à gestão e não substitui
                  assessoria jurídica, consultoria especializada ou a atuação de
                  um Encarregado de Proteção de Dados (DPO), quando exigido.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">3. Elegibilidade e cadastro</h2>
                <p>3.1. O uso do LGPDash é destinado exclusivamente a pessoas jurídicas, por meio de usuários previamente autorizados.</p>
                <p>3.2. O Cliente é responsável por:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Garantir que as informações cadastrais sejam verdadeiras e atualizadas</li>
                  <li>Gerenciar permissões de acesso</li>
                  <li>Manter a confidencialidade das credenciais</li>
                </ul>
                <p>
                  3.3. O uso indevido de credenciais ou acessos não autorizados
                  deverá ser comunicado imediatamente à Compliance Brazil.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">4. Licença de uso</h2>
                <p>
                  4.1. A Compliance Brazil concede ao Cliente uma licença
                  limitada, não exclusiva, intransferível e revogável para
                  utilização do LGPDash, exclusivamente para fins internos e
                  conforme o plano contratado.
                </p>
                <p>4.2. É vedado ao Usuário:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Copiar, modificar, reproduzir ou distribuir a plataforma</li>
                  <li>Realizar engenharia reversa ou tentativa de acesso ao código-fonte</li>
                  <li>Utilizar o LGPDash para fins ilícitos ou não autorizados</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">5. Responsabilidades do Cliente</h2>
                <p>O Cliente declara e concorda que:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Atua como Controlador dos dados pessoais inseridos na plataforma</li>
                  <li>Possui base legal adequada para o tratamento dos dados</li>
                  <li>É responsável pela veracidade, legalidade e atualização das informações inseridas</li>
                  <li>Deve utilizar o LGPDash em conformidade com a legislação vigente</li>
                </ul>
                <p>📌 A Compliance Brazil não se responsabiliza pelo conteúdo inserido pelo Cliente.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">6. Responsabilidades da Compliance Brazil</h2>
                <p>A Compliance Brazil compromete-se a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Manter a plataforma disponível, ressalvadas interrupções técnicas</li>
                  <li>Adotar medidas razoáveis de segurança da informação</li>
                  <li>Tratar os dados pessoais conforme a Política de Privacidade</li>
                  <li>Prestar suporte conforme o plano contratado</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">7. Suporte e níveis de serviço</h2>
                <p>7.1. O suporte será prestado conforme as condições do plano contratado.</p>
                <p>
                  7.2. A Compliance Brazil poderá realizar manutenções programadas,
                  comunicando previamente sempre que possível.
                </p>
                <p>
                  7.3. Não é garantida disponibilidade ininterrupta do sistema,
                  embora sejam adotadas boas práticas para estabilidade e segurança.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">8. Planos, pagamentos e cancelamento</h2>
                <p>8.1. O acesso ao LGPDash está condicionado à contratação de um plano.</p>
                <p>8.2. Valores, periodicidade, funcionalidades e limites variam conforme o plano contratado.</p>
                <p>8.3. O Cliente poderá cancelar a assinatura conforme as condições comerciais vigentes.</p>
                <p>8.4. A inadimplência poderá resultar na suspensão ou bloqueio de acesso à plataforma.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">9. Propriedade intelectual</h2>
                <p>
                  9.1. O LGPDash, incluindo marca, layout, funcionalidades, textos,
                  relatórios, códigos e elementos visuais, é de titularidade
                  exclusiva da Compliance Brazil.
                </p>
                <p>9.2. Nenhum direito de propriedade intelectual é transferido ao Cliente.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">10. Proteção de dados pessoais</h2>
                <p>10.1. O tratamento de dados pessoais no LGPDash observa a legislação vigente e a Política de Privacidade.</p>
                <p>
                  10.2. O Cliente reconhece que a Compliance Brazil atua, em regra,
                  como Operadora dos dados tratados na plataforma.
                </p>
                <p>10.3. As partes comprometem-se a cooperar para o atendimento de solicitações de titulares e autoridades.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">11. Incidentes de segurança</h2>
                <p>11.1. A Compliance Brazil adota procedimentos para prevenção e resposta a incidentes de segurança.</p>
                <p>11.2. Em caso de incidente relevante, o Cliente será comunicado conforme aplicável.</p>
                <p>
                  📌 A obrigação de comunicação à ANPD e aos titulares cabe ao
                  Controlador, salvo disposição legal em contrário.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">12. Limitação de responsabilidade</h2>
                <p>12.1. A Compliance Brazil não garante que o uso do LGPDash resultará em conformidade plena e automática com a LGPD.</p>
                <p>12.2. A Compliance Brazil não será responsável por:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Decisões tomadas com base nas informações do sistema</li>
                  <li>Multas, sanções ou danos decorrentes de uso inadequado</li>
                  <li>Falhas causadas por terceiros ou força maior</li>
                </ul>
                <p>
                  12.3. Eventual responsabilidade estará limitada aos valores
                  pagos pelo Cliente nos últimos 12 (doze) meses, salvo disposição
                  legal em contrário.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">13. Suspensão e rescisão</h2>
                <p>13.1. O uso do LGPDash poderá ser suspenso ou encerrado em caso de:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Violação destes Termos</li>
                  <li>Uso ilícito da plataforma</li>
                  <li>Determinação legal ou judicial</li>
                </ul>
                <p>13.2. O término do contrato não elimina obrigações legais pendentes.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">14. Alterações dos Termos</h2>
                <p>A Compliance Brazil poderá alterar estes Termos a qualquer momento.</p>
                <p>A versão atualizada será disponibilizada na plataforma.</p>
                <p>O uso contínuo do LGPDash após alterações implica concordância com os novos termos.</p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">15. Foro e legislação aplicável</h2>
                <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
                <p>
                  Fica eleito o foro da comarca de [cidade da sede da Compliance Brazil],
                  com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl text-gray-900">16. Contato</h2>
                <p>Para dúvidas ou esclarecimentos:</p>
                <p>Compliance Brazil Assessoria Empresarial Ltda</p>
                <p>CNPJ: 35.251.783/0001-60</p>
                <p>📧 contato@compliancebrazil.com.br</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
