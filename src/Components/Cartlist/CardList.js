import './CardList.css'
import data from './cartData.json'
import CardItem from './CardItem'
import React, {useState} from 'react'

const CardList = () => {
    let [productList, setProductList] = useState(data)

    const updateProductList = (type, index) => {
        console.log(type, index);
        if(type === "incr"){
            productList[index].amount++;
        }
        else if(type === "decr"){
            if(productList[index].amount > 1){
                productList[index].amount--;
            }
            else {
                productList.splice(index, 1)
            }
        }
        else {
            productList.splice(index, 1)
        }
        // Update the state with new value of product list
        setProductList([...productList])
    }
  return (
    <main>
        <div className="card-list">
            {
                productList.map((item, idx) => {
                    return (
                        <CardItem key = {item.id} itemData = {item} idx = {idx} fn = {updateProductList}/>
                    )
                })
            }
        </div>
    </main>
  )
}

export default CardList
