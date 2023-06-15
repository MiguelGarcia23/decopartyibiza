/* Importando componentes propios */
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarDesktop from '../navbar/NavbarDesktop';

/* Importando estilos de Products */
import '../../css/Products.css';


const ProductsPage = () => {

    return (

        <main className='products-page'>
            
            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

        </main>

    )
}

export default ProductsPage;