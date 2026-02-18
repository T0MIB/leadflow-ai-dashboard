import { Megaphone, Plus, Users, ArrowRight, BarChart2, Calendar } from "lucide-react";

const campaigns = [
  {
    name: "SaaS Founders – Q1 2025",
    description: "Targeting early-stage SaaS founders in North America",
    leads: 340,
    emails: 280,
    progress: 68,
    status: "Running",
    created: "Jan 15, 2025",
  },
  {
    name: "EU E-commerce Directors",
    description: "Senior buyers in European e-commerce companies",
    leads: 210,
    emails: 150,
    progress: 42,
    status: "Running",
    created: "Jan 28, 2025",
  },
  {
    name: "US Marketing VPs",
    description: "Marketing leaders at Series A–C companies",
    leads: 580,
    emails: 510,
    progress: 100,
    status: "Completed",
    created: "Dec 10, 2024",
  },
  {
    name: "FinTech Decision Makers",
    description: "C-suite and directors in fintech companies globally",
    leads: 92,
    emails: 60,
    progress: 18,
    status: "Draft",
    created: "Feb 5, 2025",
  },
  {
    name: "HR Tech Buyers – APAC",
    description: "HR and People Ops leaders across Asia-Pacific",
    leads: 0,
    emails: 0,
    progress: 0,
    status: "Paused",
    created: "Feb 12, 2025",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Running: "bg-brand-light text-brand",
    Completed: "bg-emerald-50 text-emerald-700",
    Draft: "bg-muted text-muted-foreground",
    Paused: "bg-amber-50 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
}

export default function Campaigns() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Manage your lead generation campaigns.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Campaign
        </button>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", value: campaigns.length, icon: Megaphone },
          { label: "Running", value: campaigns.filter((c) => c.status === "Running").length, icon: BarChart2 },
          { label: "Completed", value: campaigns.filter((c) => c.status === "Completed").length, icon: Users },
          { label: "Draft / Paused", value: campaigns.filter((c) => ["Draft", "Paused"].includes(c.status)).length, icon: Calendar },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-xl shadow-card p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <s.icon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-xl font-bold text-foreground">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {campaigns.map((c) => (
          <div key={c.name} className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 pr-3">
                <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
              </div>
              <StatusBadge status={c.status} />
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {c.leads} leads</span>
              <span className="flex items-center gap-1">✉ {c.emails} emails</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {c.created}</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span>Progress</span>
                <span>{c.progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand transition-all duration-700"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="text-xs font-medium text-brand hover:underline flex items-center gap-1">
                View leads <ArrowRight className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1.5">
                <button className="px-3 py-1.5 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-brand/40 transition">Edit</button>
                {c.status === "Running" && (
                  <button className="px-3 py-1.5 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-brand/40 transition">Pause</button>
                )}
                {c.status === "Paused" && (
                  <button className="px-3 py-1.5 rounded-md gradient-brand text-white text-xs font-medium shadow-button hover:opacity-90 transition">Resume</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
