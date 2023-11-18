"use client";

import FormInput from "@/components/Create/FormInput";
import FormTextarea from "@/components/Create/FormTextarea";
import apiEndpoint from "@/utils/apiEndpoint";
import React, { useState } from "react";
import { ContactFormData } from "@/types/types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(
    {} as ContactFormData
  );

  const handleContactDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`${apiEndpoint}/contact/new`, {
      method: "POST",
      body: JSON.stringify({ ...formData }),
    });

    if (response.ok) {
      setFormData({ name: "", phone: "", email: "", message: "" });
      alert("Message sent successfully");
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <div className="contact_form">
        <div className="md:col-span-2 p-6 md:px-12 md:pt-8 md:pb-12 lg:px-16 lg:pt-10 lg:pb-16">
          <h2 className="mt-5 text-4xl font-bold leading-[1.15] text-white sm:text-5xl">
            Contact Us Today
          </h2>
          <p className="mt-5 text-lg sm:text-xl max-w-2xl text-white">
            Click the button below to chat with us on WhatsApp or fill the form and we will get back to you as soon as possible.
          </p>
          <div>
            <a href="https://wa.me/" target="_blank" className="mt-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600">
              <img src="/assets/icons/whatsapp.svg" alt="whatsapp" className="w-6 h-6 mr-2" />
              Chat with us on WhatsApp
            </a>
          <div></div>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 mt-10 w-full gap-x-5 gap-y-8 contact-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-satoshi font-semibold text-md text-gray-700"
              >
                Full Name
              </label>
              <FormInput
                id="name"
                type="text"
                name="name"
                onChange={handleContactDataChange}
                value={formData?.name || ""}
                placeholder="John Smith"
                required
                className="w-full p-4 border-none bg-[#fdf2e9] rounded-[9px] focus:ring-8 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="font-satoshi font-semibold text-md text-gray-700"
              >
                Phone Number
              </label>
              <FormInput
                id="phone"
                type="tel"
                name="phone"
                onChange={handleContactDataChange}
                value={formData?.phone || ""}
                placeholder="9999999999"
                pattern="[0-9]{10}"
                required
                className="w-full p-4 border-none bg-[#fdf2e9] rounded-[9px] focus:ring-8 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-satoshi font-semibold text-md text-gray-700"
              >
                Email
              </label>
              <FormInput
                id="email"
                type="email"
                name="email"
                onChange={handleContactDataChange}
                value={formData?.email || ""}
                placeholder="johnsmith@gmail.com"
                required
                className="w-full p-4 border-none bg-[#fdf2e9] rounded-[9px] focus:ring-8 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="message"
                className="font-satoshi font-semibold text-md text-gray-700"
              >
                Message
              </label>
              <FormTextarea
                name="message"
                value={formData?.message || ""}
                onChange={handleContactDataChange}
                className="w-full p-4 border-none bg-[#fdf2e9] rounded-[9px] focus:ring-8 focus:ring-yellow-500 focus:outline-none resize-none md:max-w-full"
                placeholder="Hi, I would like to know more about your products."
                rows={5}
                required
              />
            </div>
            <button className="contact_form_button">
              Contact Us
            </button>
          </form>
        </div>
        <div className="contact_form_img"></div>
      </div>
    </section>
  );
};

export default Contact;
