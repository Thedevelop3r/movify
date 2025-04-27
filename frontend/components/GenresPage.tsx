"use client";
import React from 'react';
import { moviesList } from '@/dummydata/data';
import Link from 'next/link';

export default function GenresPage() {
    // Get all unique genres
    const allGenres = Array.from(
        new Set(moviesList.flatMap(movie => movie.genre))
    ).sort();

    // Count movies per genre
    const genreCounts = moviesList.reduce((acc, movie) => {
        movie.genre.forEach(genre => {
            acc[genre] = (acc[genre] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-6">Movie Genres</h1>
                <p className="text-xl text-gray-400 mb-8">Explore our collection by genre</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {allGenres.map(genre => (
                        <Link 
                            href={`/movies/${encodeURIComponent(genre)}`} 
                            key={genre}
                            className="group"
                        >
                            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                                <div className="p-6 flex-grow">
                                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {genre}
                                    </h2>
                                    <p className="text-gray-400">
                                        {genreCounts[genre]} {genreCounts[genre] === 1 ? 'movie' : 'movies'}
                                    </p>
                                </div>
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 w-full"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}