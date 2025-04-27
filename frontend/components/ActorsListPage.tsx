"use client";
import React, { useState, useEffect } from 'react';
import { moviesList } from '@/dummydata/data';
import Link from 'next/link';
import { FaSearch, FaStar, FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const ACTORS_PER_PAGE = 8;

export default function ActorsListPage() {
  // Get all unique actors with their movies and stats
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Process actor data
  const { actors, totalActors } = React.useMemo(() => {
    const actorStats = moviesList.reduce((acc, movie) => {
      movie.actors.forEach(actor => {
        if (!acc[actor]) {
          acc[actor] = {
            movieCount: 0,
            totalRating: 0,
            movies: []
          };
        }
        acc[actor].movieCount += 1;
        acc[actor].totalRating += movie.rating;
        acc[actor].movies.push(movie);
      });
      return acc;
    }, {} as Record<string, { movieCount: number; totalRating: number; movies: Movie[] }>);

    let actors = Object.entries(actorStats)
      .map(([name, stats]) => ({
        name,
        movieCount: stats.movieCount,
        avgRating: (stats.totalRating / stats.movieCount).toFixed(1),
        movies: stats.movies
      }));

    // Apply search filter
    if (searchTerm) {
      actors = actors.filter(actor =>
        actor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by most prolific first
    actors.sort((a, b) => b.movieCount - a.movieCount);

    return {
      actors,
      totalActors: actors.length
    };
  }, [searchTerm]);

  // Calculate pagination values
  const totalPages = Math.ceil(totalActors / ACTORS_PER_PAGE);
  const startIndex = (currentPage - 1) * ACTORS_PER_PAGE;
  const paginatedActors = actors.slice(startIndex, startIndex + ACTORS_PER_PAGE);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold">Actors</h1>
            <p className="text-xl text-gray-400 mt-2">
              {totalActors} actors in our collection
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search actors..."
              className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {paginatedActors.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No actors found matching your search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedActors.map(actor => (
                <div
                  key={actor.name}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{actor.name}</h2>

                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-gray-400">
                        {actor.movieCount} {actor.movieCount === 1 ? 'movie' : 'movies'}
                      </span>
                      <span className="text-yellow-400">
                        ⭐ {actor.avgRating} avg rating
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-md font-semibold mb-2 text-gray-300">Recent Movies:</h3>
                      <ul className="space-y-2">
                        {actor.movies.slice(0, 3).map(movie => (
                          <li key={movie.id}>
                            <Link
                              href={`/movies/details/${movie.id}`}
                              className="text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                            >
                              <span>{movie.title}</span>
                              <span className="ml-2 text-xs text-yellow-400">({movie.rating})</span>
                            </Link>
                          </li>
                        ))}
                        {actor.movieCount > 3 && (
                          <li className="text-gray-500 text-sm">
                            +{actor.movieCount - 3} more...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                <div className="text-gray-400">
                  Showing {startIndex + 1}-{Math.min(startIndex + ACTORS_PER_PAGE, totalActors)} of {totalActors} actors
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    aria-label="First page"
                  >
                    <FaAngleDoubleLeft />
                  </button>
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    aria-label="Previous page"
                  >
                    <FaAngleLeft />
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
                        className={`w-10 h-10 rounded ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'} transition-colors`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    aria-label="Next page"
                  >
                    <FaAngleRight />
                  </button>
                  <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700 transition-colors"
                    aria-label="Last page"
                  >
                    <FaAngleDoubleRight />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}