import GlobalStyles from "../styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/ThemeConfig";

function MyApp({ Component, pageProps }) {
 return (
  <ThemeProvider theme={lightTheme}>
   <GlobalStyles />
   <Component {...pageProps} />
  </ThemeProvider>
 );
}

export default MyApp;
