import react from 'react';


export default function GenresPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Genres</h1>
            <p className="mb-4">Explore movies by genre.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Genre cards will go here */}
            </div>
        </div>
    );
}