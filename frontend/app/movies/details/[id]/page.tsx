import React from 'react'
import MovieDetails from '@/components/MovieDetailPage'

interface Props {
  params: Promise<{ id: string }>
}

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = await params
  const movieId = parseInt(id, 10)
  return <MovieDetails params={{ id: movieId }} />
}