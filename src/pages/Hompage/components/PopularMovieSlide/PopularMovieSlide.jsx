import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { popularMovieResponsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery(); // 기존에 만들어둔 훅
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">${error.message}</Alert>;
  }

  return (
    <div style={{ width: "100%" }}>
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={popularMovieResponsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
