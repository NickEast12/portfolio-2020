import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Arrow from '../svgs/arrow.svg';

const MessageStyles = styled.div`
  @media only screen and (min-width: 100px) {
    position: absolute;
    background: var(--background);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    .message__wrapper {
      background: var(--altBackground);
      width: 80%;
      margin: 4.5rem auto;
      border-radius: 5px;
      padding: 1.5rem 1.5rem;
      max-width: 300px;
      &__inner {
        h1 {
          color: var(--background);
        }
        h2 {
          font-size: 1.25rem;
          color: var(--background);
          font-weight: 400;
          margin-top: 0.5rem;
        }
        p {
          display: flex;
          justify-items: center;
          align-items: center;
          justify-self: center;
          align-content: center;
          align-self: center;
          color: var(--cyan);
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 0.5rem;

          span {
            margin-right: 10px;
            svg {
              fill: var(--cyan);
              width: 25px;
              padding-top: 6px;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .message__wrapper {
      margin: 12.5rem auto;
    }
  }
`;
const Message = ({ title, message }) => (
  <MessageStyles>
    <div className="message__wrapper">
      <div className="message__wrapper__inner">
        <h1>{title}</h1>
        <h2>{message}</h2>
        <Link to="/">
          <p>
            <span>
              <Arrow />
            </span>
            Return to site
          </p>
        </Link>
      </div>
    </div>
  </MessageStyles>
);

export default Message;
