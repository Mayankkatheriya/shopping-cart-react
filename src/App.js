import Header from './Components/Header/Header'
import CardList from './Components/Cartlist/CardList';
import data from './Components/Cartlist/cartData.json'
import { useState } from 'react';

// This function serves as the main component of the application.
function App() {
 // The initial state of total items in the cart is set to the total number of items in the initial data.
 let [totalitems, setTotalItems] = useState(data.length)

 // This function takes an updated list of items as input.
 // It calculates the new total amount of items by summing up the amounts of all items in the updated list.
 // This new total amount is then stored in the state variable totalitems using the setTotalItems function.
 const updatedItemList = (list) => {
    let totalItemsUpdated = list.reduce((sum, val) => {
      return sum + val.amount;
    },0)
    setTotalItems(totalItemsUpdated);
 }

 // The JSX for rendering the component is returned here.
 // The Header component is included, which displays the cart total.
 // The CardList component is also included, which displays the list of items.
 // The updatedItemList function is passed as a prop to the CardList component to handle updating the cart total.
 return (
    <>
    <Header cartTotal = {totalitems}/>
    <CardList updatefn = {updatedItemList}/>
    </>
 );
}

export default App;