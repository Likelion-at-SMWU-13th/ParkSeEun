// components/styled.js

import styled from "styled-components";

export const GPTbox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #454545ff;
  font-weight: 500;
`;

export const Qusetbox = styled.div`
  display: flex;
  width: 500px;
`;

export const Ansbox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #f7f7f7ff;
  border-radius: 12px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  width: 70%;
  border: 1px solid #9f9f9fff;
`;

export const Qusetion = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  border: 1px solid #9f9f9fff;
  border-radius: 12px 0px 0px 12px;
  transition: all 0.2s ease;
  background: #eeeeee;
  font-weight: 500;
`;

export const Qusetbtn = styled.button`
  width: 30%;
  padding: 1rem 1.25rem;
  border-radius: 0px 12px 12px 0px;
  border-top: 1px solid #9f9f9fff;
  border-right: 1px solid #9f9f9fff;
  border-bottom: 1px solid #9f9f9fff;
  border-left: none;
  transition: all 0.2s ease;
  background: #eeeeee;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ddd;
    border: 2px solid #222;
  }

  &:active {
    background: #bbb;
  }
`;
