import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { MediumText } from "../components/styles/TextStyles"
import HeroSection from "../components/sections/HeroSection"
import SnakeGame from "../components/sections/SnakeGame/SnakeGame"
import NavigationButton from "../components/sections/NavigationButton"
import useWindowSize from "../controllers/windowSize"

function IndexPage() {
  const size = useWindowSize()
  const [state, setState] = useState({
    description: "use your keyboard arrow keys to direct the snake",
  })

  function potentialSnakeGame() {
    if (size.width > 600) {
      return <SnakeGame stateSetter={setState} />
    } else {
      return <div />
    }
  }

  function potentialHeroSection() {
    if (size.width > 600) {
      return <HeroSection isMobile={false} description={state.description} />
    } else {
      return mobileMenu()
    }
  }

  function mobileMenu() {
    return (
      <ListsWrapper>
        <Logo src="/images/logos/Logo.svg" alt="logo" />
        <ListButtonContainer>
          <Margin />
          <Description>{"Wayyy more interesting on desktop."}</Description>
          <MenuButton to="/about/">
            <NavigationButton title="About"></NavigationButton>
          </MenuButton>
          <Blog href="https://medium.com/@komreezy_" target="_blank">
            <NavigationButton title="Blog"></NavigationButton>
          </Blog>
          <MenuButton to="/contact/">
            <NavigationButton title="Contact"></NavigationButton>
          </MenuButton>
          <MenuButton to="/projects/">
            <NavigationButton title="Projects"></NavigationButton>
          </MenuButton>
          <Margin />
        </ListButtonContainer>
      </ListsWrapper>
    )
  }

  return (
    <Layout>
      <SEO title="Komran Ghahremani" />
      {potentialSnakeGame()}
      {potentialHeroSection()}
    </Layout>
  )
}

export default IndexPage

const ListsWrapper = styled.div`
  grid-area: "lists";
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: "margin buttons margin";
`
const Margin = styled.div`
  grid-area: "margin";
`

const Description = styled(MediumText)`
  font-family: "Lalezar", cursive;
  color: #23a384;
  text-align: center;
`

const ListButtonContainer = styled.div`
  grid-area: "buttons";
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: rgba(35, 163, 132, 10%);
  height: 100vh;
`

const MenuButton = styled(Link)`
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: center;
  padding-left: 3pt;
  padding-right: 3pt;
  cursor: pointer;
  text-decoration: none;
  height: 28pt;
  min-width: 80pt;
  border-radius: 14pt;
  background-color: rgba(35, 163, 132, 0.1);
`

const Blog = styled.a`
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  justify-content: center;
  padding-left: 3pt;
  padding-right: 3pt;
  cursor: pointer;
  height: 28pt;
  min-width: 80pt;
  border-radius: 14pt;
  background-color: rgba(35, 163, 132, 0.1);
`

const Logo = styled.img`
  position: fixed;
  top: 5%;
  left: 50%;
  width: 10%;
  height: auto;
  z-index: 100;
  transform: translate(-50%, 0%);
`
