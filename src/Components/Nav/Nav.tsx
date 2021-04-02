import './Nav.css'
import ShoppingBag from '../../assets/shopping-basket.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Cart from '../Cart/Cart'

function Nav(): JSX.Element {
  const [ isCartHidden, setIsCartHidden ] = useState<boolean>(true)
  const [ cartAnimation, setCartAnimation ] = useState<string>("open-animation")
  
  const toggleHidden = (): void => {
    if(isCartHidden) {
      setCartAnimation("open-animation")
      setIsCartHidden(!isCartHidden)
    } else {
      setCartAnimation("close-animation")
      setTimeout(function(){
        setIsCartHidden(!isCartHidden)
      }, 500)
    }
  }

  return (
    <div className="nav">
      <div>
        <h1>Nicole Latifi</h1>
        <h2>Software Engineer</h2>
      </div>
      <ul className="nav-list">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <li className="nav-item">SHOP</li>
        </NavLink>
        <li className="nav-item">SIGN IN</li>
        <li className="nav-item">REGISTER</li>
        <img
          className="shopping-bag"
          src={ShoppingBag}
          alt="Shopping bag"
          onClick={toggleHidden}
        />
      </ul>
      {isCartHidden ? null : 
        <Cart 
          toggleHidden={toggleHidden}
          cartAnimation={cartAnimation}
        />
      }
    </div>
  )
}

export default Nav