import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { H1, MediumText } from "../components/styles/TextStyles";
import NavigationButton from "../components/sections/NavigationButton";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

function Contact() {
  function sendEmail() {
    var params = {
      personalizations: [
        {
          to: [
            {
              email: "gkomran@gmail.com",
            },
          ],
        },
      ],
      from: {
        email: "gkomran@gmail.com",
      },
      subject: "Sending with SendGrid is Fun",
      content: [
        {
          type: "text/plain",
          value: "and easy to do anywhere, even with cURL",
        },
      ],
    };

    if (typeof XMLHttpRequest !== "undefined") {
      const Http = new XMLHttpRequest();
      const url = "https://api.sendgrid.com/v3/mail/send";
      const clientSecret =
        "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";
      const authorizationHeaderString = "Bearer " + clientSecret;
      Http.onreadystatechange = () => {
        console.log(Http.responseText);
      };
      Http.open("POST", url, true);
      Http.setRequestHeader("Access-Control-Allow-Origin", null);
      Http.setRequestHeader("Content-Type", "application/json");
      Http.setRequestHeader("Authorization", authorizationHeaderString);
      Http.send(JSON.stringify(params));
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
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
          <LeftBlock>
            <Title>Hit me up.</Title>
            <Description>
              always looking to connect & build something interesting
            </Description>
            <Social>
              <a
                href="https://twitter.com/komreezy_"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src="/images/icons/twitter.png" />
              </a>
              <a
                href="https://www.instagram.com/komreezy/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src="/images/icons/instagram.png" />
              </a>
              <a
                href="https://github.com/komreezy"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src="/images/icons/github.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/komran/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon src="/images/icons/linkedin.png" />
              </a>
            </Social>
          </LeftBlock>
          <RightBlock>
            <EmailInputTitle>Email</EmailInputTitle>
            <EmailInput></EmailInput>
            <InputTitle>Message</InputTitle>
            <MessageInput></MessageInput>
            <SubmitButton onClick={sendEmail()}>Submit</SubmitButton>
          </RightBlock>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Contact;

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`;

const LeftBlock = styled.div`
  float: left;
  width: 218pt;
  margin-right: 24pt;
`;

const RightBlock = styled.div`
  float: right;
  width: 218pt;
  margin-left: 24pt;
`;

const TitleWrapper = styled.div`
  padding-right: 12px;
  grid-area: "title";
`;

const Title = styled(H1)`
  font-family: "Lalezar", cursive;
  color: #23a384;
  text-align: left;
  width: 218pt;
  padding-bottom: 4px;
`;

const Description = styled(MediumText)`
  font-family: "Jura", sans-serif;
  color: #151515;
  max-width: 218pt;
  text-align: left;
`;

const Logo = styled.img`
  width: 3%;
  height: auto;
  padding-top: 8px;
  padding-left: 24px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 218pt;
  margin-top: 48px;
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 32px;
`;

const InputTitle = styled(MediumText)`
  font-family: "Jura", sans-serif;
  font-weight: 500;
  font-size: 10pt;
  margin-left: 2pt;
  margin-bottom: 4pt;
  color: #151515;
  max-width: 218pt;
  text-align: left;
`;

const EmailInputTitle = styled(InputTitle)`
  margin-top: 38pt;
`;

const EmailInput = styled.input`
  background-color: #f9f9f5;
  width: 212pt;
  height: 18pt;
  padding: 6pt;
  border-radius: 4pt;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  border: none;
  margin-bottom: 12pt;
  outline: none;
`;
const MessageInput = styled.textarea`
  background-color: #f9f9f5;
  width: 212pt;
  height: 54pt;
  padding: 6pt;
  border-radius: 4pt;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  border: none;
  outline: none;
  resize: none;
`;

const SubmitButton = styled.button`
  color: white;
  font-family: "Lalezar", cursive;
  text-align: center;
  font-size: 12pt;
  height: 28pt;
  min-width: 80pt;
  border-radius: 14pt;
  background-color: rgba(35, 163, 132, 1);
  float: right;
  border: none;
  margin-top: 12pt;
  margin-right: -2pt;
  cursor: pointer;
`;
