import React from "react";

function ServicesPage() {
  return (
    <>
      <nav
        style={{ height: 264, marginBottom: 112 }}
        className="w-full bg-gray-500"
      >
        hi
      </nav>
      <main className="container px-6 mx-auto">
        <div className=" grid grid-rows-3 grid-flow-col grid-cols-12 gap-6 gap-y-32">
          <div className="h-full w-full col-start-1 col-end-7">
            <h2 className="text-2xl leading-6 font-medium">
              Commercial Finance Solutions
            </h2>
            <h3 className="mt-6 text-4xl leading-8 font-bold">
              Extensive Relationships.
            </h3>
            <p style={{ fontFamily: "Spinnaker" }} className="mt-6 leading-8">
              All growing businesses need capital. At times, it can be difficult
              for a management team to know where to turn to finance an
              expansion, acquisition, or even working capital growth. Catalina
              can help. We have extensive relationships with capital providers
              of all forms and can help your business partner with the right
              group for your needs. Our goal is to alleviate the complexity
              surrounding the financing demands for your business.
            </p>
          </div>
          <div className="h-full w-full col-start-8 col-end-13 ">
            <img
              className="float-right"
              src="https://via.placeholder.com/560x315"
            />
          </div>
          <div className="h-full w-full col-start-1 col-end-6 ">
            <img
              className="float-left"
              src="https://via.placeholder.com/560x315"
            />
          </div>
          <div className="h-full w-full col-start-7 col-end-13 ">
            <h2 className="text-2xl leading-6 font-medium">
              Bank Loan Restructuring
            </h2>
            <h3 className="mt-6 text-4xl leading-8 font-bold">
              Proven Strategies
            </h3>
            <p className="mt-6 leading-8">
              When a business experiences softness in the market, it can be
              difficult for management to work with existing lenders. Not only
              must a management team continue to operate the business in a tough
              environment, but it must also be concerned about its bank!
              Catalina can help. We are owned and operated by former bankers and
              are experienced in working through challenging loan situations.
              Whether you simply need another voice in the room or need Catalina
              to take the lead on a full restructuring process, we help
              companies navigate the difficulties associated with loan
              modification and restructuring.
            </p>
          </div>
          <div className="h-full w-full col-start-1 col-end-7 ">
            <h2 className="text-2xl leading-6 font-medium">
              Lender Management
            </h2>
            <h3 className="mt-6 text-4xl leading-8 font-bold">
              Deep Expertise.
            </h3>
            <p className="mt-6 leading-8">
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
          <div className="h-full w-full col-start-8 col-end-13 ">
            <img
              className="float-right"
              src="https://via.placeholder.com/560x315"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default ServicesPage;
