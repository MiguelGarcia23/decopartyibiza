/* Importando imágenes */
import resumeLogo from '../../assets/resume-logo.svg';

/* Importando estilos CSS */
import '../../css/Footer.css'


const Footer = () => {

    return (

        /* Footer */
        <section className='footer-section'>
            
            {/* Imagen de logo resumido */}
            <img src={ resumeLogo } alt='Logo resumido' className='img-footer-section' />

        </section>

    )
}

export default Footer;