import React from 'react';
import styled from 'styled-components';
import Github from '../svgs/github.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Spotify from '../svgs/spotify.svg';

const FooterStyles = styled.footer`
  width: 85%;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
  p {
    color: var(--font);
    font-size: 0.9rem;
  }
  .footer__icons {
    text-align: center;
    margin: 1rem auto;
    width: 30%;
    display: flex;
    justify-content: space-between;
    a {
      svg {
        width: 20px;
        fill: var(--font);
        &:hover {
          fill: var(--cyan);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

const Footer = () => (
  <FooterStyles>
    <div>
      <p>Designed and build by Nick East</p>
      <div className="footer__icons">
        <a
          href="https://github.com/NickEast12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/nick-east"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://open.spotify.com/user/nickeast12?si=GeSIN_6YSeKYSKAFsmj-8A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify />
        </a>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
