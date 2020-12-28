import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

export default function Button(props) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src="/images/icons/credit.svg" />
      </IconWrapper>
      <TextWrapper>
        <Title>{props.title || "Get Pro Access"}</Title>
        <Subtitle>{props.subtitle || "$19 per month"}</Subtitle>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100px;
  height: 40px;
  padding: 12px;
  margin: 20px;
  background: linear-gradient(180deg, #fdc830 0%, #f37335 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  gap: 20px;
  grid-template-columns: 53px auto;
  justify-content: start;
  align-items: center;
  float: right;
  grid-area: "title";
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`;

const Icon = styled.img`
  justify-self: center;
  align-self: center;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  justify-items: start;
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  border-radius: 50%;
  display: grid;
  left: 4px;
`;
