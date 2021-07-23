import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TMDB_BASE_IMG_URL } from "../../config";

const S = {};

S.Card = styled(Link)`
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 1.6rem;
  width: 200px;
  height: 300px;
  background-size: cover;
  background-image: url(${TMDB_BASE_IMG_URL}/${({ bg }) => bg});
  opacity: 0.6;
  cursor: pointer;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  :hover,
  :active {
    opacity: 1;
    transform: scale(1.1);

    > * {
      transform: translateY(0);
    }
  }

  @media (max-width: 700px) {
    width: 40vw;
    height: 60vw;
  }

  @media (max-width: 346px) {
    width: 80vw;
    height: 120vw;
  }
`;

S.Title = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.6rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translateY(100%);
  transition: transform 0.2s 0.2s ease;
`;

const ThumbsCard = ({ movie }) => {
  return (
    <S.Card
      data-testid="thumbs-card"
      to={`/movie/${movie.id}`}
      name={movie.original_title}
      bg={movie.poster_path || movie.backdrop_path}
    >
      <S.Title data-testid="thumbs-card-title">{movie.original_title}</S.Title>
    </S.Card>
  );
};

export default ThumbsCard;
