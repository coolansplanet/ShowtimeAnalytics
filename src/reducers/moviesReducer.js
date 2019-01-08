export default function reducer(state={
        movies:[],
        selectedMovie: {
            data: {},
            fetchingState: null,
            error: null,
            showCompanyLogos: false
        },
        fetchingState: null,
        error: null
    }, action){

    if(action.type === 'FETCH_MOVIES_PENDING'){

        return {...state, fetchingState: 'fetching', error: null}

    }else if(action.type === 'FETCH_MOVIES_PENDING'){

        return {...state, fetchingState: 'fetching', error: null}

    }else if(action.type === 'FETCH_MOVIES_FULFILLED'){

        const movies = action.payload.data.results;
        return {
            ...state,
            fetchingState: 'fetched',
            movies: movies.map(oneMovie => {
                return {
                    ...oneMovie,
                    show: false,
                    error: null,
                    showPoster: false
                }
            })
        }
    }else if(action.type === 'FETCH_MOVIES_REJECTED'){

        return {
            ...state,
            fetchingState: 'error',
            error: action.payload
        }
    }else if(action.type === 'SHOW_MOVIE'){

        return {
            ...state,
            movies: state.movies.map(oneMovie => {
                let showMovie = oneMovie.id === action.payload && !oneMovie.show;
                return {...oneMovie, show: showMovie}
            })
        }
    }else if(action.type === 'SHOW_MOVIE_POSTER'){

        let movieIndex =  state.movies.findIndex(oneMovie => {
            return oneMovie.id === action.payload;
        });
        const movies = [...state.movies];
        movies[movieIndex].showPoster = true;
        return {...state, movies: movies}

    }else if(action.type === 'FETCH_MOVIE_DETAILS_PENDING'){
        return {...state, selectedMovie: {
                fetchingState: 'fetching',
                data: {},
                error: null
            }
        }
    }else if(action.type === 'FETCH_MOVIE_DETAILS_FULFILLED'){
        return {
                ...state,
                selectedMovie: {
                    fetchingState: 'fetched',
                    data: action.payload.data,
                    error: null
                }
        }
    }else if(action.type === 'FETCH_MOVIE_DETAILS_REJECTED'){

        return {...state, selectedMovie: {
                fetchingState: 'error',
                error: action.payload
            }
        }
    }else{
        return state;
    }
}
