"use client";

import Sidemenu from "../../components/SideMenu";
import Product from "./_component/Product";

export default function MyProduct() {
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
              imgSrc="/"
              name="Product Name"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="25"
            />
            <Product
              imgSrc="/"
              name="Product Name"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="25"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
