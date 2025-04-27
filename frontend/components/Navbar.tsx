import React from 'react';
import Link from 'next/link';
import MoviesSearchInput from './MovieSearchInput';

export default function Navbar() {

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Movify</div>
                {/* Centered Movies Search Input */}
                <div className="flex-grow mx-4">
                    <MoviesSearchInput />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-gray-300 hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/movies" className="text-gray-300 hover:text-white">
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link href="/genres" className="text-gray-300 hover:text-white">
                            Genre
                        </Link>
                    </li>
                    <li>
                        <Link href="/actors" className="text-gray-300 hover:text-white">
                            Actors
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}