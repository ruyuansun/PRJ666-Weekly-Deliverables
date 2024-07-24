import Image from "next/image";
import { CldImage } from "next-cloudinary";

export default function Product({ imgSrc, name, desc, price, location }) {
  return (
    <div className="shadow-lg rounded-md overflow-hidden h-fit">
      <div className="h-[20rem] overflow-hidden">
        <CldImage
          className="h-full object-cover"
          src={imgSrc}
          width="1000"
          height="1000"
          alt={name}
        />
      </div>

      <div className="p-7">
        <h5 className="font-bold mb-3">{name}</h5>
        <p className="mb-3">{desc}</p>
        <p className="mb-5 font-medium">$ {price}</p>
        <p className="mb-5 font-medium">Located in: {location}</p>
      </div>

      <div className="px-7 pb-7">
        <button className="w-full text-center px-6 py-2 bg-orange-300/30 rounded-lg">
          Remove
        </button>
      </div>
    </div>
  );
}
