"use client";
import React from 'react';
import { moviesList } from '@/dummydata/data';
import Link from 'next/link';
import { FaStar, FaPlay, FaTicketAlt } from 'react-icons/fa';

export default function HomePage() {
  // Get featured movies (top rated)
  const featuredMovies = [...moviesList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // Get currently screening movies (recent releases)
  const currentlyScreening = [...moviesList]
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')] bg-cover bg-center opacity-50"></div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Your Next <span className="text-blue-400">Movie Adventure</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Explore thousands of movies, find recommendations, and never miss what's in theaters.
            </p>
            <div className="flex gap-4">
              <Link href="/movies" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
                <FaPlay /> Browse Movies
              </Link>
              <Link href="/genres" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                Explore Genres
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Movies Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-blue-400">Featured</span> Movies
            </h2>
            <Link href="/movies?sort=rating" className="text-gray-400 hover:text-white transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map(movie => (
              <div key={movie.id} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[2/3] bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Link
                      href={`/movies/details/${movie.id}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-center font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{movie.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{movie.year}</span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Screening Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-blue-400">Now</span> In Theaters
            </h2>
            <Link href="/movies?sort=year" className="text-gray-400 hover:text-white transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentlyScreening.map(movie => (
              <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-4xl text-gray-500" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Now Showing
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl">{movie.title}</h3>
                    <div className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded">
                      <FaStar className="text-yellow-400" />
                      <span>{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genre.slice(0, 3).map(genre => (
                      <span key={genre} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{genre}</span>
                    ))}
                  </div>
                  <p className="text-gray-400 line-clamp-2 mb-4">{movie.description}</p>
                  <div className="flex gap-3">
                    <Link
                      href={`/movies/details/${movie.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-center font-medium transition-colors"
                    >
                      Details
                    </Link>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded font-medium transition-colors flex items-center justify-center gap-2">
                      <FaTicketAlt /> Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/80 to-purple-900/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of movie lovers discovering their next favorite film every day.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/movies" className="bg-white hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Browse All Movies
            </Link>
            <Link href="/genres" className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Explore Genres
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}