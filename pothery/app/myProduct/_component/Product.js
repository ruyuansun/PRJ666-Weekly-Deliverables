import Image from "next/image";

export default function Product({ imgSrc, name, desc, price }) {
  return (
    <div>
      <Image src={imgSrc} width={500} height={500} alt={name} />
      <h5 className="font-bold mb-3">{name}</h5>
      <p className="mb-3">{desc}</p>
      <p className="mb-5 font-medium">$ {price}</p>
      <button className="w-full text-center px-6 py-2 bg-orange-300/30 rounded-lg">
        Remove
      </button>
    </div>
  );
}
