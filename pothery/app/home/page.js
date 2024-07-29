"use client";

import { useEffect, useState } from "react";
import Sidemenu from "../../components/SideMenu";
import Post from "./_components/Post"
import { BACKEND_URL } from '../constants';

export default function Home() {
  const [posts,setPosts] = useState([])
   // Get products
   async function getPosts() {
    const token = localStorage.getItem("token");
    console.log(token)
    const response = await fetch(BACKEND_URL + "/api/getPosts", {
      method: "GET",
      headers: {
        Authorization: "Poth " + token,
      },
    });

    if (response.status == 403) {
      window.location.href = "/login";
    }

    if (response.status == 200) {
      let productData = await response.json();
      setPosts(productData)
    } else {
      const data = await response.json();
      
      setError(data.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

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
            {posts.map(post=>{
              return <Post post={post}></Post>
            })}
        </div>
      </div>
    </div>
  );
}
