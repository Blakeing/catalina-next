import React from "react";
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { NavLink } from "../components/NavLink";
import { useWindowScroll } from "react-use";
import { Head } from "../components/head";
import Footer from "../components/footer";

const Test2 = () => {
  const { scrollYProgress } = useViewportScroll();

  const { y } = useWindowScroll();

  const yPosAnim = useTransform(scrollYProgress, [0, 0.3], [0, 200]);

  const opacityAnim = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <Head title="Test 2 | Catalina" />
      <div className="fixed top-0 z-30 pt-8 pl-8 main-logo -home js-main-logo -show">
        <a
          style={{ fontFamily: "Spinnaker", letterSpacing: ".2em" }}
          className="text-2xl leading-8 tracking-widest text-black uppercase "
          href="/"
        >
          CATALINA
        </a>
      </div>
      {/*    y < 300
            ? "nav js-nav-container _container -show"
            : "nav js-nav-container _container -show -scrolled "
      */}
      <div className="fixed top-0 z-20 w-full h-32 bg-cover nav js-nav-container _container -show">
        <div className="pt-8 pr-8 text-black nav _right js-nav-right">
          {/* <ul className={ y < 300 ? "nav _nav-links -white" : "nav _nav-links -scrolled"}></ul> */}
          <ul className="relative z-50 float-right pt-1 tracking-widest nav-links">
            <li>
              <NavLink href="/about" linkName="About" />
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
      </div>
      <div className="page-content js-page-holder -home">
        <div className="hs-container">
          <div
            style={{
              display: "inherit",
              paddingTop: 160,
              paddingBottom: 128,
              backgroundImage:
                "url(" +
                "https://d33wubrfki0l68.cloudfront.net/img/97a76c037453e9facc0b0dd856c6755264a2a1bb/grid-bg-1.jpg" +
                ")",
            }}
            className="fixed top-0 w-full text-center bg-cover _header-content js-people-header-content hs-header-content"
          >
            <motion.div
              animate={{ opacity: opacityAnim, y: yPosAnim }}
              className="container relative top-0 grid grid-cols-12 mx-auto _header-content js-people-header-content hs-header-content"
            >
              <h1 className="col-span-4 leading-10 xxl:col-start-4 xxl:col-end-8 primary-color">
                Our Services
              </h1>
            </motion.div>
          </div>
          <div
            style={{ marginTop: 328 }}
            className="relative pb-0 overflow-hidden bg-white grid-layout people _content-holder js-people-content hs-page"
          >
            <div className="container relative px-4 py-16 mx-auto overflow-hidden people-holder md:py-32 sm:px-8">
              <div className="grid grid-flow-row gap-4 sm:gap-6 xl:grid-flow-col xl:grid-cols-12">
                <div className="w-full h-full col-span-12 xl:col-start-1 xl:col-end-7">
                  <h3 className="col-start-8 leading-6 primary-color ">
                    Commercial Finance Solutions
                  </h3>
                  <h2 className="mt-6 leading-8 primary-color">
                    Extensive Relationships.
                  </h2>
                  <p className="mt-6 leading-8 primary-color">
                    All growing businesses need capital. At times, it can be
                    difficult for a management team to know where to turn to
                    finance an expansion, acquisition, or even working capital
                    growth. Catalina can help. We have extensive relationships
                    with capital providers of all forms and can help your
                    business partner with the right group for your needs. Our
                    goal is to alleviate the complexity surrounding the
                    financing demands for your business.
                  </p>
                </div>
                <div className="w-full h-full col-span-12 pt-2 xl:pt-0 xl:col-start-8 xl:col-end-13 ">
                  <img
                    className="float-left xl:float-right"
                    src="https://via.placeholder.com/560x315"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-16 md:py-32 sm:px-8 full-width">
              <div className="container mx-auto">
                <div className="grid grid-flow-row gap-4 sm:gap-6 xl:order-2 xl:grid-flow-col xl:grid-cols-12">
                  <div className="order-2 w-full h-full col-span-12 pt-2 xl:pt-0 xl:order-1 xl:col-start-1 xl:col-end-6 ">
                    <img
                      className="float-left"
                      src="https://via.placeholder.com/560x315"
                    />
                  </div>
                  <div className="w-full h-full col-span-12 xl:col-start-7 xl:col-end-13">
                    <h3 className="leading-6 ">Bank Loan Restructuring</h3>
                    <h2 className="mt-6 leading-8">Proven Strategies.</h2>
                    <p className="mt-6 leading-8">
                      When a business experiences softness in the market, it can
                      be difficult for management to work with existing lenders.
                      Not only must a management team continue to operate the
                      business in a tough environment, but it must also be
                      concerned about its bank! Catalina can help. We are owned
                      and operated by former bankers and are experienced in
                      working through challenging loan situations. Whether you
                      simply need another voice in the room or need Catalina to
                      take the lead on a full restructuring process, we help
                      companies navigate the difficulties associated with loan
                      modification and restructuring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-4 py-16 mx-auto md:py-32 sm:px-8">
              <div className="grid grid-flow-row gap-4 sm:gap-6 xl:grid-flow-col xl:grid-cols-12">
                <div className="w-full h-full col-span-12 xl:col-start-1 xl:col-end-7">
                  <h3 className="leading-6 primary-color">Lender Management</h3>
                  <h2 className="mt-6 leading-8 primary-color">
                    Deep Expertise.
                  </h2>
                  <p className="mt-6 leading-8 primary-color">
                    Management teams get pulled in many different directions. It
                    can be difficult to prioritize your bank reporting over
                    other operational demands of your business, which can cause
                    tension between you and your lender. Catalina can help. We
                    do the heavy lifting when it comes to your bank’s financial
                    reporting, compliance, and borrowing base requirements.
                    Also, we assist management teams in identifying performance
                    trends, addressing liquidity constraints, and remaining in
                    full compliance of all loan reporting requirements.
                  </p>
                </div>
                <div className="w-full h-full col-span-12 pt-2 xl:pt-0 xl:col-start-8 xl:col-end-13 ">
                  <img
                    className="float-left xl:float-right"
                    src="https://via.placeholder.com/560x315"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test2;
