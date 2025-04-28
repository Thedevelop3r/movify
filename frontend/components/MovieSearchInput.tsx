"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { moviesListTitles } from '@/dummydata/data';

interface MoviesSearchInputProps {
    initialValue?: string;
}

export default function MoviesSearchInput({ initialValue = '' }: MoviesSearchInputProps) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>(initialValue);
    const [filteredMovies, setFilteredMovies] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);



    useEffect(() => {
        setSearchTerm(initialValue);
    }, [initialValue]);
    useEffect(() => {
        if (searchTerm.length > 0) {
            const filtered = moviesListTitles.filter(movie =>
                movie.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMovies(filtered.slice(0, 10)); // Show top 10 results
            setShowDropdown(true);
        } else {
            setFilteredMovies([]);
            setShowDropdown(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMovieSelect = (movie: string) => {
        setSearchTerm(movie);
        setShowDropdown(false);
        router.push(`/search?search=${encodeURIComponent(movie)}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchTerm) {
            router.push(`/search?search=${encodeURIComponent(searchTerm)}`);
            setShowDropdown(false);
        }
    };

    return (
        <div className="relative flex items-center justify-center ml-4 mt-4 w-full max-w-md">
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => searchTerm.length > 0 && setShowDropdown(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search for movies..."
                className="text-white border border-gray-300 rounded-lg p-2 w-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showDropdown && filteredMovies.length > 0 && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 z-10 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                    {filteredMovies.map((movie, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-700 cursor-pointer text-white"
                            onClick={() => handleMovieSelect(movie)}
                        >
                            {movie}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}