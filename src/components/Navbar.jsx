import { NavLink, useNavigate } from "react-router";
import { Home, Package, Info, Phone, Briefcase, Sparkles } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <Sparkles size={28} />
        TechCorp
      </NavLink>
      
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            <Home size={18} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>
            <Package size={18} />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            <Info size={18} />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            <Phone size={18} />
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className={({ isActive }) => isActive ? 'active' : ''}>
            <Briefcase size={18} />
            Careers
          </NavLink>
        </li>
      </ul>
      
      <button 
        className="navbar-cta"
        onClick={() => navigate('/contact', { replace: true })}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;