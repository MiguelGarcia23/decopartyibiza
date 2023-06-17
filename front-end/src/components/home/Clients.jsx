/* Importando funcionalidades de React */
import { useState } from 'react';

/* Importando componentes de React Bootstrap */
import { Carousel } from 'react-bootstrap';

/* Importando componentes propios */
import DynamicTitle from '../partials/DynamicTitle';

/* Importando estilos del Home */
import '../../css/Home.css';


const Clients = () => {

    /* Estado que guarda el comentario del cliente que esté activo en el carrusel */
    let [ activeIndexState, setActiveIndexState ] = useState( 0 );

    const onPrevClick = () => {

        setActiveIndexState( activeIndexState - 1 );

    };

    const onNextClick = () => {

        if( activeIndexState === 3 ) {
            setActiveIndexState( 0 );
        } else {
            setActiveIndexState( activeIndexState + 1 );
        }

    };

    return (

        /* Sección de Clientes */
        <section className='clients-section'>

            {/* Título dinámico */}
            <DynamicTitle 
                title='Lo que dicen nuestros clientes'
            />

            {/* Carrusel de opiniones de clientes */}
            <article className='carousel-clients-section'>

                <Carousel activeIndex={ activeIndexState } controls={ false } interval={ null } className='carousel-clients-section'>

                    {/* Primer item del carrusel */}
                    <Carousel.Item className='item-carousel-clients-section'>
                        <div>
                            <p className='opinion-item-carousel-clients-section'>“Estoy muy contenta con como quedó todo para la fiesta de mi pequeña. Sin duda los volveré a contratar”</p>
                            <p className='sign-item-carousel-clients-section'>Jane Doe</p>
                        </div>
                    </Carousel.Item>

                    {/* Segundo item del carrusel */}
                    <Carousel.Item className='item-carousel-clients-section'>
                        <div>
                            <p className='opinion-item-carousel-clients-section'>“Estoy muy contenta con como quedó todo para la fiesta de mi pequeña. Sin duda los volveré a contratar”</p>
                            <p className='sign-item-carousel-clients-section'>Jane Doe</p>
                        </div>
                    </Carousel.Item>

                    {/* Tercer item del carrusel */}
                    <Carousel.Item className='item-carousel-clients-section'>
                        <div>
                            <p className='opinion-item-carousel-clients-section'>“Estoy muy contenta con como quedó todo para la fiesta de mi pequeña. Sin duda los volveré a contratar”</p>
                            <p className='sign-item-carousel-clients-section'>Jane Doe</p>
                        </div>
                    </Carousel.Item>

                    {/* Cuarto item del carrusel */}
                    <Carousel.Item className='item-carousel-clients-section'>
                        <div>
                            <p className='opinion-item-carousel-clients-section'>“Estoy muy contenta con como quedó todo para la fiesta de mi pequeña. Sin duda los volveré a contratar”</p>
                            <p className='sign-item-carousel-clients-section'>Jane Doe</p>
                        </div>
                    </Carousel.Item>

                </Carousel>

                {/* Flechas de anterior y siguiente */}
                <div className={`arrows-carousel-clients-section ${ activeIndexState === 0 ? 'jc-end' : null }`}>

                    {/* Flecha previa */}
                    {
                        activeIndexState !== 0 &&
                        <i className='fa-solid fa-arrow-left-long arrow-prev-carousel-clients-section' onClick={ onPrevClick } />
                    }

                    {/* Flecha siguiente */}
                    <i className='fa-solid fa-arrow-right-long arrow-next-carousel-clients-section' onClick={ onNextClick } />

                </div>

            </article>

        </section>

    )
}

export default Clients;