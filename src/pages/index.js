import React, { useState } from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import HeroSection from "../components/sections/HeroSection";
import SnakeGame from "../components/sections/SnakeGame/SnakeGame";

function IndexPage() {
  const [state, setState] = useState({
    description: "use your keyboard arrow keys to direct the snake",
  });
  return (
    <Layout>
      <SEO title="Komran Ghahremani" />
      <SnakeGame stateSetter={setState} />
      <HeroSection description={state.description} />
    </Layout>
  );
}

export default IndexPage;
