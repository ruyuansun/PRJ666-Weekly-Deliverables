"use client";

import Sidemenu from "../../components/SideMenu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants";
import { CldImage } from "next-cloudinary";

export default function ShoppingCart() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(7.99);
  const [taxes, setTaxes] = useState(0);

  useEffect(() => {
    // Get all products from database and populate the products state
    getProducts()
      .then((data) => {
        // Populate products state
        data.forEach((e) => handleAddProduct(e));
        calculateTotal(data, shippingCost);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Recalculate total when shipping cost changes
    calculateTotal(products, shippingCost);
  }, [shippingCost]);

  // Function to calculate subtotal, taxes, and total
  function calculateTotal(products, shippingCost) {
    let subtotal = products.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );
    setSubtotal(subtotal);

    let taxes = subtotal * 0.13; // 13% tax
    setTaxes(taxes);

    let total = subtotal + taxes + shippingCost;
    setTotal(total);
  }

  // Get products from shopping cart
  async function getProducts() {
    const token = localStorage.getItem("token");
    const response = await fetch(BACKEND_URL + "/api/shoppingCart/getProd", {
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
      return new Promise((resolve) => {
        resolve(productData);
      });
    } else {
      const data = await response.json();
      return new Promise((reject) => {
        reject(data.message);
      });
    }
  }

  // Updates the product in the database
  async function updateProduct(product) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BACKEND_URL}/api/shoppingCart/updateProd`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        product: product,
      }),
    });

    const result = await response.json();

    return result;
  }

  // Removes the product in the database
  async function removeProduct(product) {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BACKEND_URL}/api/shoppingCart/removeProd`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        product: product,
      }),
    });

    const result = await response.json();

    return result;
  }

  // Add new product to the products state
  function handleAddProduct(newProduct) {
    setProducts((prevProducts) => [
      ...prevProducts,
      {
        id: newProduct.id,
        image: newProduct.image,
        name: newProduct.name,
        qty: newProduct.qty,
        price: newProduct.price,
        total: newProduct.price,
      },
    ]);
  }

  // Modify a product in the shopping cart
  async function handleModifyProduct(product) {
    const result = await updateProduct(product);
    console.log(`${result.affectedRows} rows have been updated.`);

    getProducts()
      .then((data) => {
        // Set the new update data to products state
        setProducts(data);
        calculateTotal(data, shippingCost);
      })
      .catch((err) => console.error(err));
  }

  // Remove a product from the shopping cart
  async function handleRemoveProduct(product) {
    const result = await removeProduct(product);
    console.log(`${result.affectedRows} rows have been removed.`);

    getProducts()
      .then((data) => {
        // Set the new update data to products state
        setProducts(data);
        calculateTotal(data, shippingCost);
      })
      .catch((err) => console.error(err));
  }

  // Redirect to checkout page
  function handleCheckout() {
    const query = new URLSearchParams({
      items: JSON.stringify(products),
      total: total.toFixed(2),
      taxes: taxes.toFixed(2),
      shippingCost: shippingCost.toFixed(2),
    }).toString();

    router.push(`/checkout?${query}`);
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />

        <div className="px-10 w-full">
          {/* Shopping cart section */}
          <section>
            <div className="flex justify-between border-b border-black">
              <h3 className="font-bold text-xl">Shopping Cart</h3>
              <p>{products.length}</p>
            </div>

            {/* List of products */}
            <table className="mt-10 w-full">
              <thead>
                <tr className="flex justify-between mb-2">
                  <th className="w-full">Product Details</th>
                  <th className="w-full">Quantity</th>
                  <th className="w-full">Price</th>
                  <th className="w-full">Total</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      onChange={handleModifyProduct}
                      onRemove={handleRemoveProduct}
                    />
                  );
                })}
              </tbody>

              <tfoot></tfoot>
            </table>
          </section>

          {/* Order summary section */}
          <section>
            <div className="border-b border-black mt-10 mb-10">
              <h3 className="font-bold text-xl">Order Summary</h3>
            </div>

            <div className="w-1/2">
              {/* Subtotal */}
              <div className="flex justify-between mb-10">
                <p className="font-bold">Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              {/* Estimated shipping */}
              <div className="mb-10">
                <label
                  htmlFor="shipping_method"
                  className="font-bold block mb-3"
                >
                  Estimated Shipping
                </label>

                <select
                  className="px-10 py-2 border rounded-lg"
                  id="shipping_method"
                  onChange={(e) => setShippingCost(parseFloat(e.target.value))}
                >
                  <option value="7.99">Standard Shipping ($7.99)</option>
                  <option value="12.99">Fast Delivery ($12.99)</option>
                </select>
              </div>

              {/* Taxes */}
              <div className="flex justify-between mb-10">
                <p className="font-bold">Taxes</p>
                <p>${taxes.toFixed(2)}</p>
              </div>

              {/* Promotion code */}
              <div className="mb-10">
                <p className="font-bold mb-3">Promotion code</p>

                <form className="flex justify-between">
                  <input
                    className="border rounded-md px-2 py-1"
                    type="text"
                    id="promotion_code"
                    name="promotion_code"
                  />
                  <button
                    className="px-3 py-1 bg-orange-300/30 rounded-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Estimated total */}
            <div className="flex justify-between mb-10 border-y border-black py-2">
              <p className="font-bold">Estimated total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </section>

          {/* Checkout */}
          <section className="flex justify-end mb-10">
            <button
              className="px-8 py-1 bg-orange-300/30 rounded-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

// Component to handle individual products in the cart
function Product({ product, onChange, onRemove }) {
  function handleDecrement() {
    let newProduct = product;

    if (newProduct.qty > 1) {
      newProduct.qty -= 1;
      onChange(newProduct);
    }
  }

  function handleIncrement() {
    let newProduct = product;
    newProduct.qty += 1;
    onChange(newProduct);
  }

  function handleOnRemove() {
    onRemove(product);
  }

  return (
    <tr className="flex justify-between mt-3" id={`product-${product.id}`}>
      {/* Product info */}
      <td className="flex w-full">
        <div>
          <CldImage
            className="bg-gray-50"
            src={product.image}
            width="120"
            height="120"
            alt={product.name}
          />
        </div>
        <div className="ml-5">
          <h5 className="font-medium mb-3">{product.name}</h5>
          <button onClick={handleOnRemove}>Remove</button>
        </div>
      </td>

      {/* Quantity */}
      <td className="w-full">
        <div className="flex justify-center">
          <button className="mr-2 text-xl" onClick={handleDecrement}>
            -
          </button>
          <p className="p-2 border">{product.qty}</p>
          <button className="ml-2 text-xl" onClick={handleIncrement}>
            +
          </button>
        </div>
      </td>

      {/* Price */}
      <td className="w-full text-center">
        <p>${product.price.toFixed(2)}</p>
      </td>

      {/* Total */}
      <td className="w-full text-center">
        <p>${(product.price * product.qty).toFixed(2)}</p>
      </td>
    </tr>
  );
}
