import React from 'react';

export default function HomePage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to My Movie App</h1>
            <p className="mb-4">Discover your favorite movies and genres.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Movie cards will go here */}
            </div>
        </div>
    );
}