"use client";
import React, { useState } from "react";

import { BACKEND_URL } from '../constants';


export default function Login() {
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
    	console.log(BACKEND_URL);
      	const response = await fetch(BACKEND_URL + "/api/login", {
        	method: "POST",
        	headers: {
          		"Content-Type": "application/json",
        	},
        	body: JSON.stringify({ username, password }),
      	});

		const data = await response.json();

		if (response.status == 310) {
			alert("Login successful!");
			localStorage.setItem("token", data.accessToken);
			window.location.href = "/profile"; // Redirect to the homepage
		} else if(response.status == 311) {
			localStorage.setItem("uid", data.uid);
			window.location.href = "/login2fa"; // Redirect to the 2FA enable page
			alert("Login successful!");
		}  else {
			setError(data.message);
		}
    } catch (error) {
    	console.error("Error:", error);
      	setError("An error occurred during login.");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium mb-3">Sign In</h1>

      <p className="font-medium">
        Dont have an account?{" "}
        <a className="underline" href="/register">
          Sign up
        </a>
      </p>

      <p className="mb-10 font-medium">
        Forgot password?{" "}
        <a className="underline" href="/resetPassword">
          Reset password
        </a>
      </p>

      <form
        className="flex flex-col w-96 mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="text"
          id="username"
          name="username"
          placeholder="username/email"
        />

        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />

        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
