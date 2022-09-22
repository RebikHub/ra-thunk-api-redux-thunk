import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
  }

  button {
    border-radius: 4px;
    background-color: #ff3737bf;
    border: none;
    cursor: pointer;
  }

  ul > li {
    display: flex;
    border: 1px solid grey;
    width: fit-content;
    height: 40px;
    margin: 5px;
    border-radius: 3px;
  }

  form {
    position: relative;
  }
`