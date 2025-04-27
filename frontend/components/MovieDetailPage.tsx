import React from 'react';


export default function MovieDetailPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Movie Detail</h1>
            <p className="mb-4">Detailed information about the selected movie.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Movie details will go here */}
            </div>
        </div>
    );
}