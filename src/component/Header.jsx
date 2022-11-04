import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

export default function Header(){
    const [showMyModal,setShowMyModal] =useState(false)
    const [showModal,setShowModal] =useState(false)
    const handleOnClose =()=>setShowMyModal(false)
    const handleClose =()=>setShowModal(false)
    return(
        <>
            <div>
                <Home setShowMyModal={setShowMyModal} setShowModal={setShowModal}/>
                <Login visible={showMyModal} onClose={handleOnClose}/>
                <GoogleOAuthProvider clientId="134468154099-apc6un8gp22f8dadi8tf1kf4o2fv2lnk.apps.googleusercontent.com">
                    <Register Visible={showModal} closeModal={handleClose}/>
                </GoogleOAuthProvider>
                <Movie/>
            </div>
        </>
    )
}