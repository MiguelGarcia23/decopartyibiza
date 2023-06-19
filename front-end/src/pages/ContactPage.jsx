/* Importando componentes propios */
import NavbarMobile from '../components/navbar/NavbarMobile';
import NavbarDesktop from '../components/navbar/NavbarDesktop';

/* Importando estilos del Contact */
import '../css/Contact.css';


const ContactPage = () => {

    return (

        <main className='contact-page'>

            {/* Navbar principal versión Mobile */}
            <NavbarMobile />

            {/* Navbar principal versión Desktop */}
            <NavbarDesktop />

        </main>

    )
}

export default ContactPage;