"use client";

import Sidemenu from "../../components/SideMenu";

import React, { useState } from "react";
import { BACKEND_URL } from '../constants';
import {CheckoutUserRoleDOM} from "./_components/CheckoutUserRoleDom"
import {ShippingAddressDOM} from "./_components/ShippingAddressDOM"
import {BillingAddressDOM} from "./_components/BillingAddressDOM"
import {PaymentDOM} from "./_components/PaymentDOM"
import {OrderSummaryDOM} from "./_components/OrderSummaryDOM"


export default function checkout() {

  const [error, setError] = useState("");

  
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const formInfo = document.querySelector("#mainForm");
    var formData = new FormData(formInfo);
    console.log(formData)

    return
    try {
    	
      	const response = await fetch(BACKEND_URL + "/api/addPaymentMethod", {
        	method: "POST",
        	headers: {
          	"Content-Type": "application/json",
        	},
        	body: JSON.stringify({ paymentType, cardNumber,cardExpiry }),
      	});

		if (response.status == 310) {
			alert("Add payment Method successful!");

		} else {
			const data = await response.json();
			setError(data.message);
		}
    } catch (error) {
    	console.error("Error:", error);
      	setError("An error occurred during login.");
    }
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen" >
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-2xl mb-5">Checkout</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form className="flex" onSubmit={handleSubmit} id="mainForm">
            <div className="left-side w-1/2">
              <CheckoutUserRoleDOM/>
              <ShippingAddressDOM/>
              <BillingAddressDOM/>
              <PaymentDOM/>
            </div>
            <div className="right-side w-1/2">
              <OrderSummaryDOM/>
            </div>
           
          </form>
        </div>
      </div>
     
    </div>
  );
}