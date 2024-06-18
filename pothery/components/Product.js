import Image from "next/image";

export default function Product({
  userName = "Username",
  userProfileUrl,
  postImageUrl,
  productName = "Product name",
  productDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  productPrice = 0,
  timePosted = 0,
}) {
  return (
    <div>
      <div className="flex justify-between">
        {/* User info */}
        <div className="flex space-x-2">
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
            <div className="font-semibold" id="user-name">
              {userName}
            </div>
            <div className="text-xs text-gray-600" id="date-posted">
              {timePosted} min ago
            </div>
          </div>
        </div>

        {/* Settings button */}
        <button className="cursor-pointer font-black">...</button>
      </div>

      {/* Product image */}
      <div className="mt-4">
        {postImageUrl ? (
          <Image
            className="w-full rounded-md"
            src={postImageUrl}
            width={500}
            height={500}
          />
        ) : null}
      </div>

      {/* Product info */}
      <div>
        <h5 className="font-bold mt-2">{productName}</h5>
        <p className="mt-3">{productDesc}</p>
        <p className="mt-2 font-medium">$ {productPrice}</p>
        <button className="bg-orange-200 w-full rounded-full py-2 mt-3">
          Buy
        </button>
      </div>
    </div>
  );
}
