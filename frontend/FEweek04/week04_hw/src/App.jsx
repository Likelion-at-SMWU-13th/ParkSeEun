import React from "react";
import "./App.css";
import styled from "styled-components";
import logo from "./assets/logo.svg";
import RoomCard1 from "./components/RoomCard1";
import RoomCard2 from "./components/RoomCard2";
import RoomCard3 from "./components/RoomCard3";
import RoomCard4 from "./components/RoomCard4";
import RoomCard5 from "./components/RoomCard5";
import RoomCard6 from "./components/RoomCard6";
import RoomCard7 from "./components/RoomCard7";
import RoomCard8 from "./components/RoomCard8";
import RoomCard9 from "./components/RoomCard9";
import RoomCard10 from "./components/RoomCard10";
import RoomCard11 from "./components/RoomCard11";
import RoomCard12 from "./components/RoomCard12";
import RoomCard13 from "./components/RoomCard13";
import RoomCard14 from "./components/RoomCard14";

const Logo = styled.img`
  margin-top: 0px;
  margin-left: 50px;
  padding: 0;
  width: 100px;
  height: 100px;
`;

const Menu = styled.div`
  background-color: rgb(249, 249, 249);
  height: 100px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgb(237, 237, 237);
  position: relative;
`;

const Search = styled.div`
  color: rgb(230, 230, 230);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  font-size: 0.9rem;
  padding: 12px 25px;
  border-radius: 100px;
  border: 2px solid rgb(230, 230, 230);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 15px;
`;

const Text = styled.span`
  color: black;
`;

const Title = styled.h1`
  margin-top: 22px;
  margin-left: 90px;
  font-size: 1.25rem;
`;

const Roombox = styled.div`
  margin-left: 90px;
  display: flex;
  gap: 42px;
  align-items: center;
`;

function App() {
  return (
    <>
      <Menu>
        <Logo src={logo} />
        <Search>
          <span>🏠</span>
          <Text>어디든지</Text>|<Text>언제든지</Text>|<Text>게스트 추가</Text>
        </Search>
      </Menu>
      <Title>이번 주말에 예약 가능한 부산 숙소</Title>
      <Roombox>
        <RoomCard1 />
        <RoomCard2 />
        <RoomCard3 />
        <RoomCard4 />
        <RoomCard5 />
        <RoomCard6 />
        <RoomCard7 />
      </Roombox>
      <Title>부산 맞춤형 숙소 추천</Title>
      <Roombox>
        <RoomCard8 />
        <RoomCard9 />
        <RoomCard10 />
        <RoomCard11 />
        <RoomCard12 />
        <RoomCard13 />
        <RoomCard14 />
      </Roombox>
    </>
  );
}

export default App;
