"use client";

import FormInput from "@/components/Create/FormInput";
import React, { useState } from "react";
import Product from "@/types/types";
import FormRadio from "@/components/Create/FormRadio";
import FormTextarea from "@/components/Create/FormTextarea";
import { AiOutlineCamera } from "react-icons/ai";
import { uploadFileToFirebaseAndGetUrl } from "@/utils/firebase";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import {
  productCategoryRadioOptions,
  productCompanyRadioOptions,
} from "@/utils/constants";
import apiEndpoint from "@/utils/apiEndpoint";

const Create = () => {
  const [formData, setFormData] = useState<Product | null>({});
  const [productImageFile, setProductImageFile] = useState<File | null>(null);
  const [productImage, setProductImage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const handleProductDataChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleProductImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setProductImageFile(event.target.files[0]);
      setProductImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleProductSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!productImageFile) {
      alert("Please upload an image");
      return;
    }

    setIsSubmitting(true);
    try {
      const productImage = await uploadFileToFirebaseAndGetUrl(
        productImageFile
      );
      const productImageUrl = productImage.uploadedToUrl;
      const response = await fetch(`${apiEndpoint}/products/new`, {
        method: "POST",
        body: JSON.stringify({ ...formData, productImageUrl }),
      });

      if (response.ok) {
        setFormData({});
        setProductImageFile(null);
        setProductImage("");
        setIsSnackbarOpen(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h2 className="head_text">
        <span className="blue_gradient">Add new product</span>
      </h2>
      <p className="desc text-left max-w-md">
        Add a new product to the Janet Lights store. Please fill out the form
        below.
      </p>
      <form
        onSubmit={handleProductSubmit}
        className="grid md:grid-cols-2 mt-10 w-full max-w-7xl gap-7 glassmorphism"
      >
        <div
          className={`flex relative min-h-[300px] border-2 border-dashed border-secondary rounded-2xl items-center justify-center bg-s-bg z-10 cursor-pointer`}
        >
          {productImage ? (
            <label htmlFor="productImage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute top-0 left-0 -z-10 object-cover min-h-[300px] h-[100%] w-[100%] cursor-pointer rounded-2xl"
                src={productImage}
                alt="PFP"
              />
            </label>
          ) : (
            <label htmlFor="productImage">
              <div className="w-[100%] h-[100%] cursor-pointer flex items-center justify-center">
                <AiOutlineCamera className="h-6 w-6" />
              </div>
            </label>
          )}
          <input
            type="file"
            id="productImage"
            placeholder="Product Image"
            onChange={handleProductImageChange}
            hidden
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-satoshi font-semibold text-lg text-gray-700"
            >
              Product Name
            </label>
            <FormInput
              id="name"
              type="text"
              value={formData?.name || ""}
              name="name"
              onChange={handleProductDataChange}
              required
            />
          </div>
          <FormRadio
            options={productCategoryRadioOptions}
            label="Product category"
            name="category"
            onChange={handleProductDataChange}
            required
          />
          <FormRadio
            options={productCompanyRadioOptions}
            label="Product company"
            name="company"
            onChange={handleProductDataChange}
            required
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="font-satoshi font-semibold text-lg text-gray-700"
            >
              Product Description
            </label>
            <FormTextarea
              id="description"
              name="description"
              onChange={handleProductDataChange}
              value={formData?.description || ""}
              className="resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="blue_gradient_btn"
          >
            <span>{isSubmitting ? "Adding" : "Add"} product</span>
          </button>
        </div>
      </form>

      {/* Backdrop when the product is being added */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
        className="flex flex-col gap-2"
      >
        <span>Adding Product</span>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Snackbar when the product is added successfully */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          variant="filled"
          onClose={() => setIsSnackbarOpen(false)}
          // onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product Added Successfully!
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Create;
