import React from "react";
import IconLock from "./_components/IconLock";
import Image from "next/image";

export default function Enable2fa() {
  async function handleSubmit(event) {
    event.preventDefault();
    const userId = 1; // Assuming a logged-in user with ID 1

    const response = await fetch("http://localhost:4000/api/enable2fa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    if (data.message === "2FA enabled") {
      alert("2FA enabled successfully!");
    } else {
      alert("2FA enable failed: " + data.message);
    }
  }

  return (
    <div className="w-4/12 m-auto">
      <h1 className="flex text-zinc-700 text-4xl justify-center items-center mb-10">
        {" "}
        <IconLock /> Enable 2-Factor Authentication
      </h1>
      <p className="text-center mb-5">
        Scan the following QR code to add your authentication app to the account
      </p>
      <Image src="/qrcode.png" width={500} height={500} className="m-auto" />
    </div>
  );
}
