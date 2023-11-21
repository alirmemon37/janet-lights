"use client";

import FormInput from "@/components/Create/FormInput";
import FormTextarea from "@/components/Create/FormTextarea";
import apiEndpoint from "@/utils/apiEndpoint";
import React, { useState } from "react";
import { ContactFormData } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

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
      <h2 className="mt-5 head_text blue_gradient">Contact Us Today</h2>
      <p className="mt-5 text-lg sm:text-xl max-w-2xl text-white desc">
        Click the button below to chat with us on WhatsApp or fill the form and
        we will get back to you as soon as possible.
      </p>
      <div className="contact_form mt-10">
        <div className="md:col-span-2 p-6 md:pb-12 lg:px-10 lg:pb-16">
          <div>
            <Link
              href="https://wa.me/"
              target="_blank"
              className="mt-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md green_gradient_btn"
            >
              <Image
                src="/assets/icons/whatsapp.svg"
                alt="whatsapp"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              Chat with us on WhatsApp
            </Link>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-2 mt-10 w-full gap-x-5 gap-y-8 contact-form"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-satoshi font-semibold text-lg text-gray-700"
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="font-satoshi font-semibold text-lg text-gray-700"
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-satoshi font-semibold text-lg text-gray-700"
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
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor="message"
                className="font-satoshi font-semibold text-lg text-gray-700"
              >
                Message
              </label>
              <FormTextarea
                name="message"
                value={formData?.message || ""}
                onChange={handleContactDataChange}
                className="w-full p-4 resize-none md:max-w-full"
                placeholder="Hi, I would like to know more about your products."
                rows={5}
                required
              />
            </div>
            <button className="blue_gradient_btn">Contact Us</button>
          </form>
        </div>
        <div className="contact_form_img"></div>
      </div>
    </section>
  );
};

export default Contact;
