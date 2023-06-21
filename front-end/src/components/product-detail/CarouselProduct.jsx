/* Importando funcionalidades de React */
import { useState } from 'react';

/* Importando componentes de React Bootstrap */
import { Carousel } from 'react-bootstrap';

/* Importando imágenes del producto */
import imagen1 from '../../assets/home/caja-chuches.png';
import imagen2 from '../../assets/product-detail/lilo-&-stitch-caja-chuches.jpg';
import imagen3 from '../../assets/product-detail/squid-games-caja-cuches.jpg';

/* Importando estilos del Product Detail */
import '../../css/ProductDetail.css';

const CarouselProduct = () => {

    /* Estado que guarda la imagen que esté activa en el carrusel */
    let [ activeIndexState, setActiveIndexState ] = useState( 0 );

    /* Función que pasa a la imagen anterior en el carrusel */
    const onPrevClick = () => {

        if ( activeIndexState !== 0 ) {
            setActiveIndexState( activeIndexState - 1 );
        }

    };

    /* Función que pasa a la imagen siguiente en el carrusel */
    const onNextClick = () => {

        if ( activeIndexState === 2 ) {
            setActiveIndexState( 0 );
        } else {
            setActiveIndexState( activeIndexState + 1 );
        }

    };

    /* Función que cambia la imagen activa según la que se seleccione en las miniaturas */
    const changeActiveImage = ( event ) => {

        let numberImage = event.target.id;

        switch ( numberImage ) {

            case 'first-image-carousel-product-detail':
                setActiveIndexState( 0 );
                break;

            case 'second-image-carousel-product-detail':
                setActiveIndexState( 1 );
                break;
        
            default:
                setActiveIndexState( 2 );
                break;

        }

    }

    return (

        /* Sección del carrusel de imágenes del Detalle del Producto */
        <section className='carousel-product-detail-section'>

            {/* Carrusel de imágenes del Detalle del Producto */}
            <Carousel activeIndex={ activeIndexState } controls={ false } indicators={ false } interval={ null } className='carousel-product-detail'>

                {/* Primer item del carrusel */}
                <Carousel.Item className='item-carousel-product-detail'>

                    <img src={ imagen1 } alt='Imagen 1' className='img-carousel-product-detail' />

                </Carousel.Item>

                {/* Segundo item del carrusel */}
                <Carousel.Item>

                    <img src={ imagen2 } alt='Imagen 2' className='img-carousel-product-detail' />

                </Carousel.Item>

                {/* Tercer item del carrusel */}
                <Carousel.Item>

                    <img src={ imagen3 } alt='Imagen 3' className='img-carousel-product-detail' />

                </Carousel.Item>

            </Carousel>

            {/* Contenedor de las flechas e indicadores del carrusel */}
            <article className='container-arrows-indicators-carousel-product-detail'>

                {/* Flecha previa del carrusel */}
                <i className='fa-solid fa-chevron-left icon-arrows-carousel-product-detail' onClick={ onPrevClick } />

                {/* Contenedor de imágenes de los indicadores del carrusel */}
                <div className='container-img-indicators-carousel-product-detail'>
                    <img src={ imagen1 } alt='Imagen 1' className={ `img-indicators-carousel-product-detail ${ activeIndexState === 0 ? 'border-violet' : 'opacity-65' }` } id='first-image-carousel-product-detail' onClick={ changeActiveImage } />
                    <img src={ imagen2 } alt='Imagen 2' className={ `img-indicators-carousel-product-detail ${ activeIndexState === 1 ? 'border-violet' : 'opacity-65' }` } id='second-image-carousel-product-detail' onClick={ changeActiveImage } />
                    <img src={ imagen3 } alt='Imagen 3' className={ `img-indicators-carousel-product-detail ${ activeIndexState === 2 ? 'border-violet' : 'opacity-65' }` } id='third-image-carousel-product-detail' onClick={ changeActiveImage } />
                </div>

                {/* Flecha siguiente del carrusel */}
                <i className='fa-solid fa-chevron-right icon-arrows-carousel-product-detail' onClick={ onNextClick } />

            </article>

        </section>

    )
}

export default CarouselProduct;