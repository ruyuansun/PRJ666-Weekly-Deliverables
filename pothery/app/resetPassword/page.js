"use client";
import React, { useState } from "react";

import { BACKEND_URL } from '../constants';

export default function ResetPassword() {
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const email = event.target.email.value;
    const newPassword = event.target.newPassword.value;

    try {
      const response = await fetch(BACKEND_URL + "/api/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await response.json();
      if (data.message === "Password reset successful") {
        alert("Password reset successful!");
      } else {
        setError("Password reset failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during password reset.");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium mb-10">Reset Password</h1>
      <form
        className="flex flex-col w-96 mx-auto space-y-4"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="email"
          id="email"
          name="email"
          placeholder="email"
        />
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="new password"
        />
        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
