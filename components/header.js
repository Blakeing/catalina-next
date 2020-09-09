import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="fixed top-0 z-30 pt-8 pl-8">
        <h1
          style={{ fontFamily: "Spinnaker", letterSpacing: ".2em" }}
          className="text-2xl leading-8 tracking-widest text-white uppercase "
        >
          <a href="/">CATALINA</a>
        </h1>
      </div>
      <nav
        style={{ backgroundColor: "#1a202c" }}
        className="top-0 z-20 h-32 bg-cover"
      >
        <div className="pt-8 pr-8 text-white">
          <ul className="relative z-50 float-right pt-1 tracking-widest nav-links">
            <li className="">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
