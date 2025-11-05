import { Quote as QuoteIcon } from "lucide-react";
import { Quote } from "@/services/quotesService";

interface QuoteCardProps {
  quote: Quote;
  index: number;
}

const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in border border-border"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <QuoteIcon className="w-6 h-6 text-primary-foreground" />
      </div>
      
      {/* Quote content */}
      <div className="mt-4">
        <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
          "{quote.quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
            {quote.author.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{quote.author}</p>
            <p className="text-sm text-muted-foreground">Contributor</p>
          </div>
        </div>
      </div>
      
      {/* Hover effect gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
};

export default QuoteCard;
