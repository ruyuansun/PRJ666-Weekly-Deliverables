import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
              alt="avatar"
              width={500}
              height={500}
            />
          </a>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/message">Messages</Link>
        </li>
        <li>
          <Link href="/subscription">Subscription</Link>
        </li>
        <li>
          <Link href="/uploadDocument">Documents</Link>
        </li>
        <li>
          <Link href="/bank">Bank</Link>
        </li>
        <li>
          <Link href="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link href="/shoppingCart">Cart</Link>
        </li>
        <li>
          <Link href="/myProduct">Products</Link>
        </li>
      </ol>
      <div className="flex content-between mt-10 gap-10">
        <Link href="/settings">Settings</Link>
        <Link href="/help">Help</Link>
      </div>
    </div>
  );
}
