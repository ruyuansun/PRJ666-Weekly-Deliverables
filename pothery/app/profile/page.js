"use client";
import React from "react";
import { useState } from "react";
import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import ModalUpload from "../../components/ModalUpload";
import Post from "../../components/Post";

const bgImgWidth = 1000;
const bgImgHeight = 500;
const profPhotoWidth = 300;
const profPhotoHeight = 300;

export default function Profile() {
  // TODO: save the bgImageUrl and profPhotoUrl for the user as their
  //       background image url and profile photo url in the database.
  const [bgImageUrl, setBgImageUrl] = useState(
    "/placeholders/background-image.jpg"
  );
  const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");

  const [currentImage, setCurrentImage] = useState("");
  const [isModalUploadClose, setIsModalUploadClose] = useState(true);

  function handleProfileClick() {
    setCurrentImage("profile");
    setIsModalUploadClose(false);
  }

  function handleBackgroundClick() {
    setCurrentImage("background");
    setIsModalUploadClose(false);
  }

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />

        <div className="w-full px-10 ">
          <div
            className="w-full overflow-hidden relative"
            id="profile-background"
          >
            {/* Background photo */}
            <div id="background-photo">
              <Image
                className="cursor-pointer object-cover w-full h-full"
                src={bgImageUrl}
                width={bgImgWidth}
                height={bgImgHeight}
                onClick={handleBackgroundClick}
                alt="background photo"
              />
            </div>

            {/* Profile photo */}
            <div
              className="absolute left-14 top-1/2 rounded-full overflow-hidden w-72 h-72"
              id="profile-photo"
            >
              <Image
                className="cursor-pointer object-cover w-full h-full"
                src={profPhotoUrl}
                width={profPhotoWidth}
                height={profPhotoHeight}
                onClick={handleProfileClick}
                alt="profile photo"
              />
            </div>
          </div>

          {/* Start a post */}
          <div className="mt-12" id="construct-post">
            <Button className="w-full border border-black">Start a post</Button>
          </div>

          {/* User's news feed */}
          <div id="news-feed"></div>
        </div>

        {/* Shows modal to upload new image for either profile or background */}
        {isModalUploadClose ? null : currentImage == "profile" ? (
          <ModalUpload
            setImageUrl={setProfPhotoUrl}
            setModalUploadCloseState={setIsModalUploadClose}
          />
        ) : (
          <ModalUpload
            setImageUrl={setBgImageUrl}
            setModalUploadCloseState={setIsModalUploadClose}
          />
        )}
      </div>
    </div>
  );
}
