import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000;
        --title: #CCD6F6;
        --background: #162129;
        --backgroundTwo: #0A192F;
        --altBackground: #f2f6f9;
        --cyan: #1bbc9b;
        --font: rgba(255, 255, 255, 0.5);
        --header-border-bottom: inset 0 -1px 0 0 rgba(0,0,0,0.1);
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
        font-family: RobotoMono;
        color: var(--cyan);
        border: solid 1.5px var(--cyan);
        border-radius: 4px;
        padding: 1rem; 
        font-size: clamp(.9rem, 2.5vw, 1rem);
        cursor: pointer;
    }
   

`;

export default GlobalStyles;
