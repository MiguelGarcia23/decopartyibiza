/* Importando estilos del Products */
import '../../css/Products.css';


const Product = ({ id, img, title, price }) => {

    return (

        <div className='product-products-page'>

            <a href={ `/products/${ id }` }>
                <img src={ img } alt='Imagen de Cajita de Chuches' className='img-product-products-page' />

                <div className='info-product-products-page'>
                    <h6 className='title-product-products-page'>{ title }</h6>
                    <p className='price-product-products-page'>Desde { price }€</p>
                </div>
            </a>
            
        </div>

    )
}

export default Product;