import React from "react";
import styled from "styled-components";
import { Caption2 } from "../styles/TextStyles";

export default function MenuButton(props) {
  const src = (type, isSelected) => {
    if (type === "Lists") {
      if (isSelected) {
        return "/images/icons/lists-filled.png";
      } else {
        return "/images/icons/lists.png";
      }
    } else if (type === "Music") {
      if (isSelected) {
        return "/images/icons/headphones-filled.png";
      } else {
        return "/images/icons/headphones.png";
      }
    } else {
      if (isSelected) {
        return "/images/icons/camera-filled.png";
      } else {
        return "/images/icons/camera.png";
      }
    }
  };

  return (
    <Wrapper onClick={props.onClick} isSelected={props.isSelected}>
      <Icon src={src(props.type, props.isSelected)} />
      <Title>{props.type || "Lists"}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 28pt;
  min-width: 80pt;
  border-radius: 14pt;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: center;
  padding-left: 3pt;
  padding-right: 3pt;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "rgba(35, 163, 132, 0.2)" : "rgba(35, 163, 132, 0.1)"};
  &:hover {
    background-color: rgba(35, 163, 132, 0.2);
  }
`;

const Title = styled(Caption2)`
  color: #23a384;
  font-family: "Lalezar", cursive;
  text-align: center;
  font-size: 12pt;
  padding-top: 3pt;
  padding-left: 6pt;
`;

const Icon = styled.img`
  align-self: center;
  width: 12pt;
  height: 12pt;
  display: grid;
`;
