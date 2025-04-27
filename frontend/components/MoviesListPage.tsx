"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { moviesList as allMovies } from '@/dummydata/data';
import MovieCard from '@/components/MovieCard';

export default function MoviesListPage({genre}: {genre: string}) {
    const router = useRouter();
    const [displayedMovies, setDisplayedMovies] = useState<MovieResult[]>(allMovies);
    const [activeFilter, setActiveFilter] = useState<string>(genre || "");
    const [activeSort, setActiveSort] = useState<string>("");

    // Apply both filter and sort whenever either changes
    useEffect(() => {
        let result = [...allMovies];
        
        // Apply filter
        if (activeFilter) {
            result = result.filter(movie => 
                movie.genre.some(g => g.toLowerCase() === activeFilter.toLowerCase())
            );
        }
        
        // Apply sort
        if (activeSort === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        } else if (activeSort === "year") {
            result.sort((a, b) => b.year - a.year);
        }
        
        setDisplayedMovies(result);
    }, [activeFilter, activeSort]);

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveFilter(event.target.value);
    }

    const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveSort(event.target.value);
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movies List</h1>
            <p className="mb-4">Explore our collection of movies.</p>
            
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <label htmlFor="filter" className="mr-2">Filter by:</label>
                    <select 
                        onChange={onFilterChange} 
                        value={activeFilter}
                        id="filter" 
                        className="bg-gray-700 text-white p-2 rounded"
                    >
                        <option value="">All</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        {/* Add more genres as needed */}
                    </select>
                </div>
                <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2">Sort by:</label>
                    <select 
                        onChange={onSortChange} 
                        value={activeSort}
                        id="sort" 
                        className="bg-gray-700 text-white p-2 rounded"
                    >
                        <option value="">Default</option>
                        <option value="rating">Rating</option>
                        <option value="year">Year</option>
                    </select>
                </div>
            </div>

            {displayedMovies.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-400">No movies found matching your criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayedMovies.map((movie) => (
                        <MovieCard key={movie.title} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}