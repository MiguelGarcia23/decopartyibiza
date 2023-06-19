/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import Product from '../components/products/Product';
import FormContact from '../components/partials/FormContact';
import Footer from '../components/partials/Footer';

/* Importando componentes propios */
import DynamicTitle from '../components/partials/DynamicTitle';
import cakeTopper from '../assets/home/cake-topper.png';
import miniTopper from '../assets/home/mini-topper.png';

/* Importando imágenes de productos de Nuestros Productos */
import cajaChuches from '../assets/home/caja-chuches.png';

/* Importando estilos de Products */
import '../css/Products.css';


const ProductsPage = () => {

    return (

        <main className='products-page'>
            
            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

            {/* Contenedor body de la página de Listado de Productos */}
            <section className='container-body-products-page'>

                {/* Título dinámico de Nuestros Productos */}
                <DynamicTitle 
                    title='Nuestros productos'
                />

                {/* Listado de productos */}
                <article className='list-products-products-page'>

                    <Product 
                        id={ 1 }
                        img={ cajaChuches }
                        title='Cajitas de chuches'
                        price={ 10 }
                    />

                    <Product 
                        id={ 2 }
                        img={ cakeTopper }
                        title='Cake Topper'
                        price={ 15 }
                    />

                    <Product 
                        id={ 3 }
                        img={ miniTopper }
                        title='Mini Topper'
                        price={ 15 }
                    />

                </article>

                {/* Sección de Contacto */}
                <FormContact />

                {/* Footer */}
                <Footer />

            </section>

        </main>

    )
}

export default ProductsPage;