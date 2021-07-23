import React from "react";
import styled, { keyframes } from "styled-components";
import { TMDB_BASE_IMG_URL } from "../../config";
import { Link } from "react-router-dom";
import { useApp } from "../../context";
import RatingStar from "../../components/RatingStar";

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
  padding-left: 1em;
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
  a {
    color: #fff;
  }
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
  const [media, setMedia] = React.useState({});
  const [appState] = useApp();
  const { getMovieById, movies, isLoading } = appState;

  React.useEffect(() => {
    const movie = movies.find((item) => item.id?.toString() === params?.id);
    !movie && !isLoading ? getMovieById(params?.id) : setMedia(movie);
  }, [movies, params, getMovieById, isLoading]);

  return (
    <>
      {isLoading ? (
        <S.Paragraph data-testid="detail-loading-status">
          Loading... <Link to="/"> Click here to go home</Link>
        </S.Paragraph>
      ) : (
        <>
          <S.DetailHead background={media?.poster_path || media?.backdrop_path}>
            <S.GoBack>
              <Link to="/"> Go to Home</Link>
            </S.GoBack>
          </S.DetailHead>
          <S.Title data-testid="detail-title">{media?.title || media?.name}</S.Title>
          <S.Paragraph>{media?.overview}</S.Paragraph>
          <RatingStar
            rating={media?.vote_average}
            vote_count={media?.vote_count}
          />
        </>
      )}
    </>
  );
}
