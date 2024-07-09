"use client";

import Sidemenu from "../../components/SideMenu";

export default function MyProduct() {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="px-10">My Product</div>
      </div>
    </div>
  );
}
