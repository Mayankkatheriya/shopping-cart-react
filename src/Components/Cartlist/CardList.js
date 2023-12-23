import "./CardList.css";
import data from "./cartData.json";
import CardItem from "./CardItem";
import React, { useState } from "react";

const CardList = (props) => {
  let [productList, setProductList] = useState(data);

  let initialTotal = productList.reduce((sum, item) => {
    return sum + Number(item.price) * item.amount;
  }, 0);
  let [totalPrice, setTotalPrice] = useState(initialTotal.toFixed(2));
  let [inputTitle, setInputtitle] = useState("");
  let [inputAmount, setInputAmount] = useState("");
  let [inputPrice, setInputPrice] = useState("");

  // common function for the inputs onchange event
  const addItemInputs = (e, fn) => {
    fn(e.target.value);
  };


  // add a new item to the cart
  const addToCart = () => {
    //conditions checks for inputs
    if(inputTitle === "" || inputPrice === "" || inputAmount === "") {
        alert('Please fill out all fields');
        return;
    }
    if(inputPrice < 1 || inputAmount < 1 ) {
        alert('The price and amount must be greater than or equal to 1')
        return;
    }

    //create new data for the cart
    let newdataArray = [
      ...productList,
      {
        title: inputTitle,
        amount: Number(inputAmount),
        price: Number(inputPrice),
        img: "https://www.course-api.com/images/cart/phone-2.png",
        id: Date.now(),
      },
    ];
    setProductList(newdataArray);
    let updatedTotalPrice = newdataArray.reduce((sum, item) => {
      return sum + Number(item.price) * item.amount;
    }, 0);
    setTotalPrice(updatedTotalPrice.toFixed(2));
    props.updatefn(newdataArray);
    setInputAmount("");
    setInputtitle("");
    setInputPrice("");
  };

  // function for lifting up state passed as a prop in CardItem
  const updateProductList = (type, index) => {
    if (type === "incr") {
      productList[index].amount++;
    } else if (type === "decr") {
      if (productList[index].amount > 1) {
        productList[index].amount--;
      } else {
        productList.splice(index, 1);
      }
    } else {
      productList.splice(index, 1);
    }
    // Update the state with new value of product list
    props.updatefn(productList);
    let updatedTotalPrice = productList.reduce((sum, item) => {
      return sum + Number(item.price) * item.amount;
    }, 0);
    setTotalPrice(updatedTotalPrice.toFixed(2));
    setProductList([...productList]);
  };

  //clear button function
  const clearList = () => {
    setTotalPrice("0.00");
    setProductList([]);
    props.updatefn([]);
  };

  return (
    <main>
      <div className="inputs">
        <input
          placeholder="Title"
          type="text"
          value={inputTitle}
          onChange={(e) => addItemInputs(e, setInputtitle)}
        />
        <input
          placeholder="Price"
          type="number"
          value={inputPrice}
          onChange={(e) => addItemInputs(e, setInputPrice)}
        />
        <input
          placeholder="No. of items"
          type="number"
          name=""
          id=""
          value={inputAmount}
          onChange={(e) => addItemInputs(e, setInputAmount)}
        />
        <button onClick={addToCart} className="add-btn">
          Add
        </button>
      </div>
      <p style={{display: (productList.length === 0) ? "block" : "none"}}>No Items to Show</p>
      <div className="card-list">
        {productList.map((item, idx) => {
          return (
            <CardItem
              key={item.id}
              itemData={item}
              idx={idx}
              fn={updateProductList}
            />
          );
        })}
      </div>
      <div
        style={{ display: totalPrice === "0.00" ? "none" : "flex" }}
        className="item-total"
      >
        <p>Total</p>
        <h2>$ {totalPrice}</h2>
      </div>
      <button
        className="clear-btn"
        style={{ display: productList.length === 0 ? "none" : "flex" }}
        onClick={clearList}
      >
        Clear All
      </button>
    </main>
  );
};

export default CardList;
