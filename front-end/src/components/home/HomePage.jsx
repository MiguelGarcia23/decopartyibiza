/* Importando componentes propios */
import NavbarMobile from '../navbar/NavbarMobile';
import NavbarDesktop from '../navbar/NavbarDesktop';
import Banner from './Banner';
import Intro from './Intro';
import Catalogue from './Catalogue';
import Clients from './Clients';
import Questions from './Questions';
import Contact from './Contact';

/* Importando estilos del Home */
import '../../css/Home.css';


const HomePage = () => {

    return (

        /* Home Page */
        <main className='home-page'>
            
            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

            {/* Banner principal */}
            <Banner />

            {/* Sección de Intro */}
            <Intro />

            {/* Sección de Catálogo */}
            <Catalogue />

            {/* Sección de Clientes */}
            <Clients />

            {/* Sección de Preguntas Frecuentes */}
            <Questions />

            {/* Sección de Contacto */}
            <Contact />

        </main>

    )
}

export default HomePage;