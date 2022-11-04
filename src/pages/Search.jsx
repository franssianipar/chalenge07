import React from "react";
import {useDispatch,useSelector } from 'react-redux';
import{useEffect } from "react";
import { getAllSearch } from "../action/searchAction";
import { useNavigate } from "react-router-dom";
import noImage from "../image/no-image.png"


export default function Search(){
    const dispatch =useDispatch();
    const navigate=useNavigate()

    const search = useSelector((state)=> state.search.search)
    const query = useSelector((state)=> state.search.query)
    
    useEffect(()=> {
        dispatch(getAllSearch(query));
    },[dispatch, query]);
    console.log(search)

    return(
        <>
            <div className=''>
                <div className=" flex mt-10 ml-5">
                    <h1 className="text-5xl font-bold  ">
                        Search Result "{query}"
                    </h1>
                </div>

                <div className="grid grid-cols-4 mt-5 w-full">
                    {
                        search?.map((movie)=>{
                            return <div key={movie.id} className="hover:cursor-pointer" onClick={() => {
                                navigate("/movie/" + movie.id)
                            }}><img src={movie?.poster_path !== null ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`: noImage} className="rounded-lg w-10/12 ml-6 mt-6" alt=""/></div>
                        })
                    }
                    
                </div>

            </div>
            
        </>
    )
}
