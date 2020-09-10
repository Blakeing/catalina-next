import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a202c" }} className="">
      <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-screen-xxl">
        <div className="text-white">
          <p>Designed by Elegant Themes | Powered by Wordpress</p>
        </div>
        <div className="flex justify-center">
          <div className="">
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="facebook-f"
              className="w-8 h-8 pb-1 text-white fill-current svg-inline--fa fa-facebook-"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </div>
          <div>
            <svg
              aria-hidden="true"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="w-8 h-8 text-white svg-inline--fa fa-linkedin-in "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
