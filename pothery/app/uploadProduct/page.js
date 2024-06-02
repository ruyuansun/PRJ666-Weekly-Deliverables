'use client'

import Sidemenu from "@/components/SideMenu";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';

export default function uploadProject(){
    const [formData, setFormData] = useState({
        description: '',
        price: '',
        location: '',
        image: null,
    });
    const [previewImg,setPreviewImg] = useState("")

    function handleChange(event) {
        const { name, value, type, files } = event.target;
        if (type === "file") {
            const imageUrl = URL.createObjectURL(files[0]);
            setPreviewImg(imageUrl)
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: files[0]
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    }

    function submitHandle(event) {
        event.preventDefault();
        
        const form = new FormData();
        form.append('description', formData.description);
        form.append('price', formData.price);
        form.append('location', formData.location);
        if (formData.image) {
            form.append('image', formData.image);
        }

        // Replace with your actual API endpoint
        const apiEndpoint = 'https://yourapi.com/upload';

        fetch(apiEndpoint, {
            method: 'POST',
            body: form,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show a success message, redirect, etc.)
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        });
    }


    return (
        <div className="w-11/12 mx-auto min-h-screen">
        <div className="flex">
            <Sidemenu/>
            <div className="w-8/12">
                <form className="w-96 mx-auto mt-20" onSubmit={submitHandle}>
                    <img src={previewImg}/>
                    <Input
                        className="my-10"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <Input
                        className="mb-10"
                        type="text"
                        name="price"
                        placeholder="Enter Price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <Input
                        className="mb-10"
                        type="text"
                        name="location"
                        placeholder="Enter Your Location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <Input
                        className="mb-10"
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    <button type="submit" className="bg-[#e3d4cb] text-black px-4 py-2 rounded-lg w-full">
                        Upload
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}