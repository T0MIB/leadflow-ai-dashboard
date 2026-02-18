import { Puzzle, CheckCircle2, Circle, ArrowRight } from "lucide-react";

const integrations = [
  {
    name: "HubSpot",
    description: "Sync leads directly to your HubSpot CRM",
    category: "CRM",
    connected: true,
    logo: "H",
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Salesforce",
    description: "Push enriched contacts to Salesforce",
    category: "CRM",
    connected: false,
    logo: "SF",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Slack",
    description: "Get real-time lead alerts in Slack channels",
    category: "Communication",
    connected: true,
    logo: "SL",
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Google Sheets",
    description: "Auto-export leads to Google Sheets",
    category: "Productivity",
    connected: true,
    logo: "GS",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Apollo.io",
    description: "Enrich leads with Apollo's database",
    category: "Enrichment",
    connected: false,
    logo: "A",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Lemlist",
    description: "Launch cold email sequences from LeadFlow",
    category: "Outreach",
    connected: false,
    logo: "L",
    color: "bg-brand-light text-brand",
  },
  {
    name: "Zapier",
    description: "Connect to 5000+ apps via Zapier webhooks",
    category: "Automation",
    connected: false,
    logo: "Z",
    color: "bg-orange-50 text-orange-500",
  },
  {
    name: "Notion",
    description: "Send leads to a Notion database",
    category: "Productivity",
    connected: false,
    logo: "N",
    color: "bg-muted text-foreground",
  },
];

export default function Integrations() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Integrations</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Connect LeadFlow AI to your favorite tools.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground bg-card border border-border px-3 py-1.5 rounded-lg">
            {integrations.filter((i) => i.connected).length} connected
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {integrations.map((int) => (
          <div key={int.name} className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${int.color}`}>
                {int.logo}
              </div>
              {int.connected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <Circle className="w-4 h-4 text-muted-foreground/40" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">{int.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{int.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">{int.category}</span>
              <button className={`text-xs font-medium flex items-center gap-1 transition-colors ${int.connected ? "text-muted-foreground hover:text-destructive" : "text-brand hover:underline"}`}>
                {int.connected ? "Disconnect" : "Connect"}
                {!int.connected && <ArrowRight className="w-3 h-3" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
