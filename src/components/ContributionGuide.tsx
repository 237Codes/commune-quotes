import { Terminal, GitBranch, FileEdit, FolderGit2, GitCommit, Upload, GitPullRequest, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContributionGuide = () => {
  const steps = [
    {
      icon: Terminal,
      title: "Clone Repository",
      description: "Clone the repo to your local IDE",
      command: "git clone <repository-url>",
    },
    {
      icon: GitBranch,
      title: "Create Branch",
      description: "Create a new branch for your contribution",
      command: "git branch add-quote-yourname",
    },
    {
      icon: FolderGit2,
      title: "Switch to Branch",
      description: "Switch to your new branch",
      command: "git checkout add-quote-yourname",
    },
    {
      icon: FileEdit,
      title: "Add Quote Entry",
      description: "Edit quotes.json and add your quote",
      command: 'Add your entry to public/quotes.json',
    },
    {
      icon: Code,
      title: "Stage Changes",
      description: "Stage your changes for commit",
      command: "git add public/quotes.json",
    },
    {
      icon: GitCommit,
      title: "Commit Changes",
      description: "Commit your changes with a message",
      command: 'git commit -m "Add my quote"',
    },
    {
      icon: Upload,
      title: "Push Changes",
      description: "Push your branch to GitHub",
      command: "git push origin add-quote-yourname",
    },
    {
      icon: GitPullRequest,
      title: "Open Pull Request",
      description: "Create a PR on GitHub to merge your quote",
      command: "Open PR via GitHub web interface",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-3">Contribute Your Own Quote</h2>
        <p className="text-muted-foreground text-lg">
          Fork, edit, and submit your own quote to the board
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="relative p-6 hover:shadow-card-hover transition-shadow duration-300">
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
              {index + 1}
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
              <step.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
            <code className="block text-xs bg-muted/50 px-3 py-2 rounded-md text-foreground/80 font-mono break-all">
              {step.command}
            </code>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContributionGuide;
