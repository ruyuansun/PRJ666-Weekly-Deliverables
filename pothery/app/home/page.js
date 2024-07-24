"use client";

import Sidemenu from "../../components/SideMenu";
import { useState } from "react";
import Post from "./_components/Post"

export default function Home() {
  const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");
  const [bgImageUrl, setBgImageUrl] = useState(
    "/placeholders/background-image.jpg"
  );

  const dummy_data = [
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {'profile_img':profPhotoUrl,"userName":"John","post_img":bgImageUrl,"likes":Math.floor(Math.random() * 100),"comments":Math.floor(Math.random() * 100),"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  ]

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-full px-10 grid grid-cols-2 gap-10">
            {dummy_data.map(post=>{
              return <Post post={post}></Post>
            })}
        </div>
      </div>
    </div>
  );
}
