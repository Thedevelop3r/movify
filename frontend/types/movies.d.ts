interface MovieResult {
    id: number;
    title: string;
    year: number;
    overview?: string;
    genre: string[];
    director: string;
    actors: string[];
    description: string;
    rating: number;
    // Add other properties you might get from your API
}