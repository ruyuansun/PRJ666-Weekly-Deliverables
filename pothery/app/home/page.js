"use client";

import { useEffect, useState } from "react";
import Sidemenu from "../../components/SideMenu";
import Post from "./_components/Post"
import { BACKEND_URL } from '../constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input";
import {Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button";

export default function Home() {
  const [posts,setPosts] = useState([])
  const [open, setOpen] = useState(false);
   // Get post
   async function getPosts() {
    const token = localStorage.getItem("token");

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

  //For new posts
  const [newPostImg,setNewPostImg] = useState("")
  const [newPostContent,setNewPostContent] = useState("")

  // add a post
  async function addPostHandle() {
    console.log("addPostHandle")
    const token = localStorage.getItem("token");

    const response = await fetch(BACKEND_URL + "/api/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Poth " + token,
      },
      body: JSON.stringify({
        img_url: newPostImg,
        content:newPostContent
      }),
    });

    if (response.status == 200) {
      console.log("Post has been added");
      setNewPostImg("")
      setNewPostContent("")
      setOpen(false)
    } else {
      console.log("Something is happening...");
    }
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />

        <div className="w-full ">
        <Dialog open={open} onOpenChange={setOpen}> 
        <DialogTrigger className="px-6 py-2 bg-orange-300/30 rounded-lg">Add Post</DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>New Post</DialogTitle>
            <DialogDescription>
              <Input required type="text" value={newPostImg} placeholder="(Insert url of your image url)" onChange={(e)=>{setNewPostImg(e.target.value)}} className="mb-5"/>
              <Textarea required value={newPostContent} placeholder="(Insert contents of your post)" onChange={(e)=>{setNewPostContent(e.target.value)}} className="mb-5"/>
                <div>
                  <Button  className="px-6 py-2 bg-orange-300/30 rounded-lg" onClick={addPostHandle}>Submit</Button>
                  <Button className="ml-5 px-6 py-2 bg-red-300 rounded-lg" onClick={()=>setOpen(false)}>Cancel</Button>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="px-10 grid grid-cols-2 gap-10">
            {posts.map(post=>{
              return <Post post={post}></Post>
            })}        
      </div>

        </div>
      </div>
    </div>
  );
}
