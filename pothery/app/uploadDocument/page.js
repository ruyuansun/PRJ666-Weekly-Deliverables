"use client";

import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import DocumentDOM from "./_components/DocumentDOM";
import React, { useState, useEffect, createRef } from "react";
import axios from "axios";

import { BACKEND_URL } from "../constants";

export default function UploadDocument() {
  const [docList, setDocList] = useState([]);

  function query_document_list() {
    const email = localStorage.getItem("userEmail");
    fetch(BACKEND_URL + "/api/documents/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDocList(data);
      });
  }

  function handleNewDoc() {
    document.getElementById("fileInput").click();
  }

  function handleFileChange(e) {
    if (e.target.files[0]) {
      const data = new FormData();
      data.append("file", e.target.files[0]);

      axios
        .post(BACKEND_URL + "/api/documents/add", data)
        .then((response) => {
          if (response.status == 200) {
            console.log("Success:", response);
            query_document_list();
          } else {
            console.log("Fail:", response);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  // Gets all documents that are associated with the current user
  useEffect(() => {
    query_document_list();
  }, []);

  var listDocuments;
  if (docList.length > 0) {
    listDocuments = docList.map((d) => (
      <DocumentDOM
        key={d.id}
        type={d.type}
        name={d.name}
        size={d.size + "MB"}
        id={d.id}
      ></DocumentDOM>
    ));
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-2xl mb-5">Documents</h1>
          <div>{listDocuments}</div>
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
