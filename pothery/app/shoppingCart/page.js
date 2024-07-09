"use client";

import Sidemenu from "../../components/SideMenu";
import Image from "next/image";

export default function ShoppingCart() {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="px-10 w-full">
          {/* Shopping cart section */}
          <section>
            <div className="flex justify-between border-b border-black">
              <h3 className="font-bold text-xl">Shopping Cart</h3>
              <p>3 items</p>
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
                <tr className="flex justify-between mt-3">
                  {/* Product info */}
                  <td className="flex justify-center w-full">
                    <div>
                      <Image
                        className="bg-gray-50"
                        src="/"
                        width={120}
                        height={120}
                        alt="product"
                      />
                    </div>
                    <div className="ml-5">
                      <h5 className="font-medium mb-3">Product Name</h5>
                      <button>Remove</button>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="w-full">
                    <div className="flex justify-center">
                      <button className="mr-2 text-xl">-</button>
                      <p className="p-2 border">2</p>
                      <button className="ml-2 text-xl">+</button>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>

                  {/* Total */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>
                </tr>

                <tr className="flex justify-between mt-3">
                  {/* Product info */}
                  <td className="flex justify-center w-full">
                    <div>
                      <Image
                        className="bg-gray-50"
                        src="/"
                        width={120}
                        height={120}
                        alt="product"
                      />
                    </div>
                    <div className="ml-5">
                      <h5 className="font-medium mb-3">Product Name</h5>
                      <button>Remove</button>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="w-full">
                    <div className="flex justify-center">
                      <button className="mr-2 text-xl">-</button>
                      <p className="p-2 border">2</p>
                      <button className="ml-2 text-xl">+</button>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>

                  {/* Total */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>
                </tr>

                <tr className="flex justify-between mt-3">
                  {/* Product info */}
                  <td className="flex justify-center w-full">
                    <div>
                      <Image
                        className="bg-gray-50"
                        src="/"
                        width={120}
                        height={120}
                        alt="product"
                      />
                    </div>
                    <div className="ml-5">
                      <h5 className="font-medium mb-3">Product Name</h5>
                      <button>Remove</button>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="w-full">
                    <div className="flex justify-center">
                      <button className="mr-2 text-xl">-</button>
                      <p className="p-2 border">2</p>
                      <button className="ml-2 text-xl">+</button>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>

                  {/* Total */}
                  <td className="w-full text-center">
                    <p>$100</p>
                  </td>
                </tr>
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
                <p>$300</p>
              </div>

              {/* Estimated shipping */}
              <div className="mb-10">
                <label for="shipping_method" className="font-bold block mb-3">
                  Estimated Shipping
                </label>

                <select
                  className="px-10 py-2 border rounded-lg"
                  id="shipping_method"
                >
                  <option value="Standard Shipping">
                    Standard Shipping ($7.99)
                  </option>
                  <option value="Fast Delivery">Fast Delivery ($12.99)</option>
                </select>
              </div>

              {/* Taxes */}
              <div className="flex justify-between mb-10">
                <p className="font-bold">Taxes</p>
                <p>$29</p>
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
              <p>$329</p>
            </div>
          </section>

          {/* Checkout */}
          <section className="flex justify-end mb-10">
            <button className="px-8 py-1 bg-orange-300/30 rounded-lg">
              Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
