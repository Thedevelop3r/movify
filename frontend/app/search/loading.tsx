
export default function Loading() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Movie Search</h1>
          <div className="animate-pulse">
            <div className="h-12 bg-gray-800 rounded-lg mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-800 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }