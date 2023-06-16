/* Importando funcionalidades de React */
import { useState } from 'react';

/* Importando funcionalidades de React Router Dom */
import { useNavigate } from 'react-router-dom';

/* Importando imágenes de productos de Nuestros Productos */
import cajaChuches from '../../assets/home/caja-chuches.png';
import cakeTopper from '../../assets/home/cake-topper.png';
import miniTopper from '../../assets/home/mini-topper.png';

/* Importando estilos del Home */
import '../../css/Home.css';


const Catalogue = () => {

    /* Estados de REACT que cambian con el Scroll

    - transitionRow1: Guarda la posición de transition que tiene la fila 1 del título.
    - transitionRow2: Guarda la posición de transition que tiene la fila 2 del título.
    - positionYState: Guarda la posición del scroll de la ventana del navegador.
    
    */
    let [ transitionRow1, setTransitionRow1 ] = useState( -450 );
    let [ transitionRow2, setTransitionRow2 ] = useState( -200 );
    let [ positionYState, setPositionYState ] = useState( 0 );

    /* Función de contiene lo que hará el banner cuando se haga scroll */
    const handleScroll = () => {

        /* Variables que guardan las filas */
        let firstRow = document.getElementById('first-row-title-catalogue-section');
        let secondRow = document.getElementById('second-row-title-catalogue-section');

        /* Condición que pregunta si la página hizo scroll hacia abajo o hacia arriba */
        if ( window.scrollY > positionYState ) {

            /* Variables de aumento o disminución de la posición de transición Y */
            let decreaseTranslateX = transitionRow1 - 2;
            let increaseTranslateX = transitionRow2 + 2;

            /* String que guarda el nuevo estilo de transform que tendrán las filas */
            let newStyleTransformWithDecreaseTranslateX = `translateX( ${ decreaseTranslateX }px )`;
            let newStyleTransformWithIncreaseTranslateX = `translateX( ${ increaseTranslateX }px )`;

            /* Agregando los estilos a cada una de las filas por separado para crear el efecto de movimiento */
            firstRow.style.transform = newStyleTransformWithDecreaseTranslateX;
            secondRow.style.transform = newStyleTransformWithIncreaseTranslateX;

            /* Actualizando la posición del estado TransitionX de cada una de las filas */
            setTransitionRow1( decreaseTranslateX )
            setTransitionRow2( increaseTranslateX )
    
        } else {

            /* Variables de aumento o disminución de la posición de transición Y */
            let decreaseTranslateX = transitionRow2 - 2;
            let increaseTranslateX = transitionRow1 + 2;

            /* String que guarda el nuevo estilo de transform que tendrán las filas */
            let newStyleTransformWithDecreaseTranslateX = `translateX( ${ decreaseTranslateX }px )`;
            let newStyleTransformWithIncreaseTranslateX = `translateX( ${ increaseTranslateX }px )`;

            /* Agregando los estilos a cada una de las filas por separado para crear el efecto de movimiento */
            firstRow.style.transform = newStyleTransformWithIncreaseTranslateX;
            secondRow.style.transform = newStyleTransformWithDecreaseTranslateX;

            /* Actualizando la posición del estado TransitionX de cada una de las filas */
            setTransitionRow1( increaseTranslateX )
            setTransitionRow2( decreaseTranslateX )

        }

        /* Actualizando la posición del scroll de la ventana  */
        setPositionYState( window.scrollY );

    };

    window.addEventListener( 'scroll', handleScroll );

    let navigate = useNavigate();

    let goToProducts = () => {

        navigate( '/products' );

    }

    return (

        /* Sección de Catalogue */
        <section className='catalogue-section'>

            {/* Título dinámico de Nuestros Productos */}
            <article className='title-catalogue-section'>

                {/* Primera fila del título */}
                <div className='row-title-catalogue-section' id='first-row-title-catalogue-section'>

                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section first-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section second-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section third-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>

                </div>

                {/* Segunda fila del título */}
                <div className='row-title-catalogue-section' id='second-row-title-catalogue-section'>

                    <div className='circle-title-catalogue-section second-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section third-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section first-color-circle-title-catalogue-section'></div>
                    <h3 className='text-title-catalogue-section'>Nuestros productos</h3>
                    <div className='circle-title-catalogue-section second-color-circle-title-catalogue-section'></div>

                </div>

            </article>

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