import axios from "axios";
import {GET_ITEMS} from "../constants/actionsTypes";
//get
export const getItems=()=>dispatch=>{
    //dispatch(setItemsLoading());
    axios.get('http://localhost:8000/api/items/')
    .then(res=>dispatch({type:GET_ITEMS,payload:res.data}))
    .catch(err=>console.log(err))}


//post
export const addNewItem=(newItem)=>dispatch=>{
    axios.post('http://localhost:8000/api/items/additem',newItem)
    //.then(res=>console.log(res))
    .then(res=>dispatch(getItems()))
    .catch(err=>console.log(err))}

 //edit
export const editItem = (idItem,editedItem) => dispatch =>{
    axios.put('http://localhost:8000/api/items/editItem/'+idItem,editedItem)
    .then(res=>dispatch(getItems()))
    .catch(err=>console.log(err))}
    

//delete
export const deleteItem = (idItem) => dispatch =>{
    console.log(idItem)

    axios.delete('http://localhost:8000/api/items/deleteItem/'+idItem)
    .then(res=>dispatch(getItems()))
    .catch(err=>console.log(err))}

// //loading Items
// export const setItemsLoading=()=>{
//     return{
//         type:LOADING_ITEMS
//     }
// }