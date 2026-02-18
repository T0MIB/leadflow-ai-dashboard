import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  CheckSquare,
  Square,
  Linkedin,
  Globe,
  Instagram,
  ChevronDown,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";

const platforms = [
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "google", label: "Google", icon: Search },
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "websites", label: "Websites", icon: Globe },
];

const sampleLeads = [
  { name: "Alexandra Kim", company: "CloudBase AI", title: "Head of Growth", email: "a.kim@cloudbase.io", phone: "+1 (415) 555-0192", source: "LinkedIn", status: "Verified" },
  { name: "David Marsh", company: "Revelo SaaS", title: "CEO & Founder", email: "david@revelo.com", phone: "—", source: "Google", status: "Verified" },
  { name: "Isabelle Laurent", company: "Montech Ventures", title: "Investment Director", email: "—", phone: "+33 6 12 34 56 78", source: "Website", status: "Pending" },
  { name: "Ryan Torres", company: "ShiftOps Inc.", title: "VP Engineering", email: "r.torres@shiftops.com", phone: "+1 (646) 555-0281", source: "LinkedIn", status: "Verified" },
  { name: "Nadia Hassan", company: "Luminary Labs", title: "CMO", email: "nadia@luminary.io", phone: "—", source: "LinkedIn", status: "New" },
  { name: "Kevin Park", company: "Deployly", title: "Product Lead", email: "kevin.park@deployly.com", phone: "+1 (628) 555-0147", source: "Google", status: "Verified" },
  { name: "Sophia Müller", company: "EuroGrowth GmbH", title: "Sales Director", email: "s.muller@eurogrowth.de", phone: "+49 30 12345678", source: "Website", status: "Pending" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Verified: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    New: "bg-brand-light text-brand",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
}

export default function LeadSearch() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["linkedin"]);
  const [emailFinder, setEmailFinder] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);
  const [keyword, setKeyword] = useState("SaaS Founders");
  const [location, setLocation] = useState("United States");

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleSelect = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const selectAll = () => {
    setSelected(selected.length === sampleLeads.length ? [] : sampleLeads.map((_, i) => i));
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1800);
  };

  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Lead Search</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Scrape and extract leads from multiple sources.</p>
        </div>
      </div>

      {/* Search form */}
      <div className="bg-card rounded-xl shadow-card p-6 mb-6">
        <h2 className="text-base font-semibold text-foreground mb-5">Create New Lead Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Keyword / Industry</label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
              placeholder="e.g. SaaS Founders, Marketing Directors…"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
              placeholder="e.g. United States, London, Europe…"
            />
          </div>
        </div>

        {/* Platform selector */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Platform</label>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => {
              const active = selectedPlatforms.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium border transition-all ${
                    active
                      ? "bg-brand-light border-brand text-brand"
                      : "bg-background border-border text-muted-foreground hover:border-brand/40 hover:text-foreground"
                  }`}
                >
                  <p.icon className="w-3.5 h-3.5" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Email finder + advanced filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <button
              onClick={() => setEmailFinder(!emailFinder)}
              className={`relative w-9 h-5 rounded-full transition-colors duration-200 ${emailFinder ? "bg-brand" : "bg-muted"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${emailFinder ? "translate-x-4" : "translate-x-0"}`}
              />
            </button>
            <span className="text-sm font-medium text-foreground">Email Finder</span>
          </label>
          <button className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Advanced Filters
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 disabled:opacity-70 transition"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Scraping…
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Start Scraping
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="bg-card rounded-xl shadow-card p-5 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-base font-semibold text-foreground">Results</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{sampleLeads.length} leads found · {selected.length} selected</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input
                  className="pl-8 pr-3 py-2 rounded-lg border border-border text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition w-48"
                  placeholder="Filter leads…"
                />
              </div>
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-brand/40 transition">
                <Download className="w-3.5 h-3.5" />
                Export CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-2.5 pr-3 w-8">
                    <button onClick={selectAll} className="text-muted-foreground hover:text-brand transition-colors">
                      {selected.length === sampleLeads.length ? (
                        <CheckSquare className="w-4 h-4" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  {["Name", "Company", "Title", "Email", "Phone", "Source", "Status"].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleLeads.map((lead, i) => (
                  <tr
                    key={lead.name}
                    className={`hover:bg-muted/30 transition-colors ${selected.includes(i) ? "bg-brand-light/30" : ""}`}
                  >
                    <td className="py-3 pr-3">
                      <button onClick={() => toggleSelect(i)} className="text-muted-foreground hover:text-brand transition-colors">
                        {selected.includes(i) ? (
                          <CheckSquare className="w-4 h-4 text-brand" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                    <td className="py-3 pr-4 text-sm font-medium text-foreground whitespace-nowrap">{lead.name}</td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground whitespace-nowrap">{lead.company}</td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground whitespace-nowrap">{lead.title}</td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground whitespace-nowrap">
                      {lead.email !== "—" ? (
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-brand" />{lead.email}</span>
                      ) : "—"}
                    </td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground whitespace-nowrap">
                      {lead.phone !== "—" ? (
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-brand" />{lead.phone}</span>
                      ) : "—"}
                    </td>
                    <td className="py-3 pr-4 text-xs text-muted-foreground">{lead.source}</td>
                    <td className="py-3"><StatusBadge status={lead.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
