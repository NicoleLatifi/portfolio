import './Nav.css'
import ShoppingBag from '../../assets/shopping-basket.svg'

function Nav(): JSX.Element {
  return (
    <div className="nav">
      <div>
        <h1>Nicole Latifi</h1>
        <h2>Software Engineer</h2>
      </div>
      <ul className="nav-list">
        <li className="nav-item">SHOP</li>
        <li className="nav-item">SIGN IN</li>
        <li className="nav-item">REGISTER</li>
        <img
          className="shopping-bag"
          src={ShoppingBag}
          alt="Shopping bag"
        />
      </ul>
    </div>
  )
}

export default Nav