import { moviesListReal } from './movies_real';

export interface Movie {
    id: number;
    title: string;
    year: number;
    genre: string[];
    director: string;
    actors: string[];
    description: string;
    rating: number;
}

export const moviesList: Movie[] = [
    ...moviesListReal,
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: ["Sci-Fi", "Adventure", "Drama"],
        director: "Christopher Nolan",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.6
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: ["Drama"],
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 9.3
    },
    {
        id: 3,
        title: "The Godfather",
        year: 1972,
        genre: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        rating: 9.2
    },
    {
        id: 4,
        title: "The Dark Knight",
        year: 2008,
        genre: ["Action", "Crime", "Drama"],
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 9.0
    },
    {
        id: 5,
        title: "Pulp Fiction",
        year: 1994,
        genre: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        rating: 8.9
    },
    {
        id: 6,
        title: "Fight Club",
        year: 1999,
        genre: ["Drama"],
        director: "David Fincher",
        actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        rating: 8.8
    },
    {
        id: 7,
        title: "Inception",
        year: 2010,
        genre: ["Action", "Adventure", "Sci-Fi"],
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.8
    },
    {
        id: 8,
        title: "The Matrix",
        year: 1999,
        genre: ["Action", "Sci-Fi"],
        director: "Lana Wachowski, Lilly Wachowski",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        rating: 8.7
    },
    {
        id: 9,
        title: "Goodfellas",
        year: 1990,
        genre: ["Biography", "Crime", "Drama"],
        director: "Martin Scorsese",
        actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        rating: 8.7
    },
    {
        id: 10,
        title: "Forrest Gump",
        year: 1994,
        genre: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        rating: 8.8
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: ["Adventure", "Fantasy"],
        director: "Peter Jackson",
        actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        rating: 8.8
    },
    {
        id: 12,
        title: "Parasite",
        year: 2019,
        genre: ["Comedy", "Drama", "Thriller"],
        director: "Bong Joon Ho",
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        rating: 8.6
    },
    {
        id: 13,
        title: "The Social Network",
        year: 2010,
        genre: ["Biography", "Drama"],
        director: "David Fincher",
        actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        rating: 7.7
    },
    {
        id: 14,
        title: "Get Out",
        year: 2017,
        genre: ["Horror", "Mystery", "Thriller"],
        director: "Jordan Peele",
        actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        rating: 7.7
    },
    {
        id: 15,
        title: "Hereditary",
        year: 2018,
        genre: ["Horror", "Mystery", "Thriller"],
        director: "Ari Aster",
        actors: ["Toni Collette", "Milly Shapiro", "Gabriel Byrne"],
        description: "A grieving family is haunted by tragic and disturbing occurrences.",
        rating: 7.3
    }
    // Add remaining movies following the same pattern
];


export const moviesListTitles = moviesList.map(movie => movie.title.toLowerCase()); // Extract titles from moviesList