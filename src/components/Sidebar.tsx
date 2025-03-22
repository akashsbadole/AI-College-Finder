import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  LayoutDashboard,
  Building2,
  School,
  GraduationCap,
  Users,
  Settings,
  Shield,
  BarChart,
  BookOpen,
  Brain,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  const userLinks = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "College Search",
      href: "/dashboard/college-search",
      icon: Building2,
    },
    {
      title: "School Search",
      href: "/dashboard/school-search",
      icon: School,
    },
    {
      title: "Entrance Exams",
      href: "/dashboard/entrance-exams",
      icon: GraduationCap,
    },
    {
      title: "Career Analysis",
      href: "/dashboard/career-analysis",
      icon: Brain,
    },
    {
      title: "Study Materials",
      href: "/dashboard/study-materials",
      icon: BookOpen,
    },
    {
      title: "Profile Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const adminLinks = [
    {
      title: "User Management",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Analytics",
      href: "/dashboard/admin/analytics",
      icon: BarChart,
    },
    {
      title: "Content Management",
      href: "/dashboard/admin/content",
      icon: Shield,
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            {userLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  location.pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {isAdmin && (
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Admin
            </h2>
            <div className="space-y-1">
              {adminLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    location.pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar; 