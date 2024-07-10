"use client";

import Image from "next/image";
import SideMenu from "../components/SideMenu";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <SideMenu />
      </div>
    </div>
  );
}
