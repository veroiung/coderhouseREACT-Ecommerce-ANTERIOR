
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        /*<nav>
            <h3>Tienda INJOGG</h3>
            <div>
                <button>UNO</button>
                <button>DOS</button>
                <button>TRES</button>
            </div>
            <CartWidget />
        </nav>
        */
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="index.html">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a class="nav-link" href="index.html" title="inicio pagina inJOGG">Tienda inJOGG</a><span
                class="sr-only">(current)</span>
        </li>
        <li class="nav-item">

        <CartWidget />
           {/* <a class="nav-link" href="carrito.html" title="carrito de compras">
                <img src="images/iconos/cart-fill.svg"/><span class="numerito" id="numerito">0</span></a>*/}
        </li>
    </ul>
</div>
</nav>
    ) 
} 



export default NavBar