import Image from "next/image";
import { useState } from "react";

export default function Sidemenu() {
  const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");

  return (
    <div className="bg-gray-100 px-12 py-10">
      <ol className="leading-10">
        <li className="mb-4">
          <a href="/profile">
            <Image
              className="w-14 h-14 rounded-full"
              src={profPhotoUrl}
              width={500}
              height={500}
            />
          </a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/message">Messages</a>
        </li>
        <li>
          <a href="/subscription">Subscription</a>
        </li>
        <li>
          <a href="/uploadDocument">Documents</a>
        </li>
        <li>
          <a href="/bank">Bank</a>
        </li>
        <li>
          <a href="/marketplace">Marketplace</a>
        </li>
        <li>
          <a href="/shoppingCart">Cart</a>
        </li>
        <li>
          <a href="/myProduct">Products</a>
        </li>
      </ol>
      <div className="flex content-between mt-10 gap-10">
        <a href="/settings">Settings</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
}
