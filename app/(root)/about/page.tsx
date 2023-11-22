import AboutService from "@/components/About/AboutService";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className="blue_gradient text-center">About Us</span>
      </h1>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
              Come here to see
              <br className="hidden lg:inline-block" />
              the lightning world with Janet
            </h1>
            <p className="mb-8 desc leading-relaxed">
              At Janet, we offer a wide range of product to cater to your
              specific needs. Our comprehensive products are designed to give
              benefits From build quality to 2 years of warranty, we have
              covered every step of the way. Our goal is to provide you with the
              product and support necessary to light up the world
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="https://source.unsplash.com/450x450/?chandelier"
              width={450}
              height={450}
              alt=""
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </div>
      <div className="text-gray-600 body-font">
        <h2 className="text text-center">
          <span className="mt-5 text-3xl font-bold leading-[1.15] text-black sm:text-5xl text-center">
            Our Services
          </span>{" "}
        </h2>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <AboutService
                serviceTitle="Installation"
                serviceDescription="Our skilled technicians are trained to install lights in various settings, including residential, commercial, and industrial spaces. We ensure safe and efficient installation, adhering to industry standards and guidelines."
                ServiceIcon={() => (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                )}
              />
              <AboutService
                serviceTitle="Light Repair and Maintenance"
                serviceDescription="If you're experiencing issues with your lights, our experienced technicians can diagnose and repair the problem. Whether it's a flickering light, faulty wiring, or any other electrical issue, we provide reliable repair services to restore your lights to optimal functionality.We also offers 2 years warranty services if there is any defect in the light"
                ServiceIcon={() => (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                )}
              />
              <AboutService
                serviceTitle="Lighting Design Consultation"
                serviceDescription={
                  "We understand that lighting plays a crucial role in creating the desired ambiance and functionality of a space. Our team of lighting design consultants can assist you in planning and designing the ideal lighting scheme for your home, office, or commercial establishment. We consider factors such as aesthetics, energy efficiency, and lighting requirements to create a tailored lighting design plan that meets your specific needs."
                }
                ServiceIcon={() => (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                )}
              />
              <AboutService
                serviceTitle="Product Selection and Sales"
                serviceDescription="As a trusted company, we offer a wide range of lights to suit different applications and preferences. Our knowledgeable staff can guide you in selecting the right light products based on factors such as brightness, color temperature, and energy efficiency. We ensure that you have access to high-quality lights from reputable manufacturers, providing you with reliable and long-lasting lighting solutions."
                ServiceIcon={() => (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              />
              <AboutService
                serviceTitle="Last but not the Least"
                serviceDescription="At Janet, we are dedicated to providing comprehensive light services that meet your lighting needs. Whether it's installation, repair, retrofitting, or lighting design consultation, we strive to deliver excellence in every aspect of our service. Contact us today to discover how we can brighten up your space with our reliable and innovative light solutions."
                ServiceIcon={() => (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                )}
                className="pb-0"
              />
            </div>
            <Image
              src="https://source.unsplash.com/450x450/?short chandelier"
              width={450}
              height={450}
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
