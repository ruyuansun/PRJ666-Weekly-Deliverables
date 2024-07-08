"use client";

import Sidemenu from "../../components/SideMenu";
import Product from "../../components/Product";
import { useState } from "react";

export default function Marketplace() {
  const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");
  const [bgImageUrl, setBgImageUrl] = useState(
    "/placeholders/background-image.jpg"
  );

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-full px-10 grid grid-cols-2 gap-10">
          <Product userProfileUrl={profPhotoUrl} postImageUrl={bgImageUrl} />
          <Product userProfileUrl={profPhotoUrl} postImageUrl={bgImageUrl} />
          <Product userProfileUrl={profPhotoUrl} postImageUrl={bgImageUrl} />
          <Product userProfileUrl={profPhotoUrl} postImageUrl={bgImageUrl} />
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
