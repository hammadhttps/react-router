import { Link } from "react-router"
import { NavLink,useNavigate } from "react-router"
const Navbar = () => {

  const navigate=useNavigate();

  return (
    <div className='navbar'>
        <img src="hh" alt="logo Image" />
        <ul>
           <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/product'> <li>Products</li></NavLink>
           <NavLink to='/about'> <li>About</li></NavLink>
           <NavLink to='/contact'> <li>Contact</li></NavLink>
        </ul>
        <button onClick={()=>navigate('/about',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar