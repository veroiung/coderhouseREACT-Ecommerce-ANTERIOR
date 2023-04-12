
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <h3>Tienda INJOGG</h3>
            <div>
                <button>UNO</button>
                <button>DOS</button>
                <button>TRES</button>
            </div>
            <CartWidget />
        </nav>
    ) 
} 

export default NavBar