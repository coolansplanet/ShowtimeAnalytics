import React from 'react';
import { connect } from 'react-redux';
import { showMovie, showMoviePoster } from '../../actions/moviesActions';
import MovieItemDetails from '../MovieItemDetails/MovieItemDetails';
import moment from 'moment';

const MovieListItem = props => {
    let imageWidth = 300;
    let imagesBaseUrl = `https://image.tmdb.org/t/p/w${imageWidth}`;
    let className = props.movie.show ? 'show-details' : '';
    let buttonText = props.movie.show ? 'Close' : 'Info';

    return (
        <li className={className + ' movie-list-item'}>
            <img src={imagesBaseUrl+props.movie.poster_path}
                 alt="Poster"
                 onLoad={props.showMoviePoster.bind({}, props.movie.id)}
                 className={props.movie.showPoster ? 'show' : ''}/>
            <h3 className="title">{props.movie.title}</h3>
            <p className="release-date">
                <i className="material-icons">today</i>
                {
                    moment(props.movie.release_date, "YYYY-MM-DD")
                     .format('LL')
                }
            </p>

            <h3 className="vote-average">{props.movie.vote_average}</h3>
            <button onClick={props.showMovie.bind({}, props.movie.id)}>
                {buttonText}
            </button>

            {props.movie.show ? <MovieItemDetails id={props.movie.id} /> : ''}
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showMovie: movieId => {
            dispatch(showMovie(movieId))
        },
        showMoviePoster: movieId => {
            dispatch(showMoviePoster(movieId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
