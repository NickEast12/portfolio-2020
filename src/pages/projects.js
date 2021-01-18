import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Project from '../components/Project';
import SEO from '../components/SEO';

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
      max-width: 1300px;
      width: 60%;
      h1 {
        font-size: 2.25rem;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const projectspage = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <ProjectPageStyles>
      <SEO title="Projects | Nick East Front-end Developer" />
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
    projects: allSanityProjects(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        name
        _createdAt
        slug {
          current
        }
        description
        skills
        github
        type
        live
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
