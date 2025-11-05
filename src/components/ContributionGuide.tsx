import { GitFork, GitBranch, FileEdit, GitPullRequest } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContributionGuide = () => {
  const steps = [
    {
      icon: GitFork,
      title: "Fork Repository",
      description: "Fork the repo to your GitHub account",
    },
    {
      icon: GitBranch,
      title: "Create Branch",
      description: "Create a new branch for your quote",
    },
    {
      icon: FileEdit,
      title: "Edit quotes.json",
      description: "Add your quote to the JSON file",
    },
    {
      icon: GitPullRequest,
      title: "Submit PR",
      description: "Create a pull request to add your quote",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-3">How to Contribute</h2>
        <p className="text-muted-foreground text-lg">
          Follow these simple steps to add your quote to the board
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-card-hover transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold text-muted-foreground">
              {index + 1}
            </div>
            <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContributionGuide;
