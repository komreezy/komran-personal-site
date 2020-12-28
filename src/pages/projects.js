import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import NavigationButton from "../components/sections/NavigationButton";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import ProjectCell from "../components/sections/ProjectCell";

function Projects() {
  const [state, setState] = useState([
    {
      name: "Peloton",
      icon: "../images/icons/apps/peloton.png",
      description:
        "Working on the Digital team trying to build the Netflix for Fitness",
      link: "https://www.google.com",
    },
    {
      name: "WeWork",
      icon: "../images/icons/apps/wework.jpg",
      description:
        "Worked on internal application, Fieldens, used for construction communication",
      link: "https://fieldlens.com",
    },
    {
      name: "Savvy",
      icon: "../images/icons/apps/savvy.png",
      description:
        "A building operating system designed for efficiency, prevention, and insight",
      link: "https://getsavvyapp.com",
    },
    {
      name: "Featured",
      icon: "../images/icons/apps/featured.png",
      description: "An App configured for editing intricate Instagram stories",
      link: "https://www.producthunt.com/posts/featured-3-0",
    },
    {
      name: "Often",
      icon: "../images/icons/apps/often.jpg",
      description:
        "Expansion of the Drizzy App with more artists including GIFs and Images",
      link:
        "https://apps.apple.com/us/app/often-create-share-your-own-keyboard-gifs-photos-quotes/id1053313047",
    },
    {
      name: "Drizzy",
      icon: "../images/icons/apps/drizzy.png",
      description:
        "Custom iOS Keyboard that let users send each other Drake lyrics",
      link:
        "https://hypebeast.com/2015/3/drizzy-keyboard-app-quotes-drake-lyrics-for-your-text-messages",
    },
    {
      name: "Viafly",
      icon: "../images/icons/apps/viafly.png",
      description:
        "A mobile checkout solution for brick and mortar stores similar to Amazon Go",
      link: "https://www.linkedin.com/company/viafly/",
    },
    {
      name: "Dreamscape",
      icon: "../images/icons/apps/dreamscape.png",
      description:
        "My first app centered around creating a community for dream journaling",
      link:
        "https://appadvice.com/app/dreamscape-dream-journal-reader/1088519144",
    },
  ]);

  const createProjectsTable = () => {
    const projects = state ? state : [];
    return projects.map((project, index) => {
      const { name, icon, description, link } = project;
      return (
        <ProjectCell
          key={index}
          name={name}
          icon={icon}
          description={description}
          link={link}
        />
      );
    });
  };

  return (
    <Layout>
      <SEO title="Projects" />
      <Wrapper>
        <TitleWrapper>
          <Link to="/">
            <Logo src="/images/logos/Logo.svg" alt="logo" />
          </Link>
          <Link to="/about/">
            <NavigationButton title="About"></NavigationButton>
          </Link>
          <Link to="/page-2/">
            <NavigationButton title="Blog"></NavigationButton>
          </Link>
          <Link to="/contact/">
            <NavigationButton title="Contact"></NavigationButton>
          </Link>
          <Link to="/projects/">
            <NavigationButton title="Projects"></NavigationButton>
          </Link>
        </TitleWrapper>
        <ContentWrapper>
          <Title>Projects</Title>
          <ProjectUL>{createProjectsTable()}</ProjectUL>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Projects;

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
  grid-area: "content";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  margin-top: -5%;
`;

const Title = styled.h1`
  font-family: "Lalezar", cursive;
  font-size: 18pt;
  color: #151515;
  text-align: center;
  padding-bottom: 24px;
  margin-top: -5%;
`;

const TitleWrapper = styled.div`
  padding-right: 12px;
  grid-area: "title";
`;

const Logo = styled.img`
  width: 3%;
  height: auto;
  padding-top: 8px;
  padding-left: 24px;
`;

const ProjectUL = styled.ul`
  text-align: center;
  padding-bottom: 32px;
  margin-left: 20%;
  margin-right: 20%;
`;
