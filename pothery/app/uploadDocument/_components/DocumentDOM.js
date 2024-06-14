import { Button } from "../../../components/ui/button";
import { useState } from "react";

export default function DocumentDOM(props) {
  const apiEndpoint = ""; //link to backend
  const [showDoc, setShowDoc] = useState(true);

  function handleRemove() {
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doc_id: props.docId }),
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
              <p>Name: {props.docName}</p>
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
