import './Header.css' // import the css file for the Header component

const Header = (props) => { // declare the functional component named Header, it receives props
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

export default Header // export the Header component as the default export
