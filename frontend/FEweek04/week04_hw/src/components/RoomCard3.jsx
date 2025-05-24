import React from "react";
import Room3 from "../assets/3.jpg";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  width: 150px;
`;

const Like = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgb(247, 247, 247);
  color: black;
  font-size: 0.65rem;
  padding: 5px 10px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  z-index: 1;
  margin-left: 3px;
  margin-top: 3px;
`;

const Img = styled.img`
  width: 180px;
  height: 170px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 0.8rem;
  margin-top: 2px;
  color: #333;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 0.6rem;
  margin-top: -8px;
  color: #333;
  font-weight: 500;
  color: grey;
`;

const RoomCard3 = () => {
  const islike = true;

  return (
    <CardWrapper>
      {islike ? <Like>게스트 선호</Like> : ""}
      <Img src={Room3} />
      <Title>수영구의 아파트</Title>
      <Info>6월 27일~29일</Info>
      <Info>$316,598 · 2박 · ★ 4.91</Info>
    </CardWrapper>
  );
};

export default RoomCard3;
