import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import{CSSTransition,TransitionGroup} from "react-transition-group";

import { getItems,deleteItem} from '../Js/actions/itemActions';

const ShoppingList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getItems())
    },[])
    const items = useSelector(state=> state.ItemReducer.items)
    const delett=(id)=>{
        console.log("id",id)
        dispatch(deleteItem(id))
    }
    
    return (
        <div>
        <Container>

<ListGroup>
    <TransitionGroup className="Shopping_List">
   
            {
              items&&  items.map(item=>  < CSSTransition key={item.id} item={item}  >  
           
        
<ListGroupItem>
    <Button className="remove_btn"
    color="danger"
     size="sm"   onClick={()=>delett(item._id)} >&times; {item.name} </Button>  
</ListGroupItem>
       </CSSTransition> )}
    </TransitionGroup>
</ListGroup>
        </Container>
        </div>
    )
}


 export default ShoppingList

