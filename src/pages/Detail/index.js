import React from "react";
import styled, { keyframes } from "styled-components";
import { TMDB_BASE_IMG_URL } from "../../config";
import { Link, Redirect } from "react-router-dom";
import { useApp } from "../../context";

const S = {};

S.keyFrameAnim = keyframes`
    0% {
        background-position: top center;
    }

    100% {
        background-position: bottom center;
    }
`;
S.keyFrameAnimNarrow = keyframes`
    0% {
        background-position: top left;
    }

    100% {
        background-position: bottom right;
    }
`;

S.Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 550px) {
    width: 100%;
    &:first-of-type {
      font-size: 3rem;
    }
  }
`;

S.Paragraph = styled.p`
  padding: 1em;
  color: #fff;
  font-size: 1.6rem;
  width: 100%;
`;

S.DetailHead = styled.div`
  padding-top: 50vh;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${TMDB_BASE_IMG_URL}/${({ background }) => background});
  animation: ${S.keyFrameAnim} 25s ease infinite alternate;

  @media (max-width: 100%) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 30%,
        rgba(0, 0, 0, 0)
      ),
      url(${TMDB_BASE_IMG_URL}/${({ background }) => background});

    display: flex;
    flex-direction: column;
    animation-name: ${S.keyFrameAnimNarrow};
    animation-duration: 45s;
    & > * {
      text-align: center;
    }
  }
`;

S.GoBack = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
  a {
    color: #fff;
  }
`;

export default function Detail({ match: { params } }) {
  const [appState] = useApp();
  const { getMovieById, movies } = appState;

  let movie = movies.find((item) => item.id.toString() === params?.id);
  if (!movie) movie = getMovieById(params?.id);

  return (
    <>
      {movie ? (
        <>
          <S.DetailHead background={movie.poster_path || movie.backdrop_path}>
            <S.GoBack>
              <Link to="/"> Go to Home</Link>
            </S.GoBack>
          </S.DetailHead>
          <>
            <S.Title>{movie.title || movie.name}</S.Title>
            <S.Paragraph>{movie.overview}</S.Paragraph>
          </>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
