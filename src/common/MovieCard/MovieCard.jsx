import React from "react";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const moveMovieDetail = (id) => {
    console.log("id:", id);
    navigate(`/movies/${id}`);
    window.scrollTo(0, 0);
  };

  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];

    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <div
      className="MovieCard"
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}` +
          ")",
      }}
      onClick={() => moveMovieDetail(movie.id)}
    >
      <div className="overlay">
        <div>
          <div className="MovieCardTitle">{movie.title}</div>
          <div className="MovieCardSecondLine">
            <div className="genreList">
              {showGenre(movie.genre_ids).map((genre, index) => {
                return (
                  <Badge bg="danger" key={index}>
                    {genre}
                  </Badge>
                );
              })}
            </div>
            <div
              style={
                movie.adult
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "green" }
              }
            >
              {movie.adult ? "over 18" : "ALL"}
            </div>
          </div>
        </div>
        <div className="MovieCardThirdLine">
          <div>
            <FontAwesomeIcon icon={faStar} />
            {parseFloat(movie.vote_average).toFixed(1)}
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} />
            {parseInt(movie.popularity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
