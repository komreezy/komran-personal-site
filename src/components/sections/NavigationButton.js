import React from "react";
import styled from "styled-components";
import { Caption2 } from "../styles/TextStyles";

export default function NavigationButton(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 20px;
  margin: 8px;
  padding: 14px;
  background: transparent;
  border-radius: 15px;
  float: right;
  grid-area: "title";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled(Caption2)`
  color: #23a384;
  text-align: center;
  font-family: "Lalezar", cursive;
`;
