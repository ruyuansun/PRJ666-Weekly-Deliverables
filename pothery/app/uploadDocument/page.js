"use client";

import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import DocumentDOM from "./_components/DocumentDOM";
import React, { useState } from "react";

export default function UploadDocument() {
  const [newDoc, setNewDoc] = useState(null);

  function handleNewDoc() {
    document.getElementById("fileInput").click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setNewDoc(file);
      const formData = new FormData();
      formData.append("document", file);

      const apiEndpoint = ""; //backend route

      fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-2xl mb-5">Documents</h1>
          <div>
            <DocumentDOM
              type="Word Document"
              docName="Resume"
              size="112kb"
              docId="123"
            />
            <DocumentDOM
              type="Word Document"
              docName="CV"
              size="291kb"
              docId="456"
            />
          </div>
          <div className="flex content-between mt-10 gap-10">
            <Button className="bg-gray-300" onClick={handleNewDoc}>
              Add new document
            </Button>
            <Button className="bg-gray-300">Back</Button>
          </div>
        </div>
      </div>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
