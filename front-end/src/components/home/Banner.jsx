/* Importando componentes de React Bootstrap */
import { Carousel } from 'react-bootstrap';

/* Importando imágenes del carrusel del banner */
import firstImage from '../../assets/home/placecards.png';

/* Importando estilos del Home */
import '../../css/Home.css';


const Banner = () => {

    return (

        /* Sección de Banner */
        <section className='banner-section'>

            {/* Carrusel del Banner */}
            <Carousel controls={ false } indicators={ false } className='carousel-banner'>

                {/* Primer item del carrusel */}
                <Carousel.Item interval={ 3000 } className='item-carousel-banner'>
                    <img
                        src={ firstImage }
                        alt='Imagen de placecards'
                    />
                </Carousel.Item>

                {/* Segundo item del carrusel */}
                <Carousel.Item interval={ 3000 } className='item-carousel-banner'>
                    <img
                        src={ firstImage }
                        alt='Imagen de placecards'
                    />
                </Carousel.Item>

                {/* Tercer item del carrusel */}
                <Carousel.Item interval={ 3000 } className='item-carousel-banner'>
                    <img
                        src={ firstImage }
                        alt='Imagen de placecards'
                    />
                </Carousel.Item>

            </Carousel>

        </section>

    )
}

export default Banner;