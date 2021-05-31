import React from "react";
import styled from "styled-components";
import IconStar from "../IconStar";

const S = {};

S.WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.RatingSpan = styled.span`
  margin-left: 5px;
  font-size: 1.8rem;
  font-weight: 700;
  padding-right: 5px;
  line-height: 1.8rem;
  font-family: Helvetica, Arial;
  color: #fff;
  font-size: 1.6rem;
`;

S.BackStarsDiv = styled.div`
  display: flex;
  position: relative;
  color: #d3d3d3;
  margin-left: 3px;
`;

S.FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${(props) => props.rating};
  color: #ffbc0b;
`;

export default function RatingStar({ rating, vote_count }) {
  const rate = (
    ((Math.round(((rating / 2) * 10) / 5) * 5) / 10) *
    2
  ).toString();
  return (
    <React.Fragment>
      <S.WrapperDiv>
        <S.BackStarsDiv>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <S.FrontDiv rating={`${rate * 10}%`}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </S.FrontDiv>
        </S.BackStarsDiv>
        <S.RatingSpan>
          {rate || "N/A"} / {vote_count}
        </S.RatingSpan>
      </S.WrapperDiv>
    </React.Fragment>
  );
}
