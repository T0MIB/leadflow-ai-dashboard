import { Download, FileText, FileSpreadsheet, Clock, CheckCircle2 } from "lucide-react";

const exports = [
  {
    name: "SaaS Founders – Q1 2025",
    records: 340,
    format: "CSV",
    size: "124 KB",
    status: "Ready",
    date: "Feb 17, 2025",
  },
  {
    name: "EU E-commerce Directors",
    records: 210,
    format: "XLSX",
    size: "89 KB",
    status: "Ready",
    date: "Feb 15, 2025",
  },
  {
    name: "US Marketing VPs",
    records: 580,
    format: "CSV",
    size: "310 KB",
    status: "Ready",
    date: "Feb 10, 2025",
  },
  {
    name: "FinTech Decision Makers",
    records: 92,
    format: "JSON",
    size: "45 KB",
    status: "Processing",
    date: "Feb 18, 2025",
  },
  {
    name: "HR Tech Buyers – APAC",
    records: 180,
    format: "CSV",
    size: "76 KB",
    status: "Ready",
    date: "Jan 28, 2025",
  },
];

const formatIcon = (fmt: string) => {
  if (fmt === "XLSX") return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
  if (fmt === "JSON") return <FileText className="w-4 h-4 text-amber-600" />;
  return <FileText className="w-4 h-4 text-brand" />;
};

export default function Exports() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Exports</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Download and manage your exported lead data.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-brand text-white text-sm font-semibold shadow-button hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" />
          New Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Exports", value: exports.length },
          { label: "Total Records", value: exports.reduce((a, e) => a + e.records, 0).toLocaleString() },
          { label: "Ready", value: exports.filter((e) => e.status === "Ready").length },
        ].map((s) => (
          <div key={s.label} className="bg-card rounded-xl shadow-card p-4">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl shadow-card p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                {["File Name", "Records", "Format", "Size", "Date", "Status", ""].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-muted-foreground pb-2.5 pr-4 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {exports.map((exp) => (
                <tr key={exp.name} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3.5 pr-4">
                    <div className="flex items-center gap-2">
                      {formatIcon(exp.format)}
                      <span className="text-sm font-medium text-foreground">{exp.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4 text-sm text-muted-foreground">{exp.records.toLocaleString()}</td>
                  <td className="py-3.5 pr-4">
                    <span className="text-xs font-medium bg-muted px-2 py-0.5 rounded">{exp.format}</span>
                  </td>
                  <td className="py-3.5 pr-4 text-sm text-muted-foreground">{exp.size}</td>
                  <td className="py-3.5 pr-4 text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {exp.date}
                  </td>
                  <td className="py-3.5 pr-4">
                    {exp.status === "Ready" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
                        Processing
                      </span>
                    )}
                  </td>
                  <td className="py-3.5">
                    {exp.status === "Ready" && (
                      <button className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline">
                        <Download className="w-3.5 h-3.5" /> Download
                      </button>
                    )}
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
