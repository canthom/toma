import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`html,
body {
  border: 0.25rem solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.black};
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.black}
  }

}

h2 {
  margin-bottom: 0.75rem;
}

p {
  color: ${({ theme }) => theme.black};
  line-height: 1.5rem;
}

p:not(:last-of-type) {
  margin-bottom: 1rem;
}

.strong--primary {
  color: ${({ theme }) => theme.primary}
}

.container {
  padding: 3rem 2rem;
}

`;

export default GlobalStyle;
