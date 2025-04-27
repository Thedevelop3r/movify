import React from 'react';

export default function ActorsListPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Actors List</h1>
            <p className="mb-4">Explore our collection of actors.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Actor cards will go here */}
            </div>
        </div>
    );
}