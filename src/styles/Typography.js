import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/Inter.ttf';
import monoFont from '../assets/fonts/RobotoMono.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Inter;
        src: url(${font});
    }
    @font-face {
        font-family: RobotoMono;
        src: url(${monoFont});
    }
    html {
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
        -webkit-font-smoothing: antialiased;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
        color: #CCD6F6;
        letter-spacing: -.1px;
    }
    p {
        line-height: 1.4;
        letter-spacing: -.1px;
    }
    a {
        color: inherit; 
        text-decoration-skip-ink: none;
    }
    .page__num {
        color: var(--cyan);
        font-family: RobotoMono;
        font-size: 1.1rem;
        margin-right: 5px;
        font-weight: 300;

    }
`;
export default Typography;
