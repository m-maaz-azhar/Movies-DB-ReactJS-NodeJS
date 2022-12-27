import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Footer from '../Components/Footer';
import MovieSection from '../Components/MovieSection';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

// Base state interface
interface IState {
  toggleView: () => void;
}

// Interface for the MovieList component's state
interface IMovieListState {
  ViewType: IState;
  Movies: any;
}

// Concrete states that implement the base state interface
class ListViewState implements IState {
  public toggleView = () => {
    console.log('Switching to grid view');
  }
}

class GridViewState implements IState {
  public toggleView = () => {
    console.log('Switching to list view');
  }
}

// Context component that holds the current state
class MovieList extends React.Component<{}, IMovieListState> {
  constructor(props: any) {
    super(props);
    this.FilterMovies = this.FilterMovies.bind(this);
  }

  public state: IMovieListState = {
    ViewType: new ListViewState(),
    Movies: []
  };

  public toggleView = () => {
    this.setState(prevState => {
      // Change the current state based on the current view
      const newState = prevState.ViewType instanceof ListViewState ? new GridViewState() : new ListViewState();
      return { ViewType: newState, Movies: prevState.Movies };
    });
  }

  componentDidMount() {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ Movies: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  FilterMovies(FilterMovies: any) {
    this.setState({ Movies: FilterMovies, ViewType: this.state.ViewType });
  }

  public render() {
    return (
      <div>
        <Navbar />
        <main>
          <div className="main-movies-section">
            <Sidebar setFilter={this.FilterMovies} />
            <div className="movies-thumbnails">
              <button className='toggle-button' onClick={this.toggleView}><FontAwesomeIcon icon={faList} /></button>
              {this.state.ViewType instanceof ListViewState && <MovieSection type="List" data={this.state.Movies} title="MOVIES" banner={true} />}
              {this.state.ViewType instanceof GridViewState && <MovieSection type="Grid" data={this.state.Movies} title="MOVIES" banner={true} />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default MovieList;