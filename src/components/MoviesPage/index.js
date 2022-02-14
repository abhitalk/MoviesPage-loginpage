import { Component } from "react";
import Cookie from "js-cookie";
import Navbar from "../Navbar";
import MoviesCard from "../MoviesCard";
import { Redirect } from "react-router-dom";
import ReactModal from "../Modal/index";
import Modal from "react-modal";
import Loader from "react-loader-spinner";

import {
  LoaderContainer,
  MoviesPageApp,
  MainHeading,
  DetailsContainer,
  NextPageContainer,
  PageNumber,
  NextButton,
} from "./styledComponents";

Modal.setAppElement("#root");

class MoviesPage extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      isSuccessful: true,
      isMoviesLoading: false,
      page: 1,
      moviesList: [],
      apiUrl: "https://demo.credy.in/api/v1/maya/movies/",
      modalList: [],
      storedMoviesList: [],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = (id) => {
    const { moviesList } = this.state;
    const modalResultList = moviesList.filter(
      (eachCard) => eachCard.uuid === id
    );
    this.setState({ showModal: true, modalList: { ...modalResultList } });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.getMoviesList();
  }

  getMoviesList = async () => {
    this.setState({ isMoviesLoading: true });
    const { apiUrl } = this.state;
    const accessToken = localStorage.getItem("login-token");
    const options = {
      headers: {
        Authorization: `Token ${accessToken}`,
      },
      method: "GET",
    };

    const response = await fetch(apiUrl, options);
    if (response.status === 200) {
      const receivedData = await response.json();
      this.setState({
        moviesList: receivedData.results,
        apiUrl: receivedData.next,
        isSuccessful: true,
        isMoviesLoading: false,
        storedMoviesList: receivedData.results,
      });
    } else if (response.status === 401) {
      const { history } = this.props;
      history.replace("/login");
    } else {
      this.setState({
        moviesList: [],
        isSuccessful: false,
        isMoviesLoading: false,
        storedMoviesList: [],
      });
    }
  };

  onNextPage = () => {
    this.getMoviesList();
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  filterMovieList = (e) => {
    const newMoviesList = this.state.storedMoviesList.filter((movie) => {
      if (
        movie.title.toLowerCase().includes(e.target.value.trim().toLowerCase())
      ) {
        return { ...movie };
      }
    });

    this.setState({ moviesList: newMoviesList });
  };

  renderMoviesPages = () => {
    const { showModal, page, moviesList, modalList } = this.state;
    return showModal ? (
      <ReactModal
        show={this.state.showModal}
        handleClose={this.handleCloseModal}
        card={modalList}
      />
    ) : (
      <MoviesPageApp id="Movies-Page-Container">
        <Navbar filterMovieList={this.filterMovieList} />
        <MainHeading>Movies List</MainHeading>
        <DetailsContainer>
          {moviesList.map((eachCard) => (
            <MoviesCard
              details={eachCard}
              key={eachCard.uuid}
              openModal={this.handleOpenModal}
            />
          ))}
        </DetailsContainer>
        <NextPageContainer>
          <PageNumber>{page}</PageNumber>
          <NextButton type="button" onClick={this.onNextPage}>
            Next
          </NextButton>
        </NextPageContainer>
      </MoviesPageApp>
    );
  };

  renderSuccessful = () => {
    const userLocalStorage = localStorage.getItem("login-token");
    if (userLocalStorage === null) {
      return <Redirect to="/login" />;
    }
    const { isSuccessful } = this.state;
    return isSuccessful ? (
      this.renderMoviesPages()
    ) : (
      <div>
        <button type="button" onClick={this.getMoviesList}>
          Refresh
        </button>
      </div>
    );
  };

  render() {
    const { isMoviesLoading } = this.state;
    return isMoviesLoading ? (
      <LoaderContainer>
        <Loader type="Rings" color="#2d9b63" height={80} width={80} />
      </LoaderContainer>
    ) : (
      this.renderSuccessful()
    );
  }
}

export default MoviesPage;
