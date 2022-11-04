import { GET_ALL_DETAIL } from "../types";
import axios from "axios";

import { API_KEY } from "../types";

export const getDetailById = (id) => async (dispatch) =>{
    try{
        const {data} = await axios.get(
            "https://api.themoviedb.org/3/movie/" + id, {
                headers: {
                    "Authorization": "Bearer " + API_KEY
                }
            });

        dispatch({
            type:GET_ALL_DETAIL,
            payload: data,
        })
        
    }catch (error){
        throw error;
    }
}