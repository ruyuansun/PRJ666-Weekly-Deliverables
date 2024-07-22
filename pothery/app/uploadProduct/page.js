"use client";

import Sidemenu from "../../components/SideMenu";
import { Input } from "../../components/ui/input";
import React, { useState } from "react";
import { BACKEND_URL } from "../constants";

export default function uploadProduct() {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    location: "",
    image: null,
  });
  const [previewImg, setPreviewImg] = useState("");

  function handleChange(event) {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewImg(imageUrl);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  async function submitHandle(event) {
    event.preventDefault();

    const form = new FormData();
    form.append("product_description", formData.description);
    form.append("price", formData.price);
    form.append("location", formData.location);
    form.append("name", formData.name);
    if (formData.image) {
      //form.append("image", formData.image);
    }

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
      }),
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }
    response
      .json()
      .then((data) => {
        console.log("Success:", data);
        // Handle success (e.g., show a success message, redirect, etc.)
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
            <h2>Upload Product</h2>
            <img src={previewImg} />
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
            <Input
              className="mb-10"
              type="file"
              name="image"
              onChange={handleChange}
              required
            />
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
