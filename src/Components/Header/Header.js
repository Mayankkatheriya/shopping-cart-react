import './Header.css'
import React ,{useState} from 'react'

const Header = () => {
    let [totalCount, setTotalCount] = useState(0)
  return (
    <header>
      <div className="nav">
        <h1><a href="/">My Cart</a></h1>
        <div className="cart-icon">
            <i className='bx bxs-cart'></i>
            <span>{totalCount}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
