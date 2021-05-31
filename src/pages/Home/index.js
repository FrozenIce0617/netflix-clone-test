import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useApp } from "../../context";
import ThumbsCard from "../../components/ThumbsCard";

const S = {};

S.Heading = styled.h2`
  color: #fff;
  margin: 2em;
`;

S.Wrapper = styled.div`
  width: auto;
  display: ${({ scroll }) => (scroll ? "inline-flex" : "flex")};
  flex-wrap: ${({ scroll }) => (scroll ? "nowrap" : "wrap")};
  justify-content: space-around;
`;

export default function Home() {
  const [appState] = useApp();
  const { updateMovies, movies } = appState;

  useEffect(() => {
    movies.length < 2 && updateMovies();
  }, [movies]);

  return (
    <>
      <S.Heading>Popular Movies</S.Heading>
      <S.Wrapper>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <ThumbsCard key={movie.id} {...{ movie }} />
          </Link>
        ))}
      </S.Wrapper>
    </>
  );
}
