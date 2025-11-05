/**
 * Service for fetching quotes from the JSON file
 * Students will contribute by editing public/quotes.json
 */

export interface Quote {
  author: string;
  quote: string;
}

/**
 * Fetches all quotes from the JSON file
 * @returns Promise containing array of quotes
 */
export const fetchQuotes = async (): Promise<Quote[]> => {
  try {
    const response = await fetch('/quotes.json');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch quotes: ${response.statusText}`);
    }
    
    const quotes: Quote[] = await response.json();
    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};
