"use client";

import Sidemenu from "../../components/SideMenu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "../constants";
import { ShippingAddressDOM } from "./_components/ShippingAddressDOM";
import { BillingAddressDOM } from "./_components/BillingAddressDOM";
import { PaymentDOM } from "./_components/PaymentDOM";
import { OrderSummaryDOM } from "./_components/OrderSummaryDOM";

export default function Checkout() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(7.99);
  const [taxes, setTaxes] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    unit: "",
    city: "",
    province: "",
    postalCode: "",
  });

  useEffect(() => {
    // Ensure user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    // Fetch cart information
    getCart(token)
      .then((data) => {
        setProducts(data);
        calculateTotal(data, shippingCost);
      })
      .catch((err) => console.error(err));

    // Fetch payment information
    fetch(`${BACKEND_URL}/api/getPaymentMethods`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPaymentInfo(data))
      .catch((error) => console.error("Error fetching payment info:", error));
  }, [router, shippingCost]);

  async function getCart(token) {
    const response = await fetch(`${BACKEND_URL}/api/checkout/getCart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }

    if (response.status == 200) {
      let cartData = await response.json();
      return cartData;
    } else {
      const data = await response.json();
      throw new Error(data.message);
    }
  }

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

  const handleShippingChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "useAsBillingAddress") {
      if (checked) {
        const form = document.querySelector("#mainForm");
        setBillingAddress({
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          streetAddress: form.streetAddress.value,
          unit: form.unit.value,
          city: form.city.value,
          province: form.province.value,
          postalCode: form.postalCode.value,
        });
      }
    } else {
      handleBillingChange(event);
    }
  };

  const handleBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const formInfo = document.querySelector("#mainForm");
    const formData = new FormData(formInfo);

    const orderData = {
      items: products,
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

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(BACKEND_URL + "/api/checkout/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setSuccess("Payment processed successfully!");
        // Clear the cart and redirect to the order confirmation page
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
              <ShippingAddressDOM handleShippingChange={handleShippingChange} />
              <BillingAddressDOM
                billingAddress={billingAddress}
                handleBillingChange={handleBillingChange}
              />
              <PaymentDOM paymentInfo={paymentInfo} />
            </div>
            <div className="right-side w-1/2">
              <OrderSummaryDOM
                cartItems={products}
                total={total}
                taxes={taxes}
                shippingCost={shippingCost}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
