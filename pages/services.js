import { Head } from "../components/head";

function ServicesPage() {
  return (
    <>
      <Head title="Services | Catalina" />

      <header
        style={{ height: 264 }}
        className="relative flex items-center justify-center w-full h-full mb-32 bg-gray-900"
      >
        <nav className="">
          <div className="absolute top-0 left-0 ">
            <div
              style={{ fontFamily: "Spinnaker" }}
              className="pt-10 pl-10 text-2xl tracking-widest text-white uppercase"
            >
              Catalina
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="flex items-center justify-start pt-10 pr-10 text-gray-500">
              <a
                className="flex items-center block mr-5 hover:text-gray-700"
                href="https://github.com/tailwindlabs/tailwindcss"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>GitHub</title>
                  <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                </svg>
              </a>
              <a
                className="flex items-center block mr-5 hover:text-gray-700"
                href="https://twitter.com/tailwindcss"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Twitter</title>
                  <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                </svg>
              </a>
              <a
                className="flex items-center block hover:text-gray-700"
                href="/discord"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 146 146"
                >
                  <title>Discord</title>
                  <path
                    d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <h1 className="text-5xl font-bold tracking-widest text-white">
          Our Services
        </h1>
      </header>
      <main className="container px-6 mx-auto">
        <img
          className="absolute top-0 right-0"
          src="http://coobo.media/clients/ingenthron/catalina/images/top-right-dots.png"
        />
        <div className="grid grid-flow-col grid-cols-12 grid-rows-3 gap-6 gap-y-32">
          <div className="w-full h-full col-start-1 col-end-7">
            <h2 className="text-2xl leading-6 ">
              Commercial Finance Solutions
            </h2>
            <h3 className="mt-6 text-4xl font-bold leading-8">
              Extensive Relationships.
            </h3>
            <p className="mt-6 leading-8">
              All growing businesses need capital. At times, it can be difficult
              for a management team to know where to turn to finance an
              expansion, acquisition, or even working capital growth. Catalina
              can help. We have extensive relationships with capital providers
              of all forms and can help your business partner with the right
              group for your needs. Our goal is to alleviate the complexity
              surrounding the financing demands for your business.
            </p>
          </div>
          <div className="w-full h-full col-start-8 col-end-13 ">
            <img
              className="float-right"
              src="https://via.placeholder.com/560x315"
            />
          </div>
          <div className="w-full h-full col-start-1 col-end-6 ">
            <img
              className="float-left"
              src="https://via.placeholder.com/560x315"
            />
          </div>
          <div className="w-full h-full col-start-7 col-end-13 ">
            <h2 className="text-2xl leading-6">Bank Loan Restructuring</h2>
            <h3 className="mt-6 text-4xl font-bold leading-8">
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
          <div className="w-full h-full col-start-1 col-end-7 ">
            <h2 className="text-2xl leading-6 ">Lender Management</h2>
            <h3 className="mt-6 text-4xl font-bold leading-8">
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
          <div className="w-full h-full col-start-8 col-end-13 ">
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
