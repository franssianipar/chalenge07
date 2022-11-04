import {  GET_ALL_DETAIL} from "../types";

const initialState={
    detail:{},
};

const detailReducer =(state=initialState , action)=>{
    switch(action.type){
        case GET_ALL_DETAIL:
            return{
                ...state,
                detail: action.payload,
                
            };
        default:
            return state;
    }
}

export default detailReducer;