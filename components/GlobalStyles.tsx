import { createGlobalStyle } from "styled-components";

// style: global styled-components resets and typography
export const GlobalStyles = createGlobalStyle`
  /* CSS reset (minimal) */
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #__next { height: 100%; }
  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, #071025 0%, #071625 100%);
    color: #e6eef8;
    line-height: 1.45;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5 { margin: 0; font-weight: 700; color: #e6eef8; }
  p { margin: 0; color: #cfe0f4; }
  a { color: inherit; text-decoration: none; }

  /* Responsive container helper */
  .cinemiq-container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: 640px) {
    body { font-size: 15px; }
  }
  @media (min-width: 1024px) {
    body { font-size: 16px; }
  }
`;

export default GlobalStyles;
