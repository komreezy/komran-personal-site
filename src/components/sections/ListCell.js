import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function ListCell(props) {
  const numberedItems = (items) => {
    return items.map((item, index) => {
      return <Item key={index}>{item}</Item>;
    });
  };

  return (
    <Wrapper>
      <Title>{props.list.title || "Top 5 Favorite NBA Players"}</Title>
      {numberedItems(props.list.items || [])}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  display: inline-block;
  width: 312.5px;
  margin: 12px;
  padding: 20px 24px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Title = styled(SmallText)`
  color: #151515;
  font-family: "Lalezar", cursive;
  text-align: left;
  padding-bottom: 3px;
  font-size: 12pt;
`;

const Item = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 10pt;
  color: black;
  text-align: left;
  padding: 3px;
`;
