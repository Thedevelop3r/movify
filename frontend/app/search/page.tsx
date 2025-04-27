"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { moviesList } from '@/dummydata/data'; // Adjust the import based on your file structure
import MovieCard from '@/components/MovieCard'; // Adjust the import based on your file structure


export default function SearchPage() {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    const [searchResults, setSearchResults] = useState<MovieResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (searchTerm) {
            fetchSearchResults(searchTerm);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    const fetchSearchResults = async (query: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Replace this with your actual API call
            // For now, we'll simulate an API response with our movies list
            const filteredMovies = moviesList
                .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
                .map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                    overview: movie.description,
                    genre: movie.genre,
                    director: movie.director,
                    actors: movie.actors,
                    description: movie.description,
                    rating: movie.rating,
                }));

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 500));

            setSearchResults(filteredMovies);
        } catch (err) {
            setError('Failed to fetch search results');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Movie Search</h1>

                {isLoading && (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                {!isLoading && searchTerm && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Results for "{searchTerm}" ({searchResults.length})
                        </h2>

                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {searchResults.map((movie, index) => (
                                    <MovieCard key={index} movie={movie} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">No movies found matching your search.</p>
                        )}
                    </div>
                )}

                {!searchTerm && (
                    <div className="text-center py-12 text-gray-400">
                        <p>Enter a movie title to begin your search</p>
                    </div>
                )}
            </div>
        </div>
    );
}

