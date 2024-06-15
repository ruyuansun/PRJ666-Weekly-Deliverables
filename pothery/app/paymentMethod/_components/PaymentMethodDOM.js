import { Button } from "../../../components/ui/button";
import { useState } from "react";

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
        <div className="flex justify-between border border-black p-5">
          <div className="w-2/12">
            
          </div>
          <div className="w-6/12">
            <div>
              <p>{props.name}</p>
              <p>Card Number: {props.cardNumber}</p>
              <p>Expires: {props.expiry}</p>
              <p>Type: {props.type}</p>
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
