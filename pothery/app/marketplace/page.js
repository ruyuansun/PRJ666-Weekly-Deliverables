"use client";

import Sidemenu from "../../components/SideMenu";
import Product from "../../components/Product";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // Get products
  async function getProducts() {
    const token = localStorage.getItem("token");
    const response = await fetch(BACKEND_URL + "/api/getProd/", {
      method: "GET",
      headers: {
        Authorization: "Poth " + token,
      },
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }

    if (response.status == 200) {
      let productData = await response.json();
      setProducts(productData);
    } else {
      const data = await response.json();
      setError(data.message);
    }
  }

  // Add product to shopping cart
  async function addToShoppingCart(productId) {
    const token = localStorage.getItem("token");

    const response = await fetch(BACKEND_URL + "/api/shoppingCart/addProd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        id: productId,
        qty: 1,
      }),
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }

    if (response.status == 200) {
      const result = await response.json();
      console.log(result);
      window.location.href = "/shoppingCart";
    } else {
      const data = await response.json();
      setError(data.message);
    }
  }

  function handleBuyClick(event) {
    const productId = event.target.parentElement.parentElement.id.replace(
      "product-",
      ""
    );
    addToShoppingCart(productId);
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-full px-10 grid grid-cols-3 gap-10">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onBuy={handleBuyClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
