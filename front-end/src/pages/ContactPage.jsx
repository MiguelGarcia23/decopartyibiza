/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';
import FormContact from '../components/partials/FormContact';
import Footer from '../components/partials/Footer';


const ContactPage = () => {

    return (

        <main>

            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

            {/* Sección de Contacto */}
            <FormContact />

            {/* Footer */}
            <Footer />

        </main>

    )
}

export default ContactPage;