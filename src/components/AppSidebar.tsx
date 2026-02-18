import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Search,
  Megaphone,
  Zap,
  Puzzle,
  Download,
  Settings,
  Sparkles,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard, end: true },
  { label: "Lead Search", to: "/lead-search", icon: Search },
  { label: "Campaigns", to: "/campaigns", icon: Megaphone },
  { label: "Automations", to: "/automations", icon: Zap },
  { label: "Integrations", to: "/integrations", icon: Puzzle },
  { label: "Exports", to: "/exports", icon: Download },
];

const bottomItems = [
  { label: "Settings", to: "/settings", icon: Settings },
];

export function AppSidebar({ collapsed, onToggle }: AppSidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-card border-r border-border transition-all duration-300 ease-in-out flex-shrink-0",
        collapsed ? "w-[60px]" : "w-[220px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-3 py-4 border-b border-border min-h-[60px]">
        {!collapsed && (
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm text-foreground tracking-tight truncate">
              LeadFlow AI
            </span>
          </div>
        )}
        {collapsed && (
          <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center mx-auto">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        )}
        {!collapsed && (
          <button
            onClick={onToggle}
            className="w-6 h-6 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150",
              collapsed && "justify-center px-2"
            )}
            activeClassName="bg-brand-light text-brand hover:bg-brand-light hover:text-brand"
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-2 py-3 border-t border-border space-y-0.5">
        {bottomItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150",
              collapsed && "justify-center px-2"
            )}
            activeClassName="bg-brand-light text-brand hover:bg-brand-light hover:text-brand"
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
          </NavLink>
        ))}

        {/* User avatar */}
        {!collapsed && (
          <div className="flex items-center gap-2.5 px-2.5 py-2 mt-1">
            <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold text-brand">JD</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">Pro Plan</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center py-1">
            <div className="w-7 h-7 rounded-full bg-brand-light flex items-center justify-center">
              <span className="text-xs font-semibold text-brand">JD</span>
            </div>
          </div>
        )}

        {/* Expand button when collapsed */}
        {collapsed && (
          <button
            onClick={onToggle}
            className="w-full flex justify-center py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5 rotate-180" />
          </button>
        )}
      </div>
    </aside>
  );
}
