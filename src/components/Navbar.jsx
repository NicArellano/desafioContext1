import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="nav">
        <div className="links">

            <Link className="link" to="home" >
            <p>Home </p>
            </Link>
            <span>|</span>
            <Link className="link" to="favorites">
            <p>Favorites</p>
            </Link>
            
        </div>

    </nav>
  )
}

export default Navbar