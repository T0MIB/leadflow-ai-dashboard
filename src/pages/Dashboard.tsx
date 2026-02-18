import { StatCard } from "@/components/StatCard";
import { Users, Megaphone, Mail, TrendingUp, Plus, ArrowRight, Clock, CheckCircle2, Circle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Aug", leads: 320, emails: 210 },
  { month: "Sep", leads: 480, emails: 340 },
  { month: "Oct", leads: 620, emails: 430 },
  { month: "Nov", leads: 540, emails: 380 },
  { month: "Dec", leads: 780, emails: 560 },
  { month: "Jan", leads: 920, emails: 710 },
  { month: "Feb", leads: 1240, emails: 890 },
];

const recentLeads = [
  { name: "Sarah Chen", company: "TechNova Inc.", title: "VP of Marketing", status: "Verified", time: "2m ago" },
  { name: "Marcus Reid", company: "Cloudify Solutions", title: "CTO", status: "Pending", time: "14m ago" },
  { name: "Priya Patel", company: "GrowthLab", title: "Head of Sales", status: "Verified", time: "1h ago" },
  { name: "James O'Brien", company: "Nexus Capital", title: "CEO", status: "New", time: "3h ago" },
  { name: "Elena Kovacs", company: "DataPulse", title: "Product Manager", status: "Verified", time: "5h ago" },
];

const activeCampaigns = [
  { name: "SaaS Founders – Q1", leads: 340, progress: 68, status: "Running" },
  { name: "EU E-commerce Directors", leads: 210, progress: 42, status: "Running" },
  { name: "US Marketing VPs", leads: 580, progress: 91, status: "Completed" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Verified: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    New: "bg-brand-light text-brand",
    Running: "bg-brand-light text-brand",
    Completed: "bg-emerald-50 text-emerald-700",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
}

export default function Dashboard() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Welcome back, Jane. Here's what's happening.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 active:opacity-95 transition-opacity">
          <Plus className="w-4 h-4" />
          New Search
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Leads"
          value="24,830"
          change="+18.2%"
          changePositive
          icon={<Users className="w-4 h-4" />}
          sparklineData={[40, 55, 48, 72, 65, 88, 95]}
        />
        <StatCard
          title="Active Campaigns"
          value="12"
          change="+3"
          changePositive
          icon={<Megaphone className="w-4 h-4" />}
          sparklineData={[6, 7, 8, 9, 8, 11, 12]}
        />
        <StatCard
          title="Emails Found"
          value="18,492"
          change="+24.5%"
          changePositive
          icon={<Mail className="w-4 h-4" />}
          sparklineData={[30, 42, 55, 48, 65, 72, 90]}
        />
        <StatCard
          title="Conversion Rate"
          value="7.4%"
          change="-0.8%"
          changePositive={false}
          icon={<TrendingUp className="w-4 h-4" />}
          sparklineData={[82, 78, 85, 80, 75, 72, 74]}
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Chart */}
        <div className="xl:col-span-2 bg-card rounded-xl shadow-card p-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-foreground">Lead Growth</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Last 7 months</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand inline-block" />
                Leads
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-muted inline-block" />
                Emails
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="leadsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(336,83%,47%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(336,83%,47%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="emailsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(336,60%,70%)" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="hsl(336,60%,70%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,93%)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220,9%,60%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(220,9%,60%)" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "white", border: "1px solid hsl(220,13%,91%)", borderRadius: "8px", fontSize: 12, boxShadow: "0 4px 12px hsl(220 13% 88% / 0.4)" }}
                cursor={{ stroke: "hsl(336,83%,47%)", strokeWidth: 1, strokeDasharray: "4 4" }}
              />
              <Area type="monotone" dataKey="leads" stroke="hsl(336,83%,47%)" strokeWidth={2} fill="url(#leadsGrad)" dot={false} activeDot={{ r: 4, fill: "hsl(336,83%,47%)" }} />
              <Area type="monotone" dataKey="emails" stroke="hsl(336,60%,70%)" strokeWidth={2} fill="url(#emailsGrad)" dot={false} activeDot={{ r: 4, fill: "hsl(336,60%,70%)" }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Campaigns */}
        <div className="bg-card rounded-xl shadow-card p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-foreground">Active Campaigns</h2>
            <button className="text-xs font-medium text-brand hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-4">
            {activeCampaigns.map((c) => (
              <div key={c.name} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground truncate max-w-[160px]">{c.name}</span>
                  <StatusBadge status={c.status} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-500"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 text-right">{c.progress}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{c.leads.toLocaleString()} leads</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-card rounded-xl shadow-card p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-foreground">Recent Leads</h2>
          <button className="text-xs font-medium text-brand hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4">Name</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4">Company</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4">Title</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-2.5">Added</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentLeads.map((lead) => (
                <tr key={lead.name} className="hover:bg-muted/40 transition-colors">
                  <td className="py-3 pr-4 text-sm font-medium text-foreground">{lead.name}</td>
                  <td className="py-3 pr-4 text-sm text-muted-foreground">{lead.company}</td>
                  <td className="py-3 pr-4 text-sm text-muted-foreground">{lead.title}</td>
                  <td className="py-3 pr-4"><StatusBadge status={lead.status} /></td>
                  <td className="py-3 text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {lead.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
