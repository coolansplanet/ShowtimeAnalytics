import axios from 'axios';

let baseUrl = 'https://api.themoviedb.org/3/';
let apiKey = '4a203abe54a397a3160c4eb42e275f70';

export function fetchMovies(){
    let movieListEndpoint = 'discover/movie';
    return {
        type: 'FETCH_MOVIES',
        payload: axios.get(baseUrl+movieListEndpoint, {
                 params: {
                     api_key: apiKey,
                     sort_by: 'popularity.desc'
                 }
        })
    }
}

export function showMovie(movieId){
    return {
        type: 'SHOW_MOVIE',
        payload: movieId
    }
}


export function showMoviePoster(movieId){
    return {
        type: 'SHOW_MOVIE_POSTER',
        payload: movieId
    }
}

export function fetchMovieDetails(movieId){
    let movieEndpoint = 'movie/'+movieId;
    return {
        type: 'FETCH_MOVIE_DETAILS',
        payload: axios.get(baseUrl+movieEndpoint, {
            params: {
                api_key: apiKey,
            }
        })
    }
}
