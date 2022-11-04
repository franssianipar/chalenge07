import {  GET_ALL_SEARCH,  SET_QUERY} from "../types";

const initialState={
    search:[],
    query: "",
};

const searchReducer =(state=initialState , action)=>{
    switch(action.type){
        case GET_ALL_SEARCH:
            return{
                ...state,
                search: action.payload,
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };

        default:
            return state;
    }
}

export default searchReducer;