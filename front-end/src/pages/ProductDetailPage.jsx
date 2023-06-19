/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';

/* Importando estilos del Product Detail */
import '../css/ProductDetail.css';


const ProductDetailPage = () => {

    return (

        <main className='product-detail-page'>
            
            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

        </main>

    )
}

export default ProductDetailPage;