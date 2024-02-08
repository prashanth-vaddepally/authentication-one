// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="small-image"
    />
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Products</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
    </ul>

    <button type="button">Logout</button>
  </div>
)
export default Header
