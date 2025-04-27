"use client";
import React from 'react';
import MoviesListPage from '@/components/MoviesListPage';
import { useSearchParams } from 'next/navigation';



export default function Movies() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre') || '';
    const sort = searchParams.get('sort') || '';

    return (<MoviesListPage genre={genre} sort={sort} />);
}