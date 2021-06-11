import React from "react";
import './App.css';
import NavBar from "./components/AppNavBar";
import ItemModal from "./components/ItemModal";
import ShoppingList from "./components/ShoppingList";


function App() {
  return (
    <div className="App">
    <NavBar />
  
    <ItemModal />
    
    <ShoppingList />
    </div>
  );
}

export default App;

