import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Github from '../svgs/github.svg';
import Live from '../svgs/link.svg';

const ProjectStyles = styled.div`
  @media only screen and (min-width: 100px) {
    margin: 2rem 0;
    .projects__text__align {
      margin: 2rem 0 3rem 0;
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -1rem;
        width: 100%;
        left: 0;
        height: 1px;
        background-color: var(--font);
      }
      &:nth-child(odd) {
        text-align: left;
        .project__content__icons {
          margin-right: 1rem;
        }
      }
      &:nth-child(even) {
        text-align: right;
      }
    }
    .project__img {
      border-radius: 5px;
      z-index: 0;
      position: relative;
      &::after {
        background: var(--background);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 10;
        content: '';
        opacity: 0.5;
        border-radius: 5px;
      }
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        img {
          object-fit: cover !important;
          width: 100%;
        }

        border-radius: 5px;
      }
    }
    .project__content {
      h4 {
        color: var(--cyan);
        font-family: RobotoMono;
        font-weight: 300;
        margin: 1rem 0;
      }
      h2 {
        font-weight: 300;
        margin: 0.5rem 0;
        font-size: clamp(1rem, 10vw, 1.3rem);
      }
      p {
        font-weight: 300;
        color: var(--font);
        background: #0d1418;
        padding: 0.5rem;
        margin: 0.95rem 0;
        border-radius: 3px;
      }
      ul {
        list-style: none;
        display: flex;
        margin: 1rem 0;
        padding: 0;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.1rem;
        li {
          font-family: RobotoMono;
          border-radius: 2.5px;
          color: #0d1418;
          padding: 0.25rem;
          text-transform: uppercase;
          font-size: 0.8rem;
          background: var(--cyan);

          font-weight: 500;
        }
      }
      &__icons {
        a {
          padding: 0 15px;
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
  @media only screen and (min-width: 500px) {
    .projects__text__align {
      &:nth-child(odd) {
        .project__img {
          width: 85%;
          margin: 0 auto 0 0;
        }
      }
      &:nth-of-type(2n) {
        .project__img {
          width: 85%;
          margin: 0 0 0 auto;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .projects__text__align {
      &::after {
        display: none;
      }
      &:nth-child(odd) {
        position: relative;
        width: 100%;
        .project__content {
          width: 100%;
          p {
            font-size: 0.85rem;
          }

          &__wrapper {
            width: 70%;
            margin-right: auto;
          }
        }
        .project__img {
          position: absolute;
          right: 0;
          width: 70%;
          height: 100%;
          z-index: -5;
          padding: 1rem 0;
          img {
            width: 100%;
            object-fit: center !important;
          }
        }
      }
      &:nth-of-type(2n) {
        position: relative;
        width: 100%;
        .project__content {
          width: 100%;
          p {
            font-size: 0.85rem;
          }
          &::after {
            display: none;
          }
          &__wrapper {
            width: 70%;
            margin-left: auto;
          }
        }
        .project__img {
          position: absolute;
          width: 70%;
          height: 100%;
          z-index: -5;
          padding: 1rem 0;
          img {
            width: 100%;
            object-fit: center !important;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .projects__text__align {
      .project__content {
        padding: 2.5rem 0;
      }
      /* background: blue; */
    }
  }
  @media only screen and (min-width: 1280px) {
    .projects__text__align {
      &:nth-child(odd) {
        .project__img {
          padding: 2rem 0 2rem 2rem;
          .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
            img {
              object-fit: fill !important;
              width: 100%;
            }
          }
        }
        .project__content {
          &__wrapper {
            h4 {
              font-size: 1.2rem;
            }
            h2 {
              font-size: 1.6rem;
            }
            p {
              font-size: 1.1rem;
            }
            width: 60%;
            ul {
              width: 70%;
              margin-left: 0;
              margin-right: auto;
            }
          }
        }
      }
      &:nth-of-type(2n) {
        .project__img {
          padding: 2rem 2rem 2rem 0;
          .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
            img {
              object-fit: fill !important;
              width: 100%;
            }
          }
        }
        .project__content {
          h4 {
            font-size: 1.2rem;
          }
          h2 {
            font-size: 1.6rem;
          }
          p {
            font-size: 1.1rem;
          }
          &__wrapper {
            width: 60%;
            ul {
              width: 70%;
              margin-left: auto;
              margin-right: 0;
            }
          }
        }
      }
    }
    .projects__text__align:hover .project__img::after {
      opacity: 0;
    }
  }
  @media only screen and (min-width: 1440px) {
    margin: 0;
    width: 100%;
    .projects__text__align {
      width: 100%;
      &:nth-child(odd) {
        .project__content {
          width: 100%;
          &__wrapper {
            width: 65%;
            margin: 0;
          }
        }
      }
      &:nth-child(2n) {
        .project__content {
          width: 100%;

          &__wrapper {
            margin: 0 0 0 auto;
            width: 65%;
          }
        }
      }
    }
  }
`;

const Project = ({ projects }) => {
  console.log(projects);
  return (
    <ProjectStyles>
      {projects.map((project) => (
        <div className="projects__text__align" key={project.slug.current}>
          <div className="project__img">
            <Img fluid={project.image.asset.fluid} />
          </div>
          <div className="project__content">
            <div className="project__content__wrapper">
              <h4>{project.type}</h4>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <ul>
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="project__content__icons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Live />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ProjectStyles>
  );
};

export default Project;
