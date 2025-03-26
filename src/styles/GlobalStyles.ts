import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0a0a0a;
    color: #e0e0e0;
    line-height: 1.7;
    overflow-x: hidden;
  }

  a {
    color: #64ffda;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      color: #9effeb;
      text-decoration: none;
    }
  }

  code {
    background-color: #1a1a1a;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #64ffda;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }
`

export default GlobalStyles 