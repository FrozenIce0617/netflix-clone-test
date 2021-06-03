import React, { useEffect } from "react";
import styled from "styled-components";

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
  const { updateMovies, movies, isLoading } = appState;

  useEffect(() => {
    if (!isLoading && movies?.length < 2) {
      updateMovies()
    }
  }, [movies, updateMovies, isLoading]);

  return (
    <>
      {isLoading ? (
        <>
          <S.Heading>Loading...</S.Heading>
        </>
      ) : (
        <>
          <S.Heading>Popular Movies</S.Heading>
          <S.Wrapper>
            {movies.map((movie) => (
              <ThumbsCard key={movie.id} {...{ movie }} />
            ))}
          </S.Wrapper>
        </>
      )}
    </>
  );
}
