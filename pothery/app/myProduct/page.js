"use client";

import { useEffect, useState } from "react";
import Sidemenu from "../../components/SideMenu";
import Product from "./_component/Product";
import { BACKEND_URL } from '../constants';

export default function MyProduct() {
  const [products, setProducts] = useState([])


  // Get products
  async function getProducts() {

    const token = localStorage.getItem('token');
    const response = await fetch(BACKEND_URL + "/api/getProd", {
      method: "GET",
      headers: {
        "Authorization": 'Poth ' + token
      },
    });

    if (response.status == 403) { window.location.href = "/login"; }

    if (response.status == 200) {
      let productData = await response.json();
      setProducts(productData);
    } else {
      const data = await response.json();
      setError(data.message);
    }    
  }

  useEffect(()=>{
    getProducts()
  },[])

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
          {products && products.map((method)=>{
              return <Product 
                imgSrc="/"
                name={method.product_name}
                desc={method.product_name}
                price={method.price}
                location={method.location}/>
          })}
          </section>
        </div>
      </div>
    </div>
  );
}
