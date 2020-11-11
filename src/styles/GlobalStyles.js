import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000;
        --title: #CCD6F6;
        --background: #162129;
        --backgroundTwo: #0d1418;
        --altBackground: #f2f6f9;
        --cyan: #1bbc9b;
        --font: rgba(255, 255, 255, 0.5);
        --header-border-bottom: inset 0 -1px 0 0 rgba(0,0,0,0.1);
        --titleFont: Inter;
        --altFont: RobotoMono;
        --maxWidth: 1300px;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        
    }
    html {
        width: 100%;
        height: 100%;

    }
    body {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        background: var(--background);
        color: var(--white);
    }
    a {
        text-decoration: none;
    }
    a[aria-current="page"] {
        color: var(--cyan);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
    button {
        background: var(--background);
        font-family: var(--altFont);
        color: var(--cyan);
        border: solid 1.5px var(--cyan);
        border-radius: 4px;
        padding: 1rem; 
        font-size: clamp(.9rem, 2.5vw, 1rem);
        cursor: pointer;
        transition: color .5s ,background .5s ease;
        &:hover {
            color: var(--background);
            background: var(--cyan);
        }
    }
    @media only screen and (min-width: 320px) {
        .cookie {
        width: 100%;
        position: fixed;
        bottom: 1rem;
        &__wrapper {
            background: var(--cyan);
            width: 85%;
            padding: 1rem 1rem;
            border-radius: 4.5px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
                color: var(--black);
                font-size: .95rem;
                margin-left: 2.5px;
            }
            button {
                padding:.65rem;
                border: solid 2px var(--cyan);

                &:hover {
                    color:var(--background);
                    background: none;
                    border: solid 2px var(--background);
                }
            }
        }
    }
    }
    @media only screen and (min-width: 375px) {
        .cookie {
      
        &__wrapper {
            
            p {
                
                font-size: 1.1rem;
                
            }
            button {
                padding:.75rem;

            }
        }
    }
    }
    @media only screen and (min-width: 414px) {
        .cookie {
      
        &__wrapper {
            padding: 1rem 1.5rem;
            p {
                
                font-size: 1.1rem;
                
            }
            button {
                padding:.75rem;

            }
        }
    }
    }
    @media only screen and (min-width: 768px) {
        .cookie {
            width: 100%;
        &__wrapper {
            max-width: 360px;
            
            padding: 1rem 1.5rem;
            p {
                
                font-size: 1.1rem;
                
            }
            button {
                padding:.75rem;

            }
        }
    }
    }
    

`;

export default GlobalStyles;
