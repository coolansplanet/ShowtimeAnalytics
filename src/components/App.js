import React, { Component } from 'react';
import MovieListItem from './MovieListItem/MovieListItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/moviesActions';


class App extends Component {

    componentWillMount(){
      this.props.fetchMovies();
    }

    render() {
        let popularMovies = this.props.movies;
        return (
            <section id="home">
                <h1>Top most popular <span className="highlighted">
                        {this.props.movies.length} movies
                    </span>
                </h1>
                <ul className="movie-list">{
                        popularMovies.map(onePopularMovie => {
                            return (
                                <MovieListItem
                                    key={onePopularMovie.id}
                                    movie={onePopularMovie}
                                />
                        )})
                    }
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => {
            dispatch(fetchMovies())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
