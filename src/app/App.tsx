import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Audience } from "./components/Audience";
import { TrustedBy } from "./components/TrustedBy";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Comparison } from "./components/Comparison";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { TermsOfUse } from "./pages/TermsOfUse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { CookiesPolicy } from "./pages/CookiesPolicy";

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  if (pathname === "/termos") {
    return <TermsOfUse />;
  }
  if (pathname === "/privacidade") {
    return <PrivacyPolicy />;
  }
  if (pathname === "/cookies") {
    return <CookiesPolicy />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Audience />
        <TrustedBy />
        <Problem />
        <section id="solucao">
          <Solution />
        </section>
        <section id="beneficios">
          <Benefits />
        </section>
        <HowItWorks />
        <Testimonials />
        <Comparison />
        <section id="planos">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
