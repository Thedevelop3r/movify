import { moviesListReal } from './movies_real';

export const moviesList: Movie[] = [
    ...moviesListReal,
];


export const moviesListTitles = moviesList.map(movie => movie.title.toLowerCase()); // Extract titles from moviesList