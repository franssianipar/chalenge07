import { GET_ALL_SEARCH, SET_QUERY } from "../types";
import axios from "axios";

import { API_KEY } from "../types";

export const setQuery = (query) => async (dispatch) => {
    dispatch({
        type: SET_QUERY,
        payload: query
    })
    

    
}

export const getAllSearch = (query) => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://api.themoviedb.org/3/search/movie", {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                },                
                params: {
                    query: query
                }
            });
            
            console.log(data)

        dispatch({
            type:GET_ALL_SEARCH,
            payload: data.results,
        })
        
    }catch (error){
        throw error;
    }
}