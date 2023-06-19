/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';

/* Importando estilos de Products */
import '../css/Products.css';


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