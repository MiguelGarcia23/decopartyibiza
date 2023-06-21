/* Importando componentes propios */
import DynamicTitle from '../partials/DynamicTitle';

/* Importando imágenes de productos de Nuestros Productos */
import cajaChuches from '../../assets/home/caja-chuches.png';
import cakeTopper from '../../assets/home/cake-topper.png';
import miniTopper from '../../assets/home/mini-topper.png';


const RelatedProducts = () => {

    return (

        /* Sección de Productos Relacionados del Detalle del Producto */
        <section className='related-products-product-detail-section'>

            {/* Título dinámico */}
            <DynamicTitle 
                title='Productos Relacionados'
            />

            {/* Grupo de productos */}
            <article className='related-products-product-detail'>

                {/* Producto 1 */}
                <div className='related-product-product-detail'>

                    <img src={ cajaChuches } alt='Imagen de Cajita de Chuches' className='img-related-product-product-detail' />

                    <div className='info-related-product-product-detail'>
                        <h6 className='title-related-product-product-detail'>Cajitas de chuches</h6>
                        <p className='price-related-product-product-detail'>Desde 10€</p>
                    </div>
                    
                </div>

                {/* Producto 2 */}
                <div className='related-product-product-detail'>

                    <img src={ cakeTopper } alt='Imagen de Cake Topper' className='img-related-product-product-detail' />

                    <div className='info-related-product-product-detail'>
                        <h6 className='title-related-product-product-detail'>Cake Topper</h6>
                        <p className='price-related-product-product-detail'>Desde 15€</p>
                    </div>

                </div>

                {/* Producto 3 */}
                <div className='related-product-product-detail'>

                    <img src={ miniTopper } alt='Imagen de Mini Topper' className='img-related-product-product-detail' />

                    <div className='info-related-product-product-detail'>
                        <h6 className='title-related-product-product-detail'>Mini Topper</h6>
                        <p className='price-related-product-product-detail'>Desde 15€</p>
                    </div>

                </div>

            </article>

        </section>

    )
}

export default RelatedProducts;