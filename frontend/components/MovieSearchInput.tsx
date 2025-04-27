"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MoviesSearchInput() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('search') || '');


    return (
        <div className="flex items-center justify-center mt-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
                className="text-white border border-gray-300 rounded-lg p-2 w-full max-w-md"
            />
        </div>
    );
}