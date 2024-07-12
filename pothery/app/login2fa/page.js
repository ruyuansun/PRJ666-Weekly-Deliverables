"use client";
import { Label } from "../../components/ui/label";
import IconLock from "./_components/IconLock";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import { BACKEND_URL } from "../constants";

export default function Login2fa() {
	const [code, setCode] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	async function handleSubmit(event) {
		event.preventDefault();
		try {
		const uid = localStorage.getItem("uid");
		const response =  await fetch(BACKEND_URL + "/api/verify2fa", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ uid, code }),
		});

		const data = await response.json();
		if (response.status == 200) {
			alert("2FA login successful!");
			localStorage.setItem("token", data.accessToken);
			router.push("/profile"); // Change to the destination page
		} else {
			setError("2FA login failed: " + data.message);
		}
		} catch (error) {
		console.error("Error:", error);
		setError("An error occurred during 2FA verification.");
		}
	}

	function codeChangeHandle(e) {
		setCode(e.target.value);
	}

	return (
		<div className="w-4/12 m-auto">
		<h1 className="flex text-zinc-700 text-4xl justify-center items-center mb-10">
			{" "}
			<IconLock /> 2 Factor Authentication
		</h1>
		<p className="text-center mb-5">
			Enter the 6 digit code on your authenticator app associated with this
			account.
		</p>
		<Label htmlFor="code">Code: </Label>
		<Input
			type="text"
			id="code"
			placeholder="(6 digit code)"
			value={code}
			onChange={codeChangeHandle}
		/>
		{error && <p className="text-red-500">{error}</p>}
		<Button className="mt-10 w-full" onClick={handleSubmit}>
			Confirm
		</Button>
		</div>
	);
}
