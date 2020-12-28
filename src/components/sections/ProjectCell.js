import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function ProjectCell(props) {
  return (
    <Wrapper>
      <Content>
        <Icon src={props.icon} />
        <AppInfoStack>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
          <Link href={props.link} target="_blank">
            link {">"}
          </Link>
        </AppInfoStack>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background-color: #f9f9f5;
  display: inline-block;
  width: 213pt;
  margin: 8px;
  padding: 8pt;
  border-radius: 8px;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled(SmallText)`
  color: #151515;
  font-family: "Lalezar", cursive;
  text-align: left;
  font-size: 10pt;
`;

const Description = styled.p`
  color: #151515;
  font-family: "Jura", sans-serif;
  font-size: 8pt;
  padding-bottom: 2px;
  text-align: left;
`;

const Link = styled.a`
  color: #23a384;
  font-family: "Jura", sans-serif;
  font-size: 8pt;
  text-align: left;
  text-decoration: none;
`;

const Icon = styled.img`
  background-color: white;
  border-radius: 4pt;
  width: 40pt;
  height: 40pt;
  margin-right: 8pt;
`;

const AppInfoStack = styled.div`
  float: right;
`;
