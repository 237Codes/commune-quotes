import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuotes, Quote } from "@/services/quotesService";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SearchBar from "@/components/SearchBar";
import QuoteCard from "@/components/QuoteCard";
import ContributionGuide from "@/components/ContributionGuide";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch quotes using React Query
  const { data: quotes, isLoading, error } = useQuery({
    queryKey: ['quotes'],
    queryFn: fetchQuotes,
  });

  // Filter quotes based on search term
  const filteredQuotes = quotes?.filter((quote: Quote) =>
    quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.author.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Calculate unique contributors
  const uniqueContributors = quotes ? new Set(quotes.map((q: Quote) => q.author)).size : 0;

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      {quotes && <StatsBar totalQuotes={quotes.length} totalContributors={uniqueContributors} />}
      
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Loading amazing quotes...</p>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load quotes. Please try again later.
            </AlertDescription>
          </Alert>
        )}
        
        {/* Quotes Grid */}
        {!isLoading && !error && filteredQuotes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredQuotes.map((quote: Quote, index: number) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
        )}
        
        {/* No Results */}
        {!isLoading && !error && filteredQuotes.length === 0 && quotes && quotes.length > 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No quotes found matching "{searchTerm}"</p>
          </div>
        )}
        
        {/* Empty State */}
        {!isLoading && !error && quotes && quotes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No quotes yet. Be the first to contribute!</p>
          </div>
        )}
      </main>
      
      <ContributionGuide />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto max-w-6xl px-6 text-center text-muted-foreground">
          <p>Built with ❤️ for the Git & GitHub Workshop</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
