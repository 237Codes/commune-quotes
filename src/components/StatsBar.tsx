import { Users, BookOpen, GitPullRequest } from "lucide-react";

interface StatsBarProps {
  totalQuotes: number;
  totalContributors: number;
}

const StatsBar = ({ totalQuotes, totalContributors }: StatsBarProps) => {
  const stats = [
    {
      icon: BookOpen,
      label: "Total Quotes",
      value: totalQuotes,
      color: "text-primary",
    },
    {
      icon: Users,
      label: "Contributors",
      value: totalContributors,
      color: "text-accent",
    },
    {
      icon: GitPullRequest,
      label: "Status",
      value: "Active",
      color: "text-secondary",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-6 -mt-8 mb-12 relative z-20">
      <div className="bg-card rounded-xl shadow-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border border-border">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
              stat.color === 'text-primary' ? 'from-primary/10 to-primary/5' :
              stat.color === 'text-accent' ? 'from-accent/10 to-accent/5' :
              'from-secondary/10 to-secondary/5'
            } flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
