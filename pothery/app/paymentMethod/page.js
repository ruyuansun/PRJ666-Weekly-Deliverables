"use client";

import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

import { Input } from "../../components/ui/input";
import { BACKEND_URL } from '../constants';
import { useEffect } from "react";
import PaymentMethodDOM from "./_components/PaymentMethodDOM"


export default function paymentMethod() {
  const [paymentType,setPaymentType] = useState("")
  const [cardNumber,setCardNumber] = useState("")
  const [cardExpiry,setCardExpiry] = useState("")
  const [error, setError] = useState("");
  const [paymentMethodData,setPaymentMethodData] = useState([])

  //get all payment method
  async function getPaymentMethods(){
      //using dummy data for testing
      const dummyData = [{"name":"Master Card","cardNumber":"123456453","cardExpiry":"12/24","cardType":"credit","img":"mastercard"},
        {"name":"Debit Card","cardNumber":"54353453445","cardExpiry":"09/24","cardType":"debit","img":"debitcard"}]
        setPaymentMethodData(dummyData)
        return 
   
    try {
      const response = await fetch(BACKEND_URL + "/api/getPaymentMethods", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ paymentType, cardNumber,cardExpiry }),
      });

  if (response.status == 200) {
    let paymentMethodData = await response.json();
  

  } else {
    const data = await response.json();
    setError(data.message);
  }
  } catch (error) {
    console.error("Error:", error);
      setError("An error occurred during login.");
  }
}

useEffect(()=>{
  getPaymentMethods()
},[])


  async function handleSubmit(event) {
    event.preventDefault();
    setError("");


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
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-2xl mb-5">Payment Method</h1>
          <div>
            {paymentMethodData && paymentMethodData.map((method)=>{
              return <PaymentMethodDOM name={method.name} cardExpiry={method.cardExpiry} cardNumber={method.cardNumber} cardType={method.cardType} img={method.img}/>
              })}
          </div>
          <div className="flex content-between mt-10 gap-10">
          {error && <p className="text-red-500">{error}</p>}
            <Dialog>
              <DialogTrigger className="bg-gray-300 rounded-lg p-2 ">Add new payment method</DialogTrigger>
              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle className="mb-2"> Add New Payment Method</DialogTitle>
                  <DialogDescription>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-y-6">
                        <p>Payment Type:</p> 

                        <Select onValueChange={setPaymentType} required >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Payment Type..."  />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="master">Master Card</SelectItem>
                            <SelectItem value="visacard">Visa Card</SelectItem>
                            <SelectItem value="amex">Amex Card</SelectItem>
                            <SelectItem value="debit">Debit Card</SelectItem>
                          </SelectContent>
                        </Select>
                          <p>Card Number: </p><Input value={cardNumber} required onChange={(e)=>{setCardNumber(e.target.value)}}/>
                          <p>Expires (MM/YY): </p><Input value={cardExpiry} required onChange={(e)=>{setCardExpiry(e.target.value)}}/>
                        </div>
                        <Button className="mt-6 bg-[#e3d4cb] text-black px-4 py-2 rounded-lg w-full">Confirm</Button>
                    </form>

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


            <Button className="bg-gray-300">Back</Button>
          </div>
        </div>
      </div>
     
    </div>
  );
}
