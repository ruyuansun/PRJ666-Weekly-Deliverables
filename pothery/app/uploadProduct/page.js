"use client";

import Sidemenu from "../../components/SideMenu";
import { Input } from "../../components/ui/input";
import React, { useState } from "react";
import { BACKEND_URL } from "../constants";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { redirect, RedirectType } from "next/navigation";

export default function uploadProduct() {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    location: "",
    image: "",
  });
  const [previewImg, setPreviewImg] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      image: previewImg,
    }));
  }

  async function submitHandle(event) {
    event.preventDefault();

    const form = new FormData();
    form.append("product_description", formData.image);
    form.append("price", formData.price);
    form.append("location", formData.location);
    form.append("name", formData.name);
    form.append("image", previewImg.toString());

    const token = localStorage.getItem("token");
    const response = await fetch(BACKEND_URL + "/api/addProd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        price: formData.price,
        location: formData.location,
        image: previewImg.toString(),
      }),
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }
    response
      .json()
      .then((data) => {
        console.log("Success:", data);
        window.location.href = "/myProduct"; // Redirect to the myProduct page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12">
          <form className="w-96 mx-auto mt-20" onSubmit={submitHandle}>
            <div className="rounded-full overflow-hidden w-1/2 h-1/2 mx-auto">
              {previewImg && (
                <CldImage
                  className="object-cover"
                  width="300"
                  height="300"
                  src={previewImg}
                />
              )}
            </div>
            <Input
              className="my-10"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              className="my-10"
              type="text"
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              className="mb-10"
              type="text"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Input
              className="mb-10"
              type="text"
              name="location"
              placeholder="Enter Your Location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <CldUploadButton
              className="w-full rounded-md py-2 px-3 bg-[#e3d4cb] mb-5"
              uploadPreset="ml_default"
              signatureEndpoint="/api/cloudinary"
              onSuccess={(results) => {
                console.log(results.info.secure_url);
                setPreviewImg(results.info.secure_url);
              }}
            >
              Choose an image
            </CldUploadButton>
            <button
              type="submit"
              className="bg-[#e3d4cb] text-black px-4 py-2 rounded-lg w-full"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
