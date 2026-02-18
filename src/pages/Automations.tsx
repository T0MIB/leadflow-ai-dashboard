import { useState } from "react";
import { Zap, Plus, Edit2, Trash2 } from "lucide-react";

const initialAutomations = [
  {
    name: "LinkedIn Auto-Scrape",
    trigger: "Every Monday at 9:00 AM",
    action: "Scrape 200 LinkedIn profiles → Add to CRM",
    status: true,
    runs: 48,
  },
  {
    name: "Email Verification",
    trigger: "New lead added",
    action: "Verify email → Tag as Verified or Pending",
    status: true,
    runs: 1240,
  },
  {
    name: "Slack Notification",
    trigger: "Lead status: Verified",
    action: "Send Slack message to #leads channel",
    status: false,
    runs: 320,
  },
  {
    name: "Weekly Export",
    trigger: "Every Friday at 5:00 PM",
    action: "Export all new leads → Google Sheets",
    status: true,
    runs: 12,
  },
  {
    name: "Follow-up Sequence",
    trigger: "Lead unopened after 3 days",
    action: "Send follow-up email via HubSpot",
    status: false,
    runs: 85,
  },
];

export default function Automations() {
  const [automations, setAutomations] = useState(initialAutomations);

  const toggle = (i: number) => {
    setAutomations((prev) =>
      prev.map((a, idx) => (idx === i ? { ...a, status: !a.status } : a))
    );
  };

  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Automations</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Configure triggers and actions to automate your workflow.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Automation
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Automations", value: automations.length },
          { label: "Active", value: automations.filter((a) => a.status).length },
          { label: "Total Runs", value: automations.reduce((acc, a) => acc + a.runs, 0).toLocaleString() },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-xl shadow-card p-4">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Automation cards */}
      <div className="space-y-3">
        {automations.map((auto, i) => (
          <div
            key={auto.name}
            className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-5 flex items-start gap-4"
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${auto.status ? "bg-brand-light text-brand" : "bg-muted text-muted-foreground"}`}>
              <Zap className="w-5 h-5" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-foreground">{auto.name}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{auto.runs.toLocaleString()} runs</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 bg-muted rounded-md px-2.5 py-1">
                  <span className="text-xs text-muted-foreground font-medium">TRIGGER</span>
                  <span className="text-xs text-foreground">{auto.trigger}</span>
                </div>
                <span className="text-muted-foreground text-xs self-center">→</span>
                <div className="flex items-center gap-1.5 bg-brand-light rounded-md px-2.5 py-1">
                  <span className="text-xs text-brand font-medium">ACTION</span>
                  <span className="text-xs text-foreground">{auto.action}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggle(i)}
                className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 flex-shrink-0 ${auto.status ? "bg-brand" : "bg-muted"}`}
                style={{ height: "22px", width: "40px" }}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${auto.status ? "translate-x-[18px]" : "translate-x-0"}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
