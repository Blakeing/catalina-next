import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

export const Head = ({ children, title }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Spinnaker&display=swap" />
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Jura:wght@400&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </React.Fragment>
);
