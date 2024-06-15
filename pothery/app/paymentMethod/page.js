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


export default function paymentMethod() {


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
          <h1 className="text-2xl mb-5">Payment Method</h1>
          <div>

          </div>
          <div className="flex content-between mt-10 gap-10">
            <Button className="bg-gray-300" onClick={handleNewDoc}>
              
            </Button>


            <Dialog>
  <DialogTrigger>Add new payment method</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


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
