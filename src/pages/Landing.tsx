import { Link } from "react-router-dom";
import { Sparkles, Search, Megaphone, Zap, ArrowRight, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-button-brand">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">LeadFlow AI</span>
          </Link>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Funkcie
            </a>
            <Link to="/dashboard">
              <Button className="gradient-brand text-white border-0 shadow-button-brand hover:opacity-90">
                Otvoriť dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
            Nájdite leady.
            <br />
            <span className="text-brand">Škálujte predaj.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            LeadFlow AI spája vyhľadávanie leadov, kampane a automatizácie na jednom mieste. 
            Menej času na hľadanie, viac času na uzatváranie obchodov.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-brand text-white text-base px-8 py-6 shadow-button-brand hover:opacity-90 h-auto">
                Začať zadarmo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto">
                Ako to funguje
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Bez kreditnej karty · Zrušenie kedykoľvek
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Všetko pre vaše leady na jednom mieste</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Vyhľadávanie, kampane, automatizácie a exporty. Jednoduchý workflow bez prepínania nástrojov.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: "Lead Search",
                desc: "Cielené vyhľadávanie podľa odvetvia, pozície a firmy. Overené kontakty.",
              },
              {
                icon: Megaphone,
                title: "Kampane",
                desc: "Spúšťajte e-mailové a outreach kampane s prehľadom výkonnosti.",
              },
              {
                icon: Zap,
                title: "Automatizácie",
                desc: "Workflow a triggery – od nového leadu po follow-up bez manuálnej práce.",
              },
              {
                icon: BarChart3,
                title: "Reporting",
                desc: "Štatistiky, grafy a exporty pre reporting a CRM.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / Stats */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand">24K+</p>
              <p className="text-sm text-muted-foreground mt-1">Leady vyhľadaných</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">12</p>
              <p className="text-sm text-muted-foreground mt-1">Aktívnych kampaní</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">100%</p>
              <p className="text-sm text-muted-foreground mt-1">GDPR ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center p-10 rounded-2xl gradient-brand-soft border border-border">
          <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mx-auto mb-6">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Pripravení na viac leadov?</h2>
          <p className="mt-3 text-muted-foreground">
            Otvorte dashboard a spustite prvú kampanu za pár minút.
          </p>
          <Link to="/dashboard" className="inline-block mt-8">
            <Button size="lg" className="gradient-brand text-white px-8 shadow-button-brand hover:opacity-90 h-12">
              Otvoriť LeadFlow AI
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md gradient-brand flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-sm text-foreground">LeadFlow AI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <a href="#features" className="hover:text-foreground transition-colors">Funkcie</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
