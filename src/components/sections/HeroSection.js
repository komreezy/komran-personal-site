import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import NavigationButton from "./NavigationButton";

function HeroSection(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Link to="/">
          <Logo src="/images/logos/Logo.svg" alt="logo" />
        </Link>
        <Link to="/about/">
          <NavigationButton title="About"></NavigationButton>
        </Link>
        <a href="https://medium.com/@komreezy_" target="_blank">
          <NavigationButton title="Blog"></NavigationButton>
        </a>
        <Link to="/contact/">
          <NavigationButton title="Contact"></NavigationButton>
        </Link>
        <Link to="/projects/">
          <NavigationButton title="Projects"></NavigationButton>
        </Link>
      </TitleWrapper>
      <ContentWrapper>
        <Title>Hi, I'm Komran</Title>
        <Description>{props.description}</Description>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
    "space title title title"
    "content";
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #f1f2eb;
  padding-top: 12px;
  padding-right: 12px;
`;

const ContentWrapper = styled.div`
  //max-width: 1234px; // responsive but cuts off when screen too big
  //padding: 200px 30px; // top/bottom & left/right
  //margin: 0 auto; // center
  grid-area: "content";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`;

const TitleWrapper = styled.div`
  padding-right: 12px; // top/bottom & left/right
  grid-area: "title";
`;

const Title = styled(H1)`
  font-family: "Lalezar", cursive;
  color: #23a384;
  text-align: center;
  padding-bottom: 4px;
`;

const Description = styled(MediumText)`
  font-family: "Lalezar", cursive;
  color: #23a384;
  text-align: center;
`;

const Logo = styled.img`
  width: 3%;
  height: auto;
  padding-top: 8px;
  padding-left: 24px;
`;
