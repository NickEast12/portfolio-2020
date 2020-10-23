import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo-white.png';
import Github from '../svgs/github.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Spotify from '../svgs/spotify.svg';

const Nav = () => {
  console.log('this is the navigation');
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

const MobileNavStyles = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
  transition: background 0.5s ease-in-out;
  width: 100%;
  border-bottom: solid 1px var(--font);
  position: sticky;
  top: 0;
  z-index: 24;
  background: ${({ open }) =>
    open ? 'rgba(22, 33, 41, 1)' : 'rgba(22, 33, 41, 0.85)'};
  /* background: var(--background); */
  backdrop-filter: saturate(180%) blur(20px);
  .mobile__nav__inner {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__img {
      svg {
        width: 10px;
      }
      img {
        width: 35px;
      }

      padding: 1rem 0 0.5rem 0;
    }
    .hamburger {
      width: 25px;
      padding-top: 0.75rem;
      display: flex;
      flex-direction: column;
      outline: none !important;

      div {
        background: var(--font);
        width: 100%;
        height: 1px;
        margin-bottom: 0.55rem;
        transition: all 0.25s ease;
        transform-origin: 5px;

        &:nth-child(1) {
          transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
        }
        &:nth-child(2) {
          transform: ${({ open }) =>
            open ? 'rotate(-40deg)' : 'rotate(0deg)'};
        }
      }
    }
  }
`;
const MobileMenuStyles = styled.div`
  @media only screen and (min-width: 100px) {
    @keyframes liAnimation {
      to {
        opacity: 1;
        transform: translateY(0px);
        z-index: 50;
      }
    }
    @keyframes iconAnimation {
      to {
        opacity: 1;
      }
    }
    transition: all 0.5s ease-in-out;
    background: rgba(22, 34, 41, 0.95);
    backdrop-filter: saturate(180%) blur(5px);
    max-height: ${({ open }) => (open ? '1000rem' : '0')};
    position: absolute;
    top: 4.3rem;
    right: 0;
    width: 100%;
    z-index: -10;
    height: ${({ open }) => (open ? '100vh' : '0')};
    div {
      display: ${({ open }) => (open ? 'block' : 'none')};
      width: 70%;
      margin: 0 auto;
      text-align: center;
      ul {
        list-style: none;
        text-align: center;
        margin: 1.5rem 0;
        padding: 0;

        a:nth-child(1) li {
          animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
            forwards;
        }
        a:nth-child(2) li {
          animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.7s
            forwards;
        }
        a:nth-child(3) li {
          animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.9s
            forwards;
        }
        a:nth-child(4) li {
          animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.15s
            forwards;
        }
        li {
          margin: 2rem 0;
          span {
            display: block;
            margin-bottom: 0.5rem;
          }

          font-family: RobotoMono;
          opacity: 0;
          transform: translateY(-10px);
        }
        .nav__icons {
          width: 100%;
          margin-top: 8rem;
          a {
            margin: 0 0.5rem;
            opacity: 0;

            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.5s 1.5s
              forwards;
            svg {
              width: 20px;
              fill: var(--font);
              &:hover {
                fill: var(--cyan);
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    div {
      margin-top: 5.5rem;
    }
  }
  @media only screen and (min-width: 375px) {
    div {
      margin-top: 6rem;
      ul {
        .nav__icons {
          margin-top: 11rem;
        }
      }
    }
  }
`;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <MobileNavStyles open={open}>
      <div className="mobile__nav__inner">
        <div className="mobile__nav__inner__img">
          <Link to="/">
            <img src={Logo} alt="East Logo" />
          </Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex={0}
        >
          <div />
          <div />
        </div>
      </div>
      <MobileMenuStyles open={open}>
        <div>
          <ul>
            <Link to="/" onClick={() => setOpen(!open)}>
              <li>
                <span className="page__num">01</span> Home
              </li>
            </Link>
            <Link to="/projects" onClick={() => setOpen(!open)}>
              <li>
                <span className="page__num">02</span> Projects
              </li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(!open)}>
              <li>
                <span className="page__num">03</span> Contact
              </li>
            </Link>
            <a href="/" onClick={() => setOpen(!open)}>
              <li>
                <button type="button">Request Resume</button>
              </li>
            </a>
            <div className="nav__icons">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Spotify />
              </a>
            </div>
          </ul>
        </div>
      </MobileMenuStyles>
    </MobileNavStyles>
  );
};

const DesktopNavStyles = styled.div`
  display: none;
  width: 100%;
  position: sticky !important;
  top: 0;
  z-index: 25;
  background: rgba(22, 34, 41, 0.85);
  backdrop-filter: saturate(180%) blur(5px);
  @media only screen and (min-width: 768px) {
    display: block;
    border-bottom: solid 1px var(--font);
    .desktop__nav__wrapper {
      width: 85%;
      display: block;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      &__logo {
        width: auto;
        img {
          width: 2.5rem;
        }
      }
      &__li {
        width: 70%;
        margin: 0;
        ul {
          margin: 0.5rem 0 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          justify-content: space-between;
          a {
            align-self: center;
            li {
              margin: 0;
              font-family: RobotoMono;
              font-size: 0.9rem;
              span {
                color: var(--cyan);
              }
              button {
                font-size: 0.8rem;
                padding: 0.65rem 0.95rem;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .desktop__nav__wrapper {
      width: 70%;
      &__logo {
      }
      &__li {
        width: 60%;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .desktop__nav__wrapper {
      width: 80%;
      padding-top: 1.2rem;

      &__logo {
      }
      &__li {
        width: 40%;
        ul {
          a {
            li {
              font-size: 0.85rem;
              &:hover {
                color: var(--cyan);
              }
            }
          }
        }
      }
    }
  }
`;
const DesktopNav = () => {
  console.log('desktop nav ');
  return (
    <DesktopNavStyles>
      <div className="desktop__nav__wrapper">
        <div className="desktop__nav__wrapper__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="desktop__nav__wrapper__li">
          <ul>
            <Link to="/">
              <li>
                <span>01.</span>
                Home
              </li>
            </Link>
            <Link to="/projects">
              <li>
                <span>02.</span>
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <span>03.</span>
                Contact
              </li>
            </Link>
            <a to="/">
              <li>
                <button type="button">Request Resume</button>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </DesktopNavStyles>
  );
};

export default Nav;
