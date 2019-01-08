import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../actions/moviesActions';

class MovieItemDetails extends Component{

    componentWillMount(){
        this.props.fetchMovieDetails(this.props.id);
    }

    render(){
        let genres;
        let productionCompanies = this.props.movieDetails.production_companies;
        let companyNames;
        let companyImages;

        if (!!this.props.movieDetails.genres) {
            genres = this.props.movieDetails.genres.map(
                oneGenre => {
                    return oneGenre.name;
                }
            ).join(', ');
        }else{
            genres = 'Unknown';
        }

        if(!!productionCompanies){
            let imagesBaseUrl = 'https://image.tmdb.org/t/p/original';

            companyNames = productionCompanies.map(
                oneCompany => { return oneCompany.name }
            ).join(', ');

            let companiesWithImages = productionCompanies.filter(
                oneCompany => { return !!oneCompany.logo_path }
            );

            companyImages = companiesWithImages.map(
                oneCompany => {
                    return(
                        <li key={oneCompany.id}>
                            <img src={imagesBaseUrl+oneCompany.logo_path}
                                 alt={oneCompany.name}
                            />
                        </li>
                    )
                }
            );
        }
        return(
            <CSSTransition
                in={true}
                appear={true}
                timeout={300}
                classNames="details">

                <div className="movie-item-details">
                    <p className="overview">{this.props.movieDetails.overview}</p>
                    <p className="genres">
                        <span className="bold">Genre: </span>
                        {genres}
                    </p>

                    {companyNames ? <p className="production-companies">
                        <span className="bold">Production Companies: </span>
                        {companyNames}
                    </p> : ''}

                    {companyImages ? <ul className="production-companies">
                        {companyImages}
                    </ul> : ''}
                </div>
            </CSSTransition>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetails: state.movies.selectedMovie.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: movieId => {
            dispatch(fetchMovieDetails(movieId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItemDetails);
