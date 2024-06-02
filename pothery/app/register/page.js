"use client";
import React, { useState } from "react";

export default function Register() {
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError(""); // Clear previous error message
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.message === "User registered successfully") {
        alert("Registration successful!");
      } else if (data.message === "User already exists") {
        alert("Registration failed: User already exists");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during registration.");
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-medium m-3">Create an Account</h1>
      <p className="font-medium mb-10">
        Already have an account?{" "}
        <a className="underline" href="/login">
          Sign in
        </a>
      </p>
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
          id="password"
          name="password"
          placeholder="password"
        />
        <input
          className="border rounded-md py-2 px-3 w-96"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
        />
        <button
          className="bg-black text-white border rounded-md py-2 px-4"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
