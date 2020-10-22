import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
  @media only screen and (min-width: 100px) {
    .contact__wrapper {
      width: 85%;
      margin: 1.5rem auto;
      p {
        font-family: RobotoMono;
        margin: 1rem 0 1.5rem 0;
        color: var(--font);
      }
      .contact__wrapper__grid {
        form {
          margin: 1rem 0;
          fieldset {
            border: none;
            margin: 0;
            padding: 0;
            .form__inputs {
              background: #0d1418;
              border-radius: 3px;
              margin-bottom: 1rem;
              padding: 0.5rem 0.5rem;
              input:focus {
                outline: none;
              }
              label {
                color: var(--cyan);
                font-family: RobotoMono;
                font-weight: 300;
                padding: 0.75rem 0.25rem;
                input {
                  padding: 0.5rem;
                  width: 100%;
                  background: none;
                  border: none;
                  color: var(--font);
                }
              }
            }
            .form__textarea {
              background: #0d1418;
              border-radius: 3px;
              margin-bottom: 1rem;
              padding: 0.5rem 0.5rem;
              input:focus,
              textarea:focus {
                outline: none;
              }
              label {
                color: var(--cyan);
                font-family: RobotoMono;
                font-weight: 300;
                padding: 0.75rem 0.25rem;
                textarea {
                  padding: 0.5rem;
                  width: 100%;
                  background: none;
                  border: none;
                  color: var(--font);
                  resize: none;
                  height: 7rem;
                }
              }
            }
          }
        }
        &__email {
          text-align: center;
          margin-top: 5rem;
          button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .contact__wrapper {
      margin-top: 4rem;
    }
  }
  @media only screen and (min-width: 768px) {
    .contact__wrapper {
      margin-top: 4rem;
      width: 70%;
      h1 {
        text-align: center;
      }
      & > p {
        width: 80%;
        text-align: center;
        margin: 1.2rem auto;
      }
      .contact__wrapper__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        margin-top: 4rem;
        padding-bottom: 10rem;
        &__email {
          margin-top: 2.5rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .contact__wrapper {
      padding-bottom: 20rem;
      width: 70%;
    }
  }
  @media only screen and (min-width: 1024px) {
    .contact__wrapper {
      width: 60%;
      padding-bottom: 0rem;
      .contact__wrapper__grid {
        padding-bottom: 2rem;
      }
    }
  }
`;

const contact = () => {
  console.log('contact');
  return (
    <ContactStyles>
      <div className="contact__wrapper">
        <h1>Contact me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iure cumque ea quibusdam.
        </p>
        <div className="contact__wrapper__grid">
          <form action="">
            <fieldset>
              <div className="form__inputs">
                <label htmlFor="name">
                  What's your name{' '}
                  <input
                    placeholder="ezekiel?"
                    type="text"
                    required
                    id="name"
                  />
                </label>
              </div>
              <div className="form__inputs">
                <label htmlFor="email">
                  Whats ur email <input type="email" required />
                </label>
              </div>
              <div className="form__textarea">
                <label htmlFor="message">
                  Message <textarea required />
                </label>
              </div>
              <div className="form__btn">
                <button type="button">Submit</button>
              </div>
            </fieldset>
          </form>
          <div className="contact__wrapper__grid__email">
            <h2>Send me an email</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dignissimos eos, ipsum cupiditate aliquid quis.
            </p>
            <a href="mailto:contact@nick-east.com">
              <button type="button">Send me an email</button>
            </a>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
};

export default contact;