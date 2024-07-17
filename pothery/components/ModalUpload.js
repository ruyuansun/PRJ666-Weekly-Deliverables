import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import UploadImageButton from "./UploadImageButton";
import { BACKEND_URL } from "../app/constants";

export default function ModalUpload({ setImageUrl, setModalUploadCloseState }) {
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrlState] = useState("");

  function handleCloseClick() {
    setModalUploadCloseState(true);
  }

  async function handleUpload() {
    console.log("Uploading profile with image URL:", imageUrl); // Log image URL
    const formData = new FormData();
    formData.append("bio", bio);
    formData.append("profile_picture", imageUrl);

    const token = localStorage.getItem('token');

    const response = await fetch(BACKEND_URL + "/api/profile", {
      method: "POST",
      headers: {
				"Authorization": 'Poth ' + token
			},
      body: formData,
    });

    const data = await response.json();
    if (data.message === "Profile updated successfully") {
      setModalUploadCloseState(true);
      console.log("Profile updated successfully");
    } else {
      alert("Profile update failed: " + data.message);
    }
  }

  return (
    <div className="bg-black/40 fixed left-0 top-0 w-full h-full">
      <div className="absolute px-7 py-5">
        <Button onClick={handleCloseClick}>
          <Image src="/close.png" alt="close button" width={17} height={17} />
        </Button>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div id="change-background-image">
          <UploadImageButton className="mb-4" setState={setImageUrlState} />
          <input
            type="text"
            placeholder="Enter your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mb-4 p-2 border rounded"
          />
          <Button onClick={handleUpload}>Upload</Button>
        </div>
      </div>
    </div>
  );
}
