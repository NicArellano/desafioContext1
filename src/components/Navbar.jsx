import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
        <div>

            <Link className="link" to="home" >
            <p>Home</p>
            </Link>
            
            <Link className="link" to="favorites">
            <p>Favorites</p>
            </Link>
            
        </div>

    </nav>
  )
}

export default Navbar