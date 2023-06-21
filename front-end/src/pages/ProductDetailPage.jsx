/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import CarouselProduct from '../components/product-detail/CarouselProduct';
import InfoProduct from '../components/product-detail/InfoProduct';
import RelatedProducts from '../components/product-detail/RelatedProducts';
import FormContact from '../components/partials/FormContact';
import Footer from '../components/partials/Footer';

/* Importando estilos del Product Detail */
import '../css/ProductDetail.css';


const ProductDetailPage = () => {

    return (

        <main className='product-detail-page'>
            
            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

            {/* Contenedor del carrusel de imágenes y la sección de Info del Producto */}
            <section className='container-carousel-info-product-detail'>

                {/* Carrusel de imágenes del producto */}
                <CarouselProduct />

                {/* Info de Producto */}
                <InfoProduct />                

            </section>

            {/* Sección de Productos Relacionados */}
            <RelatedProducts />

            {/* Sección de Contacto */}
            <FormContact />

            {/* Footer */}
            <Footer />

        </main>

    )
}

export default ProductDetailPage;