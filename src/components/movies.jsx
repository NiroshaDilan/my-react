import React, {Component} from "react";
import {deleteMovie, getMovies} from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import counter from "./counter";
import {paginate} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import {getGenres} from "../services/fakeGenreService";


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        this.setState(
            {
                movies: getMovies(),
                genres: getGenres()
            })
    }

    handleDelete = movie => {
        const movies = this.state.movies
            .filter(m => m._id !== movie._id);
        this.setState({movies});
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = genre => {
        console.log(genre);
    };

    renderMovieTable() {
        const {
            movies: allMovies,
            pageSize,
            currentPage
        } = this.state;

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <>
                <p>Movies {movies.length}</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movies.map(movie => (
                            <tr key={movie._id}>
                                <th>{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() => this.handleDelete(movie)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    itemsCount={allMovies.length}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                />
            </>
        )
    }

    render() {
        const {length: count} = this.state.movies;
        const {genres} = this.state;
        return (
            <>
                <div className="row">
                    <div className="col-md-2">
                        <ListGroup
                            items={genres}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col-md-10">
                        {
                            (count !== 0) ? this.renderMovieTable() : <p>No movies found.</p>
                        }
                    </div>
                </div>
            </>

        );
    }
}

export default Movies;