import cart from './assets/iconos/cart-fill.svg'
import '../../index.css'

const CartWidget = () => {

    return(
        <div>
            <img src={cart} alt="cart-widget"/>
            <span class="numerito" id="numerito">0</span>
        </div>
    )
}
export default CartWidget