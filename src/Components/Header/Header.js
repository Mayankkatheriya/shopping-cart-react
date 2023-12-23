import './Header.css'

const Header = (props) => {
  return (
    <header>
      <div className="nav">
        <h1><a href="/">My Cart</a></h1>
        <div className="cart-icon">
            <i className='bx bxs-cart'></i>
            <span>{props.cartTotal}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
