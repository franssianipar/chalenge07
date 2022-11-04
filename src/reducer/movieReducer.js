import {  GET_ALL_MOVIE} from "../types";

const initialState={
    movie:[],
};

const movieReducer =(state=initialState , action)=>{
    switch(action.type){
        case GET_ALL_MOVIE:
            return{
                ...state,
                movie: action.payload,
                
            };
        default:
            return state;
    }
}

export default movieReducer;