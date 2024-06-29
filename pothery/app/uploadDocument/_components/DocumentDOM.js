import { Button } from "../../../components/ui/button";
import { useState } from "react";
import { BACKEND_URL } from "../../constants";

export default function DocumentDOM(props) {
  const [showDoc, setShowDoc] = useState(true);

  function handleRemove() {
    const email = localStorage.getItem("userEmail");
    console.log(props);
    fetch(BACKEND_URL + "/api/documents/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
        email: email,
      }),
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
          <div className="w-4/12">
            <div>
              <p>Type: {props.type}</p>
              <p>Name: {props.name}</p>
              <p>Size: {props.size}</p>
            </div>
          </div>
          <div className="w-8/12 text-right">
            <Button onClick={handleRemove}>Remove</Button>
          </div>
        </div>
      )}
    </>
  );
}
