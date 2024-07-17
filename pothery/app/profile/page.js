"use client";
import React, { useState, useEffect } from "react";
import Sidemenu from "../../components/SideMenu";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import ModalUpload from "../../components/ModalUpload";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from '../constants';

const bgImgWidth = 1000;
const bgImgHeight = 500;
const profPhotoWidth = 300;
const profPhotoHeight = 300;

export default function Profile() {
	const [bgImageUrl, setBgImageUrl] = useState(
		"/placeholders/background-image.jpg"
	);
	const [profPhotoUrl, setProfPhotoUrl] = useState("/placeholders/profile.jpg");
	const [bio, setBio] = useState("");
	const [email, setEmail] = useState("");
	const [currentImage, setCurrentImage] = useState("");
	const [isModalUploadClose, setIsModalUploadClose] = useState(true);
	const [message, setMessage] = useState("");

	const router = useRouter();

	useEffect(() => {
		const userEmail = localStorage.getItem("userEmail");
		if (userEmail) {
			setEmail(userEmail);
			fetchProfile(userEmail);
		}
	}, []);

 	function fetchProfile() {
		const token = localStorage.getItem('token');
	  	fetch(BACKEND_URL + "/api/profile", {
			method: "GET",
			headers: {
				"Authorization": 'Poth ' + token
			}
		})
		.then((response) => {
			// Redirect to login
			if (response.status == 403) { window.location.href = "/login"; }
			response.json()
			.then((data) => {
				console.log("Fetched profile data:", data); // Log profile data
				if (data.email) {
					setEmail(data.email);
					setBio(data.bio || "");

					let photourl = data.profile_picture
					? `https://utfs.io/f/${data.profile_picture}`
					: "/placeholders/profile.jpg";
					setProfPhotoUrl(photourl);
				} else {
					setMessage("User not found");
				}			
			});
		});
  	}

  	async function handleProfileUpdate() {
		const formData = new FormData();
		formData.append("bio", bio);
		formData.append("profile_picture", profPhotoUrl);

		const token = localStorage.getItem('token');
		const response = await fetch(BACKEND_URL + "/api/profile", {
			headers: {
				"Authorization": 'Poth ' + token
			},
		});

		const data = await response.json();
		if (data.message === "Profile updated successfully") {
			console.log("Profile updated successfully");
			setMessage("Profile updated successfully");
			
			fetchProfile();	// Fetch the updated profile data
		} else {
			setMessage("Profile update failed: " + data.message);
		}
  	}

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
			<div className="w-full px-10">
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

			{/* User bio */}
			<div className="mt-4">
				<textarea
				className="border p-2 w-full"
				placeholder="Enter your bio"
				value={bio}
				onChange={(e) => setBio(e.target.value)}
				/>
			</div>

			{/* Start a post */}
			{
			/*
			<div className="mt-4" id="construct-post">
				<Button
				className="w-full border border-black"
				onClick={handleProfileUpdate}
				>
				Update Profile
				</Button>
			</div>
			*/
			}
			

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
	</div>);
}
