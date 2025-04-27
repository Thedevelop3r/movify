"use client";
import React from 'react';
import { moviesList } from '@/dummydata/data';

export default function MovieDetailPage({ params }: { params: { id: number } }) {
  const movie = moviesList.find(movie => movie.id === Number(params.id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6">Movie Not Found</h1>
          <p className="text-xl text-gray-400">
            No movie found with ID: {params.id}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Backdrop Image Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gray-800 opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-20 h-full flex items-end pb-12">
          <div>
            <h1 className="text-5xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center space-x-4 text-lg">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.rating}/10</span>
              <span>•</span>
              <span>{movie.genre.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Poster and Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl h-full">
              <div className="p-6">
                <div className="aspect-w-2 aspect-h-3 mb-6">
                  <div className="bg-gray-700 rounded-lg w-full h-96 flex items-center justify-center">
                    <span className="text-gray-500">Poster Image</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400">Director</h3>
                    <p className="text-lg">{movie.director}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400">Starring</h3>
                    <p className="text-lg">{movie.actors.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg leading-relaxed mb-8">{movie.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Release Year</span>
                      <span>{movie.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Genre</span>
                      <span>{movie.genre.join(', ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Rating</span>
                      <span>{movie.rating}/10</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cast</h3>
                  <div className="space-y-3">
                    {movie.actors.map((actor, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-gray-400">Actor {index + 1}</span>
                        <span>{actor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}