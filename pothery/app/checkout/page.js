"use client";

import Sidemenu from "../../components/SideMenu";

import React, { useState } from "react";
import { BACKEND_URL } from "../constants";
import { CheckoutUserRoleDOM } from "./_components/CheckoutUserRoleDom";
import { ShippingAddressDOM } from "./_components/ShippingAddressDOM";
import { BillingAddressDOM } from "./_components/BillingAddressDOM";
import { PaymentDOM } from "./_components/PaymentDOM";
import { OrderSummaryDOM } from "./_components/OrderSummaryDOM";

export default function checkout() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const formInfo = document.querySelector("#mainForm");
    var formData = new FormData(formInfo);

    try {
      const response = await fetch(BACKEND_URL + "/api/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Payment processed successfully!");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during payment processing.");
    }
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-2xl mb-5">Checkout</h1>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center">
              {success}
            </div>
          )}
          <form className="flex" onSubmit={handleSubmit} id="mainForm">
            <div className="left-side w-1/2">
              <CheckoutUserRoleDOM />
              <ShippingAddressDOM />
              <BillingAddressDOM />
              <PaymentDOM />
            </div>
            <div className="right-side w-1/2">
              <OrderSummaryDOM />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
