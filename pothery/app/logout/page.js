"use client";

import React, { useEffect } from "react";
import { BACKEND_URL } from "../constants";

export default function Logout() {
    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(BACKEND_URL + "/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Poth ' + token
            },
            body: JSON.stringify({ token: token })
        })
        .then(() => {
            window.location.href = "/login";
        })
    })

    return (
        <div className="w-11/12 mx-auto min-h-screen">
        </div>
    );
}
