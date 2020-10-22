import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';

const ProjectPageStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 100%;
    .projectpage__wrapper {
      width: 85%;
      margin: 2rem auto;
      p {
        color: var(--font);
        font-family: RobotoMono;
        margin-top: 1rem;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .projectpage__wrapper {
      width: 70%;
      p {
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .projectpage__wrapper {
      margin-top: 4rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .projectpage__wrapper {
      width: 60%;
    }
  }
`;

const projectspage = ({ data }) => {
  const projects = data.projects.nodes;
  console.log(projects);

  return (
    <ProjectPageStyles>
      <div className="projectpage__wrapper">
        <h1>My Projects</h1>
        <p>
          Here is a list of everything I have worked on in the last couple of
          years.
        </p>
        <Project projects={projects} />
      </div>
    </ProjectPageStyles>
  );
};

export default projectspage;

export const query = graphql`
  query projectQuery {
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
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;