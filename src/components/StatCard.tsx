import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changePositive: boolean;
  icon: React.ReactNode;
  sparklineData: number[];
}

function MiniSparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 28;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  });
  const pathD = `M${points.join(" L")}`;
  const fillPoints = `M0,${height} L${points.join(" L")} L${width},${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(336 83% 47%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(336 83% 47%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPoints} fill="url(#sparkGrad)" />
      <path d={pathD} stroke="hsl(336 83% 47%)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StatCard({ title, value, change, changePositive, icon, sparklineData }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-200 p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1 tracking-tight">{value}</p>
        </div>
        <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center text-brand flex-shrink-0">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className={cn("text-xs font-medium", changePositive ? "text-emerald-600" : "text-red-500")}>
          {change} <span className="text-muted-foreground font-normal">vs last month</span>
        </span>
        <MiniSparkline data={sparklineData} />
      </div>
    </div>
  );
}
