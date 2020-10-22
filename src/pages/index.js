import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';
import SEO from '../components/SEO';

const index = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <div>
      <SEO title="Home" />
      <HomepageHeader />
      <HomepageMiddle projects={projects} />
      {/* <HomepageBlogs /> */}
      <HomepageLower />
    </div>
  );
};

const HomepageHeaderStyles = styled.section`
  @media only screen and (min-width: 100px) {
    width: 85%;
    margin: 0 auto;
    height: 85vh;
    /* border: solid red 2px; */
    border-bottom: none;
    .home__title {
      margin: 0 auto;
      text-align: left;
      width: 100%;
      margin: 2.5rem auto 0 auto;
      h3 {
        color: var(--cyan);
        font-family: RobotoMono;
        font-weight: 200;
      }

      h1 {
        margin: 1.5rem 0;

        font-weight: 400;
        span {
          font-weight: 900;
          border-bottom: solid 1px var(--cyan);
        }
      }
      p {
        color: var(--font);
        font-weight: 300;
      }
    }
    .home__buttons {
      width: 100%;
      margin: 1.5rem auto 0 auto;
      display: flex;
      flex-direction: column;
      text-align: left;
      a {
        display: flex;
        width: 70%;
        margin-bottom: 1rem;
        button {
          flex-grow: 2;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .home__title {
      margin-top: 5rem;
    }
  }
  @media only screen and (min-width: 414px) {
    .home__title {
      margin-top: 7rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin-top: 10rem;
  }
  @media only screen and (min-width: 768px) {
    width: 60%;
    margin: 2rem auto 0 10%;
    .home__title {
      h1 {
        font-size: 3rem;
      }
    }
    .home__buttons {
      width: 50%;
      margin: 2rem auto 0 0;
    }
  }
`;
const HomepageHeader = () => (
  <HomepageHeaderStyles>
    <div className="home__title">
      <h3>Hi, I'm Nick</h3>
      <h1>
        I build <span>Websites </span> <br /> and other cool things for the web!
      </h1>
      <p>
        I'm a software engineer based in Boston, MA specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
    </div>
    <div className="home__buttons">
      <Link to="/">
        <button type="submit">Get in touch</button>
      </Link>
    </div>
  </HomepageHeaderStyles>
);

const HomepageMiddleStyles = styled.section`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 100%;
    text-align: center;

    .middle__intro {
      width: 85%;
      margin: 0 auto 5rem auto;
      h2 {
        text-align: left;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 15px;
          width: 30%;
          right: 30px;
          height: 1px;
          background-color: var(--font);
        }
      }
      p {
        text-align: left;
        color: var(--font);
        margin-bottom: 0.75rem;
        font-weight: 300;
      }
    }
    .middle__skills {
      width: 85%;
      margin: 3rem auto 1rem auto;
      h2 {
        text-align: left;
        font-size: 1.4rem;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 15px;
          width: 35%;
          right: 30px;
          height: 1px;
          background-color: var(--font);
        }
      }
      &__wrapper {
        margin: 2rem 0;
        h3 {
          text-align: left;
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--font);
        }
        &__flex {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 5px;
          div {
            margin-top: 0.5rem;
            align-items: center;

            align-self: center;
            flex-grow: 2;
            flex-basis: auto;
            padding: 0.5rem 1.5rem;
            border: solid 2px var(--cyan);

            p {
              font-family: RobotoMono;
            }
            &:nth-child(even) {
              background: var(--cyan);
            }
          }
        }
      }
    }
    .middle__projects {
      width: 85%;
      margin: 7rem auto;
      & > h2 {
        text-align: left;
        font-size: 1.4rem;
        position: relative;
      }
      &__btn {
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .middle__intro {
      h2 {
        &:after {
          width: 40%;
        }
      }
    }
    .middle__skills {
      h2 {
        &:after {
          width: 42%;
        }
      }
    }
    .middle__projects {
      & > h2 {
        position: relative;
        &:after {
          width: 15%;
          content: '';
          display: block;
          position: absolute;
          top: 15px;
          right: 30px;
          height: 1px;
          background-color: var(--font);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    .middle__intro {
      h2 {
        font-size: 1.55rem;
        &:after {
          width: 60%;
        }
      }
    }
    .middle__skills {
      h2 {
        font-size: 1.55rem;
        &:after {
          width: 62%;
        }
      }
    }
    .middle__projects {
      padding-top: 2rem;
      & > h2 {
        font-size: 1.55rem;
        margin-bottom: 2rem;
        &:after {
          width: 40%;
        }
      }
    }
  }
`;
const HomepageMiddle = ({ projects }) => (
  <HomepageMiddleStyles>
    <section className="middle__intro">
      <h2>
        <span className="page__num">01.</span>
        About me
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id
        quis provident eos.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate dicta illo mollitia, itaque temporibus beatae natus minima
        nobis, tempora doloremque? Error, obcaecati dolor at delectus soluta
        facere id minima!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
        cupiditate dicta illo mollitia, itaque temporibus beatae natus minima
        nobis.
      </p>
    </section>
    <section className="middle__skills">
      <h2>
        <span className="page__num">02.</span>
        My skills
      </h2>
      <div className="middle__skills__wrapper">
        <h3>Programming Languages</h3>
        <div className="middle__skills__wrapper__flex">
          <div>
            <p>HTML</p>
          </div>
          <div>
            <p>CSS/SASS</p>
          </div>
          <div>
            <p>JavaScript ES6</p>
          </div>
          <div>
            <p>GraphQL</p>
          </div>
        </div>
      </div>
      <div className="middle__skills__wrapper">
        <h3>Frameworks</h3>
        <div className="middle__skills__wrapper__flex">
          <div>
            <p>jQuery</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Gatsby</p>
          </div>
          <div>
            <p>Node.js</p>
          </div>
        </div>
      </div>
      <div className="middle__skills__wrapper">
        <h3>Tools </h3>
        <div className="middle__skills__wrapper__flex">
          <div>
            <p>Git</p>
          </div>
          <div>
            <p>Gulp</p>
          </div>
          <div>
            <p>Webpack</p>
          </div>
        </div>
      </div>
    </section>
    <section className="middle__projects">
      <h2>
        <span className="page__num">03.</span>
        Featured Projects
      </h2>
      <div className="middle__projects__wrapper">
        <Project projects={projects} />
      </div>
      <div className="middle__projects__btn">
        <Link to="/projects">
          <button type="button">Show More</button>
        </Link>
      </div>
    </section>
  </HomepageMiddleStyles>
);

const HomepageBlogs = () => (
  <div>
    <h2>
      <span className="page__num">04.</span>
      Blogs
    </h2>
    <h3>coming soon</h3>
  </div>
);

const HomepageContactStyles = styled.section`
  @media only screen and (min-width: 100px) {
    width: 100%;
    text-align: center;
    margin: 5rem 0 6rem 0;

    h2 {
      font-size: 1.4rem;
    }
    p {
      width: 85%;
      margin: 1.5rem auto;
      color: var(--font);
    }
    a {
      button {
        margin-top: 0.5rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin: 4rem auto 6rem auto;
  }
`;
const HomepageLower = () => (
  <HomepageContactStyles>
    <div>
      <h2>
        <span className="page__num">04.</span>
        Contact me
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        voluptatem.
      </p>
      <Link to="/contact">
        <button type="button">Send me a message</button>
      </Link>
    </div>
  </HomepageContactStyles>
);

export default index;

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProjects {
      nodes {
        name
        slug {
          current
        }
        description
        skills
        github
        live
        number
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
