import React from "react";
import styled from "styled-components";
import { SmallText } from "../styles/TextStyles";

export default function MusicCell(props) {
  return (
    <Wrapper onClick={() => window.open(props.spotifyURL, "_blank")}>
      <AlbumArt src={props.imageURL} alt="album art" />
      <Title>{props.name || "The Weeknd"}</Title>
      <Subtitle>{props.artist || "The Weeknd"}</Subtitle>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background-color: rgba(0, 0, 0, 0);
  display: inline-block;
  margin: 0px;
  padding: 20px 24px;
  text-align: left;
  height: 135pt;
  cursor: pointer;
`;

const Title = styled(SmallText)`
  color: #151515;
  font-family: "Lalezar", cursive;
  text-align: left;
  font-size: 12pt;
  max-width: 100pt;
`;

const Subtitle = styled(SmallText)`
  color: #4a5759;
  font-family: "Jura", sans-serif;
  text-align: left;
  font-size: 10pt;
  max-width: 100pt;
`;

const AlbumArt = styled.img`
  width: 100pt;
  height: 100pt;
  border-radius: 8pt;
  margin-bottom: 4pt;
`;
