/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';

/* Importando estilos del Cart */
import '../css/Cart.css';


const CartPage = () => {

    return (

        <main className='cart-page'>

            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

        </main>

    )
}

export default CartPage;