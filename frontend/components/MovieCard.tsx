import React from 'react';
import Link from 'next/link';

export default function MovieCard({ movie }: { movie: MovieResult }) {
    return (
        <Link href={`/movies/details?id=${movie.id}`} className="no-underline">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                    {/* actors */}
                    {movie.actors && movie.actors.length > 0 && (
                        <p className="text-gray-400 text-sm mb-2">Actors: {movie.actors.join(', ')}</p>
                    )}
                    {/* director */}
                    {movie.director && (
                        <p className="text-gray-400 text-sm mb-2">Director: {movie.director}</p>
                    )}
                    {/* genre */}
                    {movie.genre && movie.genre.length > 0 && (
                        <p className="text-gray-400 text-sm mb-2">Genre: {movie.genre.join(', ')}</p>
                    )}
                    {/* rating */}
                    {movie.rating && (
                        <p className="text-gray-400 text-sm mb-2">Rating: {movie.rating}</p>
                    )}
                    {/* year */}
                    {movie.year && (
                        <p className="text-gray-400 text-sm mb-2">Year: {movie.year}</p>
                    )}
                    {movie.overview && (
                        <p className="text-gray-300 text-sm line-clamp-3">{movie.overview}</p>
                    )}
                </div>
            </div>
        </Link>
    );
};
