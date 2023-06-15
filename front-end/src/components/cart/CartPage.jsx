/* Importando componentes propios */
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarDesktop from '../navbar/NavbarDesktop';

/* Importando estilos del Cart */
import '../../css/Cart.css';


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