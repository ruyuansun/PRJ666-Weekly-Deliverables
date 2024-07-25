import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Product({ product, onBuy }) {
  const [isBought, setIsBought] = useState(false);

  return (
    <div
      className="shadow-lg rounded-md overflow-hidden h-fit"
      id={"product-" + product.id}
    >
      <div className="flex justify-between">
        {/* User info */}
        {/* <div className="flex space-x-2">
          <div id="profile-img">
            <Image
              className="rounded-full w-10 h-10 border"
              src={userProfileUrl}
              alt="user profile"
              width={500}
              height={300}
            />
          </div>

          <div id="user-info">
            <div className="font-semibold" id="user-name"></div>
            <div className="text-xs text-gray-600" id="date-posted">
              1 min ago
            </div>
          </div>
        </div> */}

        {/* Settings button */}
        {/* <button className="cursor-pointer font-black">...</button> */}
      </div>

      {/* Product image */}
      <div className="">
        <CldImage
          className="w-full h-full object-cover"
          src={product.image}
          width="600"
          height="600"
          alt={product.name}
        />
      </div>

      {/* Product info */}
      <div className="p-7">
        <h5 className="font-bold mt-2">{product.name}</h5>
        <p className="mt-3">{product.description}</p>
        <p className="mt-2 font-medium">$ {product.price}</p>
      </div>

      <div className="px-7 pb-7">
        <button
          className="bg-orange-200 w-full rounded-full py-2 mt-3"
          onClick={(event) => onBuy(event)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
