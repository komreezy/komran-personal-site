import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import { SmallText } from "../components/styles/TextStyles"
import NavigationButton from "../components/sections/NavigationButton"
import ListCell from "../components/sections/ListCell"
import MusicCell from "../components/sections/MusicCell"
import MenuButton from "../components/sections/MenuButton"
import useWindowSize from "../controllers/windowSize"

function About() {
  var newXHR = null
  const size = useWindowSize()
  const [state, setState] = useState({
    tab: "Idle",
    rows: [],
    lists: [],
  })

  useEffect(() => {
    const onChange = newData => {
      setState({
        tab: state.tab,
        lists: newData.val(),
      })
    }

    // listen to /views/id and on value change execute "onChange"
    firebase.database().ref("/data/lists").on("value", onChange)

    return () => {
      // On loading this component, id is sent to increment-views to increment the
      // value and the returned value is stored in viewCount.
      // Upon completion, if an instance of database exists, detach it using off()
      if (firebase.database()) {
        firebase.database().ref("/data/lists").off("value", onChange)
      }
    }
  }, [])

  const content = tab => {
    if (tab === "Lists") {
      return (
        <ProfileDescriptionStack>
          <Title>My Favorite Stuff</Title>
          <Subtitle>
            Making lists is one of my favorite things to do. Top 5 NBA Players,
            Top 6 Ryan Gosling movies, Top 8 Rush Hour quotes. You’ll easily get
            to know me more from this than my blurb.
          </Subtitle>
          <ListUL>{createListsTable()}</ListUL>
        </ProfileDescriptionStack>
      )
    } else if (tab === "Music") {
      return (
        <ProfileDescriptionStack>
          <Title>What I'm Listening To</Title>
          <Subtitle>
            “If I should ever die, God forbid, let this be my epitaph: THE ONLY
            PROOF HE NEEDED FOR THE EXISTENCE OF GOD WAS MUSIC.” -Kurt Vonnegut
          </Subtitle>
          <MusicUL>{createMusicTable()}</MusicUL>
        </ProfileDescriptionStack>
      )
    } else if (tab === "Photos") {
      return (
        <ProfileDescriptionStack>
          <Title>Photos</Title>
          <Subtitle>
            “It is more important to click with people than to click the
            shutter.” -Alfred Eisenstaedt
          </Subtitle>
          <iframe
            title="komreezy"
            src="https://embedsocial.com/facebook_album/pro_instagram/cd68ca5ea358b432778ef78981bf4cbc4702b769"
            width="700px"
            height="1200px"
            frameborder="0"
            marginheight="0"
            marginwidth="500"
            border="0"
            scrolling="no"
          ></iframe>
        </ProfileDescriptionStack>
      )
    } else {
      return (
        <ProfileDescriptionStack>
          <ProfileImage src="/images/avatars/komran.jpg" alt="profile" />
          <br></br>
          <br></br>
          <Description>
            Hey! I’m Komran. I'm an iOS Developer based out of NYC. Currently,
            at Peloton delivering cardio to your living room. Always invested in
            soccer, video games, and taking care of my babies (my dog + my
            plants).
          </Description>
          <Description>
            I’m a proud first generation Iranian-American raised by my parents
            and Atlanta. Other than software, I enjoy snowboarding, poker, and
            writing terrible blurbs. Jokes aside, I just want to cut up and make
            stuff with my friends.
          </Description>
        </ProfileDescriptionStack>
      )
    }
  }

  const createListsTable = () => {
    const lists = state.lists ? state.lists : []
    return lists.map((list, index) => {
      return <ListCell key={index} list={list} />
    })
  }

  const createMusicTable = () => {
    const rows = state.rows ? state.rows : []
    return rows.map((track, index) => {
      const { imageURL, name, artist, spotifyURL } = track
      return (
        <MusicCell
          key={index}
          imageURL={imageURL}
          name={name}
          artist={artist}
          spotifyURL={spotifyURL}
        />
      )
    })
  }

  function fetchLists() {
    setState({
      lists: state.lists,
      rows: state.rows,
      tab: "Lists",
    })
  }

  function fetchSpotifyToken() {
    const Http = new XMLHttpRequest()
    const url = "https://accounts.spotify.com/api/token"
    const clientId = "640c3d0e9d1f456eb7bb2abc43a345d9"
    const clientSecret = "4724f893e53b4e0cad88eaf89739f8eb"
    const encodedData = Buffer.from(clientId + ":" + clientSecret).toString(
      "base64"
    )
    const authorizationHeaderString = "Basic " + encodedData
    Http.onreadystatechange = () => {
      const part1 = Http.responseText.split('","')
      const token = part1[0].replace('{"access_token":"', "")
      fetchPlaylistTracks(token, (response, responseText) => {
        const json = JSON.parse(response)
        createTrackItems(json.tracks.items)
      })
    }
    Http.open("POST", url, true)
    Http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    Http.setRequestHeader("Authorization", authorizationHeaderString)
    Http.send("grant_type=client_credentials")
  }

  function fetchPlaylistTracks(token, callback) {
    const url = "https://api.spotify.com/v1/playlists/337JGxGGpdnKTYYmjNnEXV"
    newXHR =
      new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP")
    newXHR.open("GET", url, true)
    newXHR.setRequestHeader("Authorization", "Bearer " + token)
    newXHR.send()
    newXHR.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        callback(this.response, this.responseText)
      }
    }
  }

  function createTrackItems(tracks) {
    var trackObjects = []
    tracks.map((trackObject, index) => {
      const track = trackObject.track
      trackObjects.push({
        imageURL: track.album.images[0].url,
        name: track.name,
        artist: track.album.artists[0].name,
        spotifyURL: track.album.external_urls.spotify,
      })
      return null
    })
    setState({
      rows: trackObjects,
      tab: "Music",
      lists: state.lists,
    })
  }

  function potentialMobileAbout() {
    if (size.width < 600) {
      return (
        <MobileContainer>
          <Link to="/">
            <MobileLogo src="/images/logos/Logo.svg" alt="logo" />
          </Link>
          <MobileTitleWrapper>
            <Link to="/about/">
              <NavigationButton title="About"></NavigationButton>
            </Link>
            <a
              href="https://medium.com/@komreezy_"
              target="_blank"
              rel="noreferrer"
            >
              <NavigationButton title="Blog"></NavigationButton>
            </a>
            <Link to="/contact/">
              <NavigationButton title="Contact"></NavigationButton>
            </Link>
            <Link to="/projects/">
              <NavigationButton title="Projects"></NavigationButton>
            </Link>
          </MobileTitleWrapper>
          <MobileProfileDescriptionStack>
            <MobileProfileImage
              src="/images/avatars/komran.jpg"
              alt="profile"
            />
            <br />
            <br />
            <MobileDescription>
              Hey! I’m Komran. I'm an iOS Developer based out of NYC. Currently,
              at Peloton delivering cardio to your living room. Always invested
              in soccer, video games, and taking care of my babies (my dog + my
              plants).
            </MobileDescription>
            <br />
            <MobileDescription>
              I’m a proud first generation Iranian-American raised by my parents
              and Atlanta. Other than software, I enjoy snowboarding, poker, and
              writing terrible blurbs. Jokes aside, I just want to cut up and
              make stuff with my friends.
            </MobileDescription>
          </MobileProfileDescriptionStack>
        </MobileContainer>
      )
    } else {
      return (
        <Wrapper>
          <ContentWrapper>
            <TitleWrapper>
              <div />
              <Link to="/about/">
                <NavigationButton title="About"></NavigationButton>
              </Link>
              <a
                href="https://medium.com/@komreezy_"
                target="_blank"
                rel="noreferrer"
              >
                <NavigationButton title="Blog"></NavigationButton>
              </a>
              <Link to="/contact/">
                <NavigationButton title="Contact"></NavigationButton>
              </Link>
              <Link to="/projects/">
                <NavigationButton title="Projects"></NavigationButton>
              </Link>
            </TitleWrapper>
            <ProfileWrapper>
              <Margin />
              {content(state.tab)}
              <Margin />
            </ProfileWrapper>
          </ContentWrapper>
          <Link to="/">
            <Logo src="/images/logos/Logo.svg" alt="logo" />
          </Link>
          <ListsWrapper>
            <ListButtonContainer>
              <Margin />
              <MenuButton
                type="Lists"
                isSelected={state.tab === "Lists"}
                onClick={() => fetchLists()}
              />
              <MenuButton
                type="Music"
                isSelected={state.tab === "Music"}
                onClick={() => fetchSpotifyToken()}
              />
              <MenuButton
                type="Photos"
                isSelected={state.tab === "Photos"}
                onClick={() =>
                  setState({
                    rows: state.rows,
                    tab: "Photos",
                    lists: state.lists,
                  })
                }
              />
              <Margin />
            </ListButtonContainer>
          </ListsWrapper>
        </Wrapper>
      )
    }
  }

  return (
    <Layout>
      <SEO title="About" />
      {potentialMobileAbout()}
    </Layout>
  )
}

