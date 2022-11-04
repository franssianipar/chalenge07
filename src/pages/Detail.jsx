import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import { getDetailById } from "../action/detailAction"
import{useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSearch,FaPlayCircle, FaStar } from "react-icons/fa"
import {  useState } from "react"
import Login from "./Login";
import Register from "./Register";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Googlelogin from "./Googlelogin";
import { useNavigate } from "react-router-dom"
import { setQuery } from "../action/searchAction";




export default function Detail(){
    const dispatch =useDispatch();
    const params = useParams();
    const navigate=useNavigate()
    const [showMyModal,setShowMyModal] =useState(false)
    const [showModal,setShowModal] =useState(false)
    const handleOnClose =()=>setShowMyModal(false)
    const handleClose =()=>setShowModal(false)
    

    const detail = useSelector((state)=> state.detail.detail)
    useEffect(()=> {
        dispatch(getDetailById(params.id));
    },[dispatch, params.id]);

    console.log(detail)
    return (
    <>
    <div className="bg-center h-full " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`, backgroundSize: "100% auto" }}>
        <div className="  w-full flex pt-2 pl-5 z-10" >
            <h1 className="text-red-600 text-5xl font-bold hover:cursor-pointer" onClick={() => {
            navigate("/")
            }}> Movielist</h1>
            <div className="border-2 flex-auto border-rose-600 rounded-full w-2/5 ml-60 flex px-5">
                <input className="focus:outline-0 w-full border-0 outline-0 h-full border-0 bg-transparent" type="text" placeholder="what do you want to watch?"  onChange={(e) => {
                                dispatch(setQuery(e.target.value))
                            }}
                            />
                            <button className="ml-auto text-white" onClick={() => {
                                navigate("/search")
                            }}>
                                <FaSearch />
                            </button>
                        </div>
                        {
                            localStorage.getItem("token") === null && 
                                <button className="ml-44 w-1/12 border-2 rounded-full border-rose-600 text-white"onClick={()=>setShowMyModal(true)}> Login</button>                                
                        }
                        {
                            localStorage.getItem("token") === null ?
                                <button className="ml-5 mr-5 bg-red-600 rounded-full w-1/12 " onClick={()=>setShowModal(true)}> Register</button>
                                :!"token"?(<Googlelogin />)
                                :(
                                    <button className="ml-5 mr-5 bg-red-600 rounded-full w-1/12 " onClick={()=> {
                                    localStorage.removeItem("token")
                                    window.location.reload()
                                }}> Logout</button>

                                )
                                
                                
                        }

                        
                        
        </div>
        <Login visible={showMyModal} onClose={handleOnClose}/>
        <GoogleOAuthProvider clientId="134468154099-apc6un8gp22f8dadi8tf1kf4o2fv2lnk.apps.googleusercontent.com">
            <Register Visible={showModal} closeModal={handleClose}/>
        </GoogleOAuthProvider>
        
        <div className=" flex flex-col h-68 w-5/12 mt-96 ">
            <div className=" ml-5 ">
                <h1 className="text-5xl text-white">
                    {
                        detail.original_title
                    }
                </h1>
            </div>
            <div className="ml-5 text-white">
                {
                    detail.overview
                }
            </div>   

            <div className=" text-white flex mt-5 ml-5">
                <FaStar size={30} className=" " style={{color:'#eab308'}}/>
                <span className="text-2xl ml-2 my-auto">{detail.popularity}</span>
            </div>

            <div className="mb-auto flex mt-5 ml-5">
                <button className="bg-red-600 rounded-full w-1/3 h-14 flex items-center" >
                <FaPlayCircle size={30} className="ml-2  text-white" />
                <span className="text-lg ml-5 text-white">Watch Trailer</span>
                </button>
            </div>
        </div>
    </div>
    </>
    )
    
}