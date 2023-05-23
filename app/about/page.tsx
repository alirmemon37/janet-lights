import React from 'react'

const About = () => {
  return (
    <div>
      <section className="h-60">
      <h1 className="head_text text-center">
        <span className="orange_gradient text-center">
          ABOUT US
        </span>{" "}
      </h1>
      </section>
    <section className="text-gray-600 body-font">
    {/* <h1 classNameName="text text-center">
        <span classNameName="blue_gradient text-center text-5xl">
          Our Services
        </span>{" "}
      </h1> */}
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Come here to see
          <br className="hidden lg:inline-block"/>the lightning world with Janet
        </h1>
        <p className="mb-8 leading-relaxed">At Janet, we offer a wide range of product to cater to your specific needs. Our comprehensive products are designed to give benefits From build quality to 2 years of warranty, we have covered every step of the way. Our goal is to provide you with the product and support necessary to light up the world</p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/450x450/?chandelier"/>
      </div>
    </div>
  </section>


  {/* <section classNameName="text-gray-600 body-font">
    <h1 classNameName="text text-center">
        <span classNameName="blue_gradient text-center text-5xl">
          Our Services
        </span>{" "}
      </h1> 
    <div classNameName="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div classNameName="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 classNameName="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Services offered by Janet
        </h1>
        <p classNameName="mb-8 leading-relaxed">1. Installation: Our skilled technicians are trained to install lights in various settings, including residential, commercial, and industrial spaces. We ensure safe and efficient installation, adhering to industry standards and guidelines.</p>
        <p classNameName="mb-8 leading-relaxed">2. Light Repair and Maintenance: If you're experiencing issues with your lights, our experienced technicians can diagnose and repair the problem. Whether it's a flickering light, faulty wiring, or any other electrical issue, we provide reliable repair services to restore your lights to optimal functionality.We also offers 2 years warranty services if there is any defect in the light </p>
        <p classNameName="mb-8 leading-relaxed">3. Lighting Design Consultation: We understand that lighting plays a crucial role in creating the desired ambiance and functionality of a space. Our team of lighting design consultants can assist you in planning and designing the ideal lighting scheme for your home, office, or commercial establishment. We consider factors such as aesthetics, energy efficiency, and lighting requirements to create a tailored lighting design plan that meets your specific needs.</p>
        <p classNameName="mb-8 leading-relaxed">4. Product Selection and Sales: As a trusted company, we offer a wide range of lights to suit different applications and preferences. Our knowledgeable staff can guide you in selecting the right light products based on factors such as brightness, color temperature, and energy efficiency. We ensure that you have access to high-quality lights from reputable manufacturers, providing you with reliable and long-lasting lighting solutions.</p>
        <p classNameName="mb-8 leading-relaxed">At Janet, we are dedicated to providing comprehensive light services that meet your lighting needs. Whether it's installation, repair, retrofitting, or lighting design consultation, we strive to deliver excellence in every aspect of our service. Contact us today to discover how we can brighten up your space with our reliable and innovative light solutions.</p>
      </div>
      <div classNameName="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img classNameName="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/450x450/?short chandelier"/>
      </div>
    </div>


  </section> */}


<section className="text-gray-600 body-font">
<h1 className="text text-center">
        <span className="blue_gradient text-center text-5xl">
          Our Services
        </span>{" "}
      </h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Installation</h2>
            <p className="leading-relaxed">Our skilled technicians are trained to install lights in various settings, including residential, commercial, and industrial spaces. We ensure safe and efficient installation, adhering to industry standards and guidelines.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Light Repair and Maintenance</h2>
            <p className="leading-relaxed">If you're experiencing issues with your lights, our experienced technicians can diagnose and repair the problem. Whether it's a flickering light, faulty wiring, or any other electrical issue, we provide reliable repair services to restore your lights to optimal functionality.We also offers 2 years warranty services if there is any defect in the light </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> Lighting Design Consultation</h2>
            <p className="leading-relaxed"> We understand that lighting plays a crucial role in creating the desired ambiance and functionality of a space. Our team of lighting design consultants can assist you in planning and designing the ideal lighting scheme for your home, office, or commercial establishment. We consider factors such as aesthetics, energy efficiency, and lighting requirements to create a tailored lighting design plan that meets your specific needs.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Product Selection and Sales</h2>
            <p className="leading-relaxed" >As a trusted company, we offer a wide range of lights to suit different applications and preferences. Our knowledgeable staff can guide you in selecting the right light products based on factors such as brightness, color temperature, and energy efficiency. We ensure that you have access to high-quality lights from reputable manufacturers, providing you with reliable and long-lasting lighting solutions.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Last but not the Least</h2>
            <p className="leading-relaxed">At Janet, we are dedicated to providing comprehensive light services that meet your lighting needs. Whether it's installation, repair, retrofitting, or lighting design consultation, we strive to deliver excellence in every aspect of our service. Contact us today to discover how we can brighten up your space with our reliable and innovative light solutions.</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://source.unsplash.com/450x450/?short chandelier" alt="step"/>
    </div>
  </div>
</section>




  </div>
  )
}

export default About