export default About

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(#f1f2eb, #ffffff);
`

// Top half
const ContentWrapper = styled.div`
  grid-area: "blurb";
  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
    "title"
    "info";
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 75%;
  padding-top: 12px;
  padding-right: 12px;
  overflow: scroll;
`

// bottom half
const ListsWrapper = styled.div`
  grid-area: "lists";
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 25%;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: "margin buttons margin";
`

/// NAVIGATION : ---------------------------------------------------------------------------------------------------------
const TitleWrapper = styled.div`
  grid-area: "title";
`

const Logo = styled.img`
  position: fixed;
  padding-top: 20px;
  padding-left: 24px;
  width: 3%;
  height: auto;
  z-index: 100;
`

/// PROFILE : ---------------------------------------------------------------------------------------------------------
const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: "margin profile margin";
  margin-top: -20px;
`

const ProfileDescriptionStack = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-area: "profile";
`

const Title = styled.h1`
  font-family: "Lalezar", cursive;
  font-size: 18pt;
  color: #151515;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 12px;
  max-width: 800px;
`

const Subtitle = styled(SmallText)`
  font-family: "Jura", sans-serif;
  color: #151515;
  text-align: center;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 24px;
  max-width: 800px;
`

const Description = styled(Subtitle)`
  font-size: 12pt;
  padding-left: 10%;
  padding-right: 10%;
`

/// BUTTONS : ---------------------------------------------------------------------------------------------------------
const ListButtonContainer = styled.div`
  grid-area: "buttons";
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: rgba(35, 163, 132, 10%);
  height: 100vh;
`

const Margin = styled.div`
  grid-area: "margin";
`

/// LISTS : ---------------------------------------------------------------------------------------------------------

const ListUL = styled.ul`
  text-align: center;
  padding-left: 160px;
  padding-right: 160px;
  padding-bottom: 32px;
`

const MusicUL = styled.ul`
  text-align: center;
  padding-left: 160px;
  padding-right: 160px;
  padding-bottom: 32px;
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
`

/// MOBILE : ---------------------------------------------------------------------------------------------------------
const MobileContainer = styled.div`
  margin: auto;
  position: fixed;
  background: #f1f2eb;
  padding-top: 12px;
  padding-right: 12px;
  width: 100vw;
  height: 100vh;
`

const MobileDescription = styled.p`
  text-align: center;
  font-size: 12pt;
  margin: auto;
  font-family: "Jura", sans-serif;
  color: #151515;
`

const MobileProfileDescriptionStack = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: -5%;
`

const MobileProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const MobileTitleWrapper = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  top: 20%;
`

const MobileLogo = styled.img`
  margin-top: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  height: auto;
`
