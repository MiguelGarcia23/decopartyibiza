/* Importando imágenes de sección Intro */
import owner from '../../assets/home/owner.png';
import team from '../../assets/home/team.png';

/* Importando estilos del Home */
import '../../css/Home.css';


const Intro = () => {

    return (

        /* Sección de Intro */
        <section className='intro-section'>

            {/* Título de Intro */}
            <h1 className='title-intro-section'>Hola, bienvenido a DecoParty Ibiza</h1>

            {/* Caja con la info y las imágenes */}
            <article className='box-info-imgs-intro-section'>

                {/* Párrafos de Intro */}
                <div>
                    
                    <p className='p-intro-section'>Somos un negocio de papelería creativa personalizada y decoración de eventos. Te acompañamos a celebrar cada momento, desde baby showers y nacimientos hasta cumpleaños y bodas.</p>

                    <p className='p-intro-section'>Nuestro objetivo es hacer de cada celebración un momento especial, es por eso que estamos comprometidos a ofrecer decoraciones únicas y personalizadas.</p>

                    <p className='p-intro-section'>Estamos ubicados en Ibiza, España (por eso el nombre) pero podemos hacer llegar las decoraciones a cualquier parte del país.</p>

                </div>

                {/* Imágenes de Intro */}
                <div className='box-imgs-intro-section'>

                    <img src={ owner } alt="Imagen de dueña de Deco Party Ibiza" className='img-intro-section' id='first-img-intro-section' />

                    <img src={ team } alt="Imagen de equipo de Deco Party Ibiza" className='img-intro-section' id='second-img-intro-section' />

                </div>

            </article>


        </section>

    )
}

export default Intro;