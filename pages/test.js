import { Head } from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Test = () => {
  return (
    <>
      <Head title="Services | Catalina" />
      <Header />
      {/* <div
        style={{
          top: 264,
          backgroundSize: "cover",
          backgroundImage:
            "url(" +
            "http://coobo.media/clients/ingenthron/catalina/images/top-left-dots-2.png" +
            ")",
        }}
        className="absolute left-0"
      ></div>

      <img
        style={{ top: 264 }}
        className="absolute right-0"
        src="http://coobo.media/clients/ingenthron/catalina/images/top-right-dots-2.png"
      /> */}
      <div className="relative overflow-hidden page-content grid-layout">
        <div
          style={{ backgroundPositionY: "0%" }}
          className="fixed top-0 w-full h-64 text-center bg-cover people"
        >
          <div className="relative top-0 pt-32 pb-64 header-content">
            <span className="text-center">Seed/Early</span>
          </div>
        </div>

        <div className="container relative px-4 py-16 mx-auto mt-32 overflow-hidden people-holder md:py-32 sm:px-8">
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
                difficult for a management team to know where to turn to finance
                an expansion, acquisition, or even working capital growth.
                Catalina can help. We have extensive relationships with capital
                providers of all forms and can help your business partner with
                the right group for your needs. Our goal is to alleviate the
                complexity surrounding the financing demands for your business.
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
                  When a business experiences softness in the market, it can be
                  difficult for management to work with existing lenders. Not
                  only must a management team continue to operate the business
                  in a tough environment, but it must also be concerned about
                  its bank! Catalina can help. We are owned and operated by
                  former bankers and are experienced in working through
                  challenging loan situations. Whether you simply need another
                  voice in the room or need Catalina to take the lead on a full
                  restructuring process, we help companies navigate the
                  difficulties associated with loan modification and
                  restructuring.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 py-16 mx-auto md:py-32 sm:px-8">
          <div className="grid grid-flow-row gap-4 sm:gap-6 xl:grid-flow-col xl:grid-cols-12">
            <div className="w-full h-full col-span-12 xl:col-start-1 xl:col-end-7">
              <h3 className="leading-6 primary-color">Lender Management</h3>
              <h2 className="mt-6 leading-8 primary-color">Deep Expertise.</h2>
              <p className="mt-6 leading-8 primary-color">
                Management teams get pulled in many different directions. It can
                be difficult to prioritize your bank reporting over other
                operational demands of your business, which can cause tension
                between you and your lender. Catalina can help. We do the heavy
                lifting when it comes to your bank’s financial reporting,
                compliance, and borrowing base requirements. Also, we assist
                management teams in identifying performance trends, addressing
                liquidity constraints, and remaining in full compliance of all
                loan reporting requirements.
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
      <Footer />
    </>
  );
};

export default Test;
