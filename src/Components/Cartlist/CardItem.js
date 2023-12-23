import './Carditem.css'

import React, {useState} from 'react'

const CardItem = (props) => {

    const updateList = (e) => {
        let type = "delete"
        if(e.target.innerText=="➖"){
            type="decr"
        }
        else if(e.target.innerText=="➕"){
            type = "incr"
        }
        props.fn(type, props.idx)
    }

  return (
    <div className='item'>
      <div className="details">
        <img src={props.itemData.img} alt="" />
        <div className="name-price">
            <h2>{props.itemData.title}</h2>
            <p>{props.itemData.price}</p>
            <button onClick={updateList}><i className='bx bxs-trash'></i></button>
        </div>
      </div>
      <div className="quantity">
        <button onClick={updateList}>➕</button>
        <p className="item-count">{props.itemData.amount}</p>
        <button onClick={updateList}>➖</button>
      </div>
    </div>
  )
}

export default CardItem
