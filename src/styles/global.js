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

  input {
    height: 2.4rem;
    width: 100%;

    padding-left: 1rem;

    font-size: 1rem;
    
    border: none;
    border-radius: 0.25rem;
    
    transition: all 0.2s;
  }
  
  input:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem ${COLORS.BlUE_20};
  }


  button {
    background-color: ${COLORS.BLUE};
    border: none;
    border-radius: 0.25rem;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;

    padding: 0 0.5rem;
  }

  button:hover {
    cursor: pointer;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th {
    font-size: 1.2rem;
    color: ${COLORS.BG};
    background-color: ${COLORS.BLUE};

    padding: 1rem;
    text-align: left;
  }

  th:last-child {
    width: 1rem;
  }

  tr {
    background-color: ${COLORS.BlUE_20};
  }

  tr:nth-child(even) {
    background-color: ${COLORS.BlUE_40};
  }

  td {
    font-size: 1rem;
    padding: 1rem;
  }
`;
