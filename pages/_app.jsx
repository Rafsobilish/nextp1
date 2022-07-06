import '../styles/globals.css'
import Layout from '../components/Layout'
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";

function MyApp({ Component, pageProps }) {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      }
    },
  })
  
  return (
    <ThemeProvider theme={customTheme}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
)
}

export default MyApp
