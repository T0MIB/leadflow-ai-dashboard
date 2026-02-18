import { Settings as SettingsIcon, User, Bell, Shield, CreditCard, Key } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 lg:p-8 max-w-[900px] mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Manage your account and preferences.</p>
      </div>

      <div className="space-y-4">
        {/* Profile */}
        <section className="bg-card rounded-xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <User className="w-4 h-4" />
            </div>
            <h2 className="text-base font-semibold text-foreground">Profile</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: "Jane Doe" },
              { label: "Email", value: "jane.doe@company.com" },
              { label: "Company", value: "GrowthStack Inc." },
              { label: "Role", value: "Growth Lead" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">{f.label}</label>
                <input
                  defaultValue={f.value}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                />
              </div>
            ))}
          </div>
          <button className="mt-5 px-4 py-2 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 transition">
            Save Changes
          </button>
        </section>

        {/* Notifications */}
        <section className="bg-card rounded-xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <Bell className="w-4 h-4" />
            </div>
            <h2 className="text-base font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "New leads scraped", desc: "Get notified when a scrape job completes" },
              { label: "Campaign updates", desc: "Receive updates on campaign progress" },
              { label: "Weekly digest", desc: "Summary email every Monday morning" },
              { label: "Export ready", desc: "Alert when your export is ready to download" },
            ].map((n, i) => (
              <div key={n.label} className="flex items-center justify-between py-1">
                <div>
                  <p className="text-sm font-medium text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <button
                  className={`relative flex-shrink-0 rounded-full transition-colors duration-200 ${i !== 2 ? "bg-brand" : "bg-muted"}`}
                  style={{ width: 40, height: 22 }}
                >
                  <span className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] bg-white rounded-full shadow transition-transform duration-200 ${i !== 2 ? "translate-x-[18px]" : "translate-x-0"}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Plan */}
        <section className="bg-card rounded-xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <CreditCard className="w-4 h-4" />
            </div>
            <h2 className="text-base font-semibold text-foreground">Plan & Billing</h2>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-brand bg-brand-light mb-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Pro Plan</p>
              <p className="text-xs text-muted-foreground">$79 / month · Renews Mar 1, 2025</p>
            </div>
            <span className="text-xs font-medium text-brand bg-white border border-brand/20 px-2.5 py-1 rounded-full">Active</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center mb-4">
            {[
              { label: "Leads / month", used: "24,830", total: "50,000" },
              { label: "Campaigns", used: "12", total: "Unlimited" },
              { label: "Exports", used: "5", total: "50" },
            ].map((quota) => (
              <div key={quota.label} className="bg-muted rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">{quota.label}</p>
                <p className="text-sm font-bold text-foreground">{quota.used}</p>
                <p className="text-xs text-muted-foreground">of {quota.total}</p>
              </div>
            ))}
          </div>
          <button className="text-sm font-medium text-brand hover:underline">Upgrade to Business →</button>
        </section>

        {/* API */}
        <section className="bg-card rounded-xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand">
              <Key className="w-4 h-4" />
            </div>
            <h2 className="text-base font-semibold text-foreground">API Key</h2>
          </div>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value="lf_live_sk_••••••••••••••••••••••••••••••••"
              className="flex-1 px-3.5 py-2.5 rounded-lg border border-border bg-muted text-sm font-mono text-muted-foreground focus:outline-none"
            />
            <button className="px-3.5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-brand/40 transition">
              Reveal
            </button>
            <button className="px-3.5 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-brand/40 transition">
              Regenerate
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
