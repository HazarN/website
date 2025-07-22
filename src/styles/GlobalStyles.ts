import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);

    color: white;

    min-height: 100dvh;
}

a {
    text-decoration: none;
    color: white;
}

`;

export default GlobalStyles;
