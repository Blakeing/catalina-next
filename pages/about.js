import React from 'react';

const About = () => {
  return (
    <>
      <div className="relative bg-blue-500">
        <div className="absolute z-10 w-full h-20 bg-red-500"></div>
        <div className="container mx-auto">
          <div className="grid grid-flow-col grid-cols-12 grid-rows-1 gap-6 bg-gray-900">
            <div className="w-full h-full col-start-1 col-end-7">
              <h2 className="text-2xl leading-6 text-white ">
                Commercial Finance Solutions
              </h2>
              <h3 className="mt-6 text-4xl font-bold leading-8 text-white">
                Extensive Relationships.
              </h3>
              <p className="mt-6 leading-8 text-white ">
                All growing businesses need capital. At times, it can be
                difficult for a management team to know where to turn to finance
                an expansion, acquisition, or even working capital growth.
                Catalina can help. We have extensive relationships with capital
                providers of all forms and can help your business partner with
                the right group for your needs. Our goal is to alleviate the
                complexity surrounding the financing demands for your business.
              </p>
            </div>
            <div className="w-full h-full col-start-8 col-end-13 ">
              <img
                className="float-right"
                src="https://via.placeholder.com/560x315"
              />
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-12 grid-rows-1 gap-6 bg-gray-900">
            <div className="w-full h-full col-start-1 col-end-7">
              <img
                className="float-left"
                src="https://via.placeholder.com/560x315"
              />
            </div>
            <div className="w-full h-full col-start-8 col-end-13 ">
              <h2 className="text-2xl leading-6 text-white ">
                Commercial Finance Solutions
              </h2>
              <h3 className="mt-6 text-4xl font-bold leading-8 text-white">
                Extensive Relationships.
              </h3>
              <p className="mt-6 leading-8 text-white ">
                All growing businesses need capital. At times, it can be
                difficult for a management team to know where to turn to finance
                an expansion, acquisition, or even working capital growth.
                Catalina can help. We have extensive relationships with capital
                providers of all forms and can help your business partner with
                the right group for your needs. Our goal is to alleviate the
                complexity surrounding the financing demands for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
