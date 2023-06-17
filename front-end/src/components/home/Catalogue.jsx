/* Importando funcionalidades de React Router Dom */
import { useNavigate } from 'react-router-dom';

/* Importando componentes propios */
import DynamicTitle from '../partials/DynamicTitle';

/* Importando imágenes de productos de Nuestros Productos */
import cajaChuches from '../../assets/home/caja-chuches.png';
import cakeTopper from '../../assets/home/cake-topper.png';
import miniTopper from '../../assets/home/mini-topper.png';

/* Importando estilos del Home */
import '../../css/Home.css';


const Catalogue = () => {

    let navigate = useNavigate();

    let goToProducts = () => {

        navigate( '/products' );

    }

    return (

        /* Sección de Catalogue */
        <section className='catalogue-section'>

            {/* Título dinámico de Nuestros Productos */}
            <DynamicTitle 
                title='Nuestros productos'
            />

            {/* Grupo de productos */}
            <article className='products-catalogue-section'>

                {/* Producto 1 */}
                <div className='product-catalogue-section'>

                    <img src={ cajaChuches } alt='Imagen de Cajita de Chuches' className='img-product-catalogue-section' />

                    <div className='info-product-catalogue-section'>
                        <h6 className='title-product-catalogue-section'>Cajitas de chuches</h6>
                        <p className='price-product-catalogue-section'>Desde 10€</p>
                    </div>
                    
                </div>

                {/* Producto 2 */}
                <div className='product-catalogue-section'>

                    <img src={ cakeTopper } alt='Imagen de Cake Topper' className='img-product-catalogue-section' />

                    <div className='info-product-catalogue-section'>
                        <h6 className='title-product-catalogue-section'>Cake Topper</h6>
                        <p className='price-product-catalogue-section'>Desde 15€</p>
                    </div>

                </div>

                {/* Producto 3 */}
                <div className='product-catalogue-section'>

                    <img src={ miniTopper } alt='Imagen de Mini Topper' className='img-product-catalogue-section' />

                    <div className='info-product-catalogue-section'>
                        <h6 className='title-product-catalogue-section'>Mini Topper</h6>
                        <p className='price-product-catalogue-section'>Desde 15€</p>
                    </div>

                </div>

            </article>

            {/* Botón de Ver todos los productos */}
            <article className='button-catalogue-section'>
                <button onClick={ goToProducts }>Ver todos los productos</button>
            </article>

        </section>

    )
}

export default Catalogue;