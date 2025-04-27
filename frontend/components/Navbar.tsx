"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 shadow-lg w-full">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="text-white text-2xl font-extrabold">
                    Movify
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white">
                    {['Home', 'Movies', 'Genres', 'Actors'].map((label) => (
                        <li key={label}>
                            <Link
                                href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                                className="hover:text-yellow-300 transition-colors"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-indigo-700/95 backdrop-blur-sm">
                    <ul className="flex flex-col items-center space-y-4 py-6 text-white text-lg">
                        {['Home', 'Movies', 'Genres', 'Actors'].map((label) => (
                            <li key={label}>
                                <Link
                                    href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                                    className="block w-full text-center px-4 py-2 hover:bg-indigo-600 rounded transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
