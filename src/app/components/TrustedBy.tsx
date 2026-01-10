import { ShieldCheck, Lock, MapPin } from "lucide-react";
import complianceLogo from "../../assets/compliance-brazil.png";

export function TrustedBy() {
  return (
    <section className="py-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-gray-50/70 p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl text-gray-900">
                Construído por especialistas em Compliance e Privacidade
              </h3>
              <p className="text-gray-600">
                Linguagem institucional, foco em evidências e segurança para ambientes regulados.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={complianceLogo}
                  alt="Compliance Brazil"
                  className="h-11 w-auto"
                />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Compliance Brazil
                  </p>
                  <p className="text-base text-gray-900">
                    Estrutura técnica para decisões e auditorias.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="rounded-lg bg-emerald-50 p-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-900">Anos de experiência</p>
                  <p className="text-xs text-gray-500">
                    Programas completos de adequação e governança.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900">Atuação em setores regulados</p>
                  <p className="text-xs text-gray-500">
                    Saúde, governo e operações com alto risco.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="rounded-lg bg-slate-100 p-2">
                  <MapPin className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-gray-900">Compliance Brazil</p>
                  <p className="text-xs text-gray-500">
                    Referência nacional em compliance e privacidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
