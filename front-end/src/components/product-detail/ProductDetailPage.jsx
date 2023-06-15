/* Importando componentes propios */
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarDesktop from '../navbar/NavbarDesktop';

/* Importando estilos del Product Detail */
import '../../css/ProductDetail.css';


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