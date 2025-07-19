import { Link } from "react-router"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="hh" alt="logo Image" />
        <ul>
           <Link to='/'><li>Home</li></Link>
            <Link to='/product'> <li>Products</li></Link>
           <Link to='/about'> <li>About</li></Link>
           <Link to='/contact'> <li>Contact</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar