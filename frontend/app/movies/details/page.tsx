"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import MovieDetails from "@/components/MovieDetailPage";



export default function MovieDetailsPage() {
    const searchParams = useSearchParams();
    const movieId = searchParams.get('id') || '';
    const movieIdNumber = parseInt(movieId, 10);

    return (
        <MovieDetails params={{ id: movieIdNumber }} />
    );
}
