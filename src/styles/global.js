import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

export default createGlobalStyle`

* {
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }
body {
    color: ${COLORS.PRIMARY};
    background-color: ${COLORS.BG};
  }
  body, html, #root {
      height: 100%;
    }
  #root {
      display: flex;
      flex-direction: column;
      flex: 1;
  }
  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1rem;
  }
`;
