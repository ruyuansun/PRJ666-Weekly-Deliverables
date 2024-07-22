import Image from "next/image";

export default function Product({
  product,
  handleActionButton,
  actionButtonText,
}) {
  return (
    <div>
      <div className="flex justify-between">
        {/* User info */}
        <div className="flex space-x-2">
          <div id="profile-img">
            <Image
              className="rounded-full w-10 h-10 border"
              src={product.profProfileUrl}
              alt="user profile"
              width={500}
              height={300}
            />
          </div>

          <div id="user-info">
            <div className="font-semibold" id="user-name">
              {product.userName}
            </div>
            <div className="text-xs text-gray-600" id="date-posted">
              {product.timePosted} min ago
            </div>
          </div>
        </div>

        {/* Settings button */}
        <button className="cursor-pointer font-black">...</button>
      </div>

      {/* Product image */}
      <div className="mt-4">
        {product.postImageUrl ? (
          <Image
            className="w-full rounded-md"
            src={product.postImageUrl}
            alt="product image"
            width={500}
            height={500}
          />
        ) : null}
      </div>

      {/* Product info */}
      <div>
        <h5 className="font-bold mt-2">{product.productName}</h5>
        <p className="mt-3">{product.productDesc}</p>
        <p className="mt-2 font-medium">$ {product.productPrice}</p>
        <button
          className="bg-orange-200 w-full rounded-full py-2 mt-3"
          onClick={() => handleActionButton()}
        >
          {actionButtonText}
        </button>
      </div>
    </div>
  );
}
