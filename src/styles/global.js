import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  a {
    text-decoration: none;
  }
`

// Poppins, --apple-system, Helvetica Neue, Helvetica, Arial, sans-serif
