import { injectGlobal } from '@emotion/css';

export default injectGlobal`
 body {
  margin: 0;
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--body-bg-color);
  color: var(--main-text-color);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h2, p {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
