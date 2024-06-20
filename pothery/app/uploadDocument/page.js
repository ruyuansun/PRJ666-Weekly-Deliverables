"use client";

import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import DocumentDOM from "./_components/DocumentDOM";
import React, { useState, useEffect, createRef } from "react";
import axios from 'axios'

import { BACKEND_URL } from "../constants";

export default function UploadDocument() {
	const [newDoc, setNewDoc] = useState();
	const [docList, setDocList] = useState([]);

	// Gets all documents that are associated with the current user
	useEffect(() => {
		const email = localStorage.getItem("userEmail");
		fetch(BACKEND_URL + "/api/documents/get", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email })
		})
		.then((response) => response.json())
		.then((data) => {
			setDocList(data);
		})
	}, []);

	const listDocuments = docList.map((d) => 
		<DocumentDOM
			key={d.id}
			type={d.type}
			name={d.name}
			size={d.size + "MB"}
			id={d.id}>
		</DocumentDOM>
	);

	function handleNewDoc() {
		document.getElementById("fileInput").click();
	}

	function handleFileChange(e) {
		if ( e.target.files[0]) {
			setNewDoc(e.target.files[0]);
			console.log(newDoc);

			const formData = new FormData();
			formData.append("file", newDoc);
			
			axios.post(BACKEND_URL + "/api/documents/add", formData)

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
				{listDocuments}
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
