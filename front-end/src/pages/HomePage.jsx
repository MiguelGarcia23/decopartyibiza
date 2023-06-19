/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import Banner from '../components/home/Banner';
import Intro from '../components/home/Intro';
import Catalogue from '../components/home/Catalogue';
import Clients from '../components/home/Clients';
import Questions from '../components/home/Questions';
import FormContact from '../components/partials/FormContact';
import Footer from '../components/partials/Footer';

/* Importando estilos del Home */
import '../css/Home.css';


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
            <FormContact />

            {/* Footer */}
            <Footer />

        </main>

    )
}

export default HomePage;