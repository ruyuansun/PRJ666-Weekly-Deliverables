"use client";

import Sidemenu from "../../components/SideMenu";
import Product from "../../components/Product";
import { useState } from "react";

export default function MyProduct() {
  const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");
  const [bgImageUrl, setBgImageUrl] = useState(
    "/placeholders/background-image.jpg"
  );

  const sampleProduct = {
    userName: "Username",
    profProfileUrl: profPhotoUrl,
    postImageUrl: bgImageUrl,
    productName: "Product name",
    productDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    productPrice: 12,
    timePosted: 0,
  };

  function handleBuyButton() {
    console.log("Hello");
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="px-10">
          {/* Uploading a new product */}
          <section className="mb-10">
            <a
              className="px-6 py-2 bg-orange-300/30 rounded-lg"
              href="/uploadProduct"
            >
              Upload Product
            </a>
          </section>

          {/* List of my products */}
          <section className="grid grid-cols-2 gap-10">
            <Product
              product={sampleProduct}
              handleBuyButton={handleBuyButton}
              actionButtonText="Remove"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
