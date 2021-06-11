import React,{useState} from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {useDispatch} from "react-redux";
import{addNewItem} from "../Js/actions/itemActions"


const ItemModal = ({item}) => {
    const [name,setName]=useState(" ")
    

  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal)
     
      setName("")
    };
  const dispatch=useDispatch()

 
  const addd=()=>{
    dispatch(addNewItem({name}))}
  
  
  
    return (
        <div>
            
        
                <Button color="danger" style={{marginBottom:"2rem"}}onClick={toggle}> Add item </Button>
            
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                <Input
        value={name}
        onChange={e=>setName(e.target.value)}
          type="text"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"  onClick={addd}>Add new Item</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
//onClick={addd}
export default ItemModal;