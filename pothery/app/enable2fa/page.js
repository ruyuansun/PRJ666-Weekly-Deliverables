"use client";
import IconLock from "./_components/IconLock";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { BACKEND_URL } from '../constants';

export default function Enable2fa() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [error, setError] = useState("");
  const email = localStorage.getItem("userEmail");
  const router = useRouter();

  useEffect(() => {
    async function fetchQrCode() {
      try {
        const response = await fetch(BACKEND_URL + "/api/enable2fa", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (data.qrCodeUrl) {
          setQrCodeUrl(data.qrCodeUrl);
          setTimeout(() => {
            router.push("/login2fa");
          }, 3000); // Wait 3 seconds before redirecting
        } else {
          setError("Failed to enable 2FA: " + data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while enabling 2FA.");
      }
    }

    fetchQrCode();
  }, [email, router]);

  return (
    <div className="w-4/12 m-auto">
      <h1 className="flex text-zinc-700 text-4xl justify-center items-center mb-10">
        {" "}
        <IconLock /> Enable 2-Factor Authentication
      </h1>
      <p className="text-center mb-5">
        Scan the following QR code to add your authentication app to the account
      </p>
      {error && <p className="text-red-500">{error}</p>}
      {qrCodeUrl && (
        <img
          src={qrCodeUrl}
          width={500}
          height={500}
          className="m-auto"
          alt="QR Code"
        />
      )}
    </div>
  );
}
