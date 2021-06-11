
import {GET_ITEMS} from "../constants/actionsTypes";
// import {v4 as uuid} from "uuid";


const initialState={
items :[],
loading:false};

    const ItemRducer=(state=initialState,action)=>{
    
        switch(action.type){
            case GET_ITEMS:return {
                ...state,items:action.payload.item,
                loading:false
            }
           
            default:return state
        }
    }
export default ItemRducer;
