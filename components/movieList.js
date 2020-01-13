import React from "react";

class MovieList extends React.Component {
    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    }
    renderMovies(movies) {
        return movies.map(movies => 
            (
                <div key={movies.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movies.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                        <a href="#">{movies.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{this.shorten(movies.description, 100)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movies.rating}</small>
                    </div>
                    </div>
                </div>
            )
        )
    }
    render() {
        const {movies} = this.props;
        return (<React.Fragment>{this.renderMovies(movies)}</React.Fragment>)
    }
}

export default MovieList;