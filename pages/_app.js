import "../styles/index.css";
import GoogleFonts from "next-google-fonts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
