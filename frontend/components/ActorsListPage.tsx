"use client";
import React from 'react';
import { moviesList } from '@/dummydata/data';
import Link from 'next/link';

export default function ActorsListPage() {
  // Get all unique actors with their movies and stats
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
  }, {} as Record<string, { movieCount: number; totalRating: number; movies: MovieResult[] }>);

  const actors = Object.entries(actorStats)
    .map(([name, stats]) => ({
      name,
      movieCount: stats.movieCount,
      avgRating: (stats.totalRating / stats.movieCount).toFixed(1),
      movies: stats.movies
    }))
    .sort((a, b) => b.movieCount - a.movieCount); // Sort by most prolific first

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Actors</h1>
            <p className="text-xl text-gray-400 mt-2">
              {actors.length} actors in our collection
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {actors.map(actor => (
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
                          href={`/movies/${movie.id}`}
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
      </div>
    </div>
  );
}