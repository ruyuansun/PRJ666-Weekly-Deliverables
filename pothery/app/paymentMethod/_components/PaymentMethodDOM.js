import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function PaymentMethodDOM(props) {
  const apiEndpoint = ""; //link to backend
  const [showDoc, setShowDoc] = useState(true);

  function handleRemove() {
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentMethodId: props.paymentMethodId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setShowDoc(false);
        // Handle success (e.g., show a success message, redirect, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., show an error message)
      });
  }

  return (
    <>
      {showDoc && (
        <div className="flex justify-between border border-black p-5 mb-2">
          <div className="w-3/12">
          <Image src={`/img/${props.img}.jpg`} alt="close button" width={220} height={150}  />
      
          </div>
          <div className="w-5/12">
            <div>
              <p>{props.name}</p>
              <p>Card Number: {props.cardNumber}</p>
              <p>Expires: {props.cardExpiry}</p>
              <p>Type: {props.cardType}</p>
            </div>
          </div>
          <div className="w-4/12 text-right">
            <Button onClick={handleRemove}>Remove</Button>
          </div>
        </div>
      )}
    </>
  );
}
