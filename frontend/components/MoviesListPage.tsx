"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { moviesList as allMovies } from '@/dummydata/data';
import MovieCard from '@/components/MovieCard';
import MoviesSearchInput from '@/components/MovieSearchInput';

const MOVIES_PER_PAGE = 6;

export default function MoviesListPage({ genre, sort }: { genre: string, sort: string }) {
    const [displayedMovies, setDisplayedMovies] = useState<MovieResult[]>(allMovies);
    const [activeFilter, setActiveFilter] = useState<string>(genre || "");
    const [activeSort, setActiveSort] = useState<string>(sort || "");
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(1); // Reset to first page when filters change
    }, [activeFilter, activeSort]);

    // Calculate pagination values
    const totalPages = Math.ceil(displayedMovies.length / MOVIES_PER_PAGE);
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    const paginatedMovies = displayedMovies.slice(startIndex, startIndex + MOVIES_PER_PAGE);

    const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveFilter(event.target.value);
    };

    const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActiveSort(event.target.value);
    };

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Movies</h1>
                <MoviesSearchInput initialValue='' />
            </div>
            <p className="mb-4">Explore our collection of movies.</p>


            {/* Filter and Sort Controls */}

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
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {paginatedMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button
                            onClick={() => goToPage(1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50"
                        >
                            «
                        </button>
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50"
                        >
                            ‹
                        </button>

                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => goToPage(pageNum)}
                                    className={`px-3 py-1 rounded ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50"
                        >
                            ›
                        </button>
                        <button
                            onClick={() => goToPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded bg-gray-800 text-white disabled:opacity-50"
                        >
                            »
                        </button>
                    </div>

                    <div className="text-center text-gray-400 mt-2">
                        Page {currentPage} of {totalPages} • {displayedMovies.length} movies total
                    </div>
                </>
            )}
        </div>
    );
}