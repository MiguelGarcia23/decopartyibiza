/* Funcionalidades de React */
import { useEffect, useState } from 'react';

/* Funcionalidad que trae la ruta de React Router Dom */
import { useLocation } from 'react-router-dom';

/* Importando imagen del Logo de Deco Party Ibiza */
import logo from '../../assets/logo.svg';

/* Importando estilos del Navbar */
import '../../css/Navbar.css';


const NavbarDesktop = () => {

    /* Estado que guarda la url de la página actual */
    let [ actualPageState, setActualPageState ] = useState( '' );

    /* Al cargar la página guardará la url en el estado */
    let location = useLocation();

    useEffect(() => {

        setActualPageState( location.pathname );

    }, []);

    return (

        /* Navbar versión Desktop */
        <nav className='navbar-desktop'>

            {/* Logo de Deco Party Ibiza */}
            <a href='/' className='logo-navbar'>
                <img src={ logo } alt='Logo de Deco Party Ibiza' />
            </a>

            {/* Lista de links */}
            <ul className='ul-navbar-desktop'>

                {/* Opción Productos */}
                <li className='option-navbar-desktop'>

                    <a href='/products'>Productos</a>

                    {/* Indicador de si esta es la página que se está viendo */}
                    {
                        actualPageState.includes( '/products' ) &&

                        <div className='pointer-active-option-navbar-desktop'></div>
                    }

                </li>

                {/* Opción Hablemos */}
                <li className='option-navbar-desktop'>

                    <a href='/contact'>
                        <button className='button-navbar-desktop'>Hablemos</button>
                    </a>

                    {/* Indicador de si esta es la página que se está viendo */}
                    {
                        actualPageState.includes( '/contact' ) &&

                        <div className='pointer-active-option-navbar-desktop'></div>
                    }

                </li>
                
                {/* Opcion Carrito de Compras */}
                <li className='option-navbar-desktop'>

                    <a href='/cart'><i className='fa-solid fa-cart-shopping' /></a>

                    {/* Indicador de si esta es la página que se está viendo */}
                    {
                        actualPageState.includes( '/cart' ) &&

                        <div className='pointer-active-option-navbar-desktop'></div>
                    }

                </li>

            </ul>

        </nav>

    )
}

export default NavbarDesktop;