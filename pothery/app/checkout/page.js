"use client";

import Sidemenu from "../../components/SideMenu";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BACKEND_URL } from "../constants";
import { CheckoutUserRoleDOM } from "./_components/CheckoutUserRoleDom";
import { ShippingAddressDOM } from "./_components/ShippingAddressDOM";
import { BillingAddressDOM } from "./_components/BillingAddressDOM";
import { PaymentDOM } from "./_components/PaymentDOM";
import { OrderSummaryDOM } from "./_components/OrderSummaryDOM";

export default function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      // Fetch payment information
      fetch(`${BACKEND_URL}/api/getPaymentMethods`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setPaymentInfo(data))
        .catch((error) => console.error("Error fetching payment info:", error));

      // Get cart items, total, taxes, and shipping cost from URL parameters
      const items = searchParams.get("items");
      const total = searchParams.get("total");
      const taxes = searchParams.get("taxes");
      const shippingCost = searchParams.get("shippingCost");
      if (items && total && taxes && shippingCost) {
        setCartItems(JSON.parse(items));
        setTotal(parseFloat(total));
        setTaxes(parseFloat(taxes));
        setShippingCost(parseFloat(shippingCost));
      }
    }
  }, [router, searchParams]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const formInfo = document.querySelector("#mainForm");
    var formData = new FormData(formInfo);

    const orderData = {
      items: cartItems,
      total,
      taxes,
      shippingCost,
      shippingAddress: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        streetAddress: formData.get("streetAddress"),
        unit: formData.get("unit"),
        city: formData.get("city"),
        province: formData.get("province"),
        postalCode: formData.get("postalCode"),
        phoneNumber: formData.get("phoneNumber"),
      },
      billingAddress: formData.get("useAsBillingAddress")
        ? {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            streetAddress: formData.get("streetAddress"),
            unit: formData.get("unit"),
            city: formData.get("city"),
            province: formData.get("province"),
            postalCode: formData.get("postalCode"),
          }
        : {
            firstName: formData.get("billing_firstName"),
            lastName: formData.get("billing_lastName"),
            streetAddress: formData.get("billing_streetAddress"),
            unit: formData.get("billing_unit"),
            city: formData.get("billing_city"),
            province: formData.get("billing_province"),
            postalCode: formData.get("billing_postalCode"),
          },
      paymentInfo: {
        paymentType: formData.get("paymentType"),
        cardNumber: formData.get("cardNumber"),
        expMonth: formData.get("expMonth"),
        expYear: formData.get("expYear"),
        securityCode: formData.get("securityCode"),
      },
    };

    try {
      const response = await fetch(BACKEND_URL + "/api/order/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(orderData),
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

  return localStorage.getItem("token") ? (
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
              <PaymentDOM paymentInfo={paymentInfo} />
            </div>
            <div className="right-side w-1/2">
              <OrderSummaryDOM
                cartItems={cartItems}
                total={total}
                taxes={taxes}
                shippingCost={shippingCost}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}
