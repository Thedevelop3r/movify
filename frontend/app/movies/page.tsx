"use client";
import React from 'react';
import MoviesListPage from '@/components/MoviesListPage';
import { useSearchParams } from 'next/navigation';



export default function Movies() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre') || '';

    return (<MoviesListPage genre={genre} />);
}