import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import { getAllMovie} from "../action/movieAction";
import { useNavigate } from "react-router-dom"

import '../css/Movie.css'

export default function Movie(){
    const dispatch =useDispatch();
    
    const navigate=useNavigate();

    const movie = useSelector((state)=> state.movie.movie.results)

    useEffect(()=> {
        dispatch (getAllMovie());

    },[dispatch]);
    return(
        
        <>
        <div className="home ">
                <div className=" flex ml-5  " >
                    <h1 className="text-5xl font-bold " >
                        Popular Movie
                    </h1>
                    <button className="ml-auto mr-5 flex text-red-600 mt-5">
                        See All Movie
                    </button>
                </div>
                

                <div className="grid grid-cols-4 mt-5 w-full mt-10">
                    {
                        movie?.map((movie)=>{
                            return <div key={movie.id}className="hover:cursor-pointer" onClick={() => {
                                navigate("/movie/" + movie.id)
                            }}>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="rounded-lg w-10/12 ml-6 mt-6" alt=""/>
                                </div>
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}