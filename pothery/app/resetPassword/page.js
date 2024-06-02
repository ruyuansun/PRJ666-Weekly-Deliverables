"use client";
import React, { useState } from "react";

export default function ResetPassword() {
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const currentPassword = event.target.currentPassword.value;
    const newPassword = event.target.newPassword.value;

    try {
      const response = await fetch("http://localhost:4000/api/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
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
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="current password"
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
