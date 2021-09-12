import Header from '../layouts/header/header';
import Footer from '../layouts/footer/footer';
//style
import "../styles/layout.scss";
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}

export default MyApp
