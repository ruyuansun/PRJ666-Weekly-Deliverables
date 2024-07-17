import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { BACKEND_URL } from '../../constants';

export default function PaymentMethodDOM(props) {
  const [showDoc, setShowDoc] = useState(true);

  function handleRemove() {
    console.log(props);

    const token = localStorage.getItem('token');
    fetch(BACKEND_URL + "/api/rmPaymentMethod", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Poth ' + token
      },
      body: JSON.stringify({ id: props.id }),
    })
    .then((response) => {
      if (response.status == 403) { window.location.href = "/login"; } 
      response.json()
      .then((data) => {
        console.log("Success:", data);
        setShowDoc(false);

      })
    })
    .catch((error) => {
      console.error("Error:", error);
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
