import ModalPost from "./ModalPost";
import { useState } from "react";
import Image from "next/image";

export default function Post({
  postImgSrc,
  caption,
  likes = [],
  comments = [],
  user,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handlePostClick() {
    setIsOpen(true);
  }

  return (
    <>
      <div id="post-container">
        {/* Post's user info */}
        <div className="flex justify-between mb-4 mt-10" id="post-user">
          <div className="flex space-x-2">
            {/* TODO: fetch the user from the database and get its information
                for profile photo url, user name, and date posted.
            */}
            <div id="profile-img">profile</div>
            <div id="user-info">
              <div className="font-semibold" id="user-name">
                Joe Peralta
              </div>
              <div className="text-xs text-gray-600" id="date-posted">
                March 12, 2024
              </div>
            </div>
          </div>

          <div id="settings">
            <button>...</button>
          </div>
        </div>

        <div onClick={handlePostClick} className="cursor-pointer">
          {/* Post image */}
          <div id="post-image">
            <img
              className="object-cover h-full w-full object-bottom"
              src={postImgSrc}
            />
          </div>

          {/* Post caption */}
          <div className="mt-3 mb-4" id="post-caption">
            {caption}
          </div>
        </div>

        {/* Container for how many likes and comments on a post */}
        <div className="flex gap-8" id="post-catalogue">
          <button className="flex gap-2" id="post-likes">
            <img src="/icons/heart.png" alt="heart icon" />
            <span>{likes.length} likes</span>
          </button>
          <button className="flex gap-2" id="post-comments">
            <img src="/icons/chat-box.png" />
            <span>{comments.length} comments</span>
          </button>
        </div>
      </div>

      {isOpen ? <ModalPost setIsOpen={setIsOpen} /> : null}
    </>
  );
}
