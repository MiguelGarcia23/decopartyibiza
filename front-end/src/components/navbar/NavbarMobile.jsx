/* Funcionalidades de React */
import { useState } from 'react';

/* Importando imagen del Logo de Deco Party Ibiza */
import logo from '../../assets/logo.svg';

/* Importando estilos del Navbar */
import '../../css/Navbar.css';


const NavbarMobile = () => {

    let [ activeMenuState, setActiveMenuState ] = useState( 0 );

    let toggleMenu = () => {

        if ( activeMenuState === 0 ) {

            setActiveMenuState( 1 );

        } else {

            setActiveMenuState( 0 );

        }

    };

    return (

        /* Navbar versión Mobile */
        <section className='navbar-mobile'>

            {/* Navbar estático versión mobile */}
            <article className='navbar-mobile-static'>

                {/* Logo de Deco Party Ibiza */}
                <a href='/' className='logo-navbar'>
                    <img src={ logo } alt='Logo de Deco Party Ibiza' />
                </a>

                {/* Ícono de Burger Menú */}
                <i 
                    className={ `fa-solid fa-bars icon-burger-menu-navbar-mobile ${ activeMenuState === 0 ? 'd-block' : 'd-none' }` }
                    onClick={ toggleMenu } 
                />

                {/* Ícono de cerrar Burger Menú */}
                <i 
                    className={ `fa-solid fa-xmark icon-close-burger-menu-navbar-mobile ${ activeMenuState === 1 ? 'd-block' : 'd-none' }` } 
                    onClick={ toggleMenu } 
                />

            </article>

            {/* Navbar activo */}
            <nav className={ `navbar-mobile-active ${ activeMenuState === 1 ? 'pos-appear' : 'pos-disappear' }` }>

                <ul>

                    {/* Opcion Productos */}
                    <li className='option-navbar-mobile-active' id='first-option-navbar-mobile-active'>
                        <a href='/products'>
                            <div className='figure-option-navbar-mobile-active'></div>
                            <h5 className='title-option-navbar-mobile-active'>Productos</h5>
                        </a>
                    </li>

                    {/* Opcion Hablemos */}
                    <li className='option-navbar-mobile-active' id='second-option-navbar-mobile-active'>
                        <a href='/contact'>
                            <div className='figure-option-navbar-mobile-active'></div>
                            <h5 className='title-option-navbar-mobile-active'>Hablemos</h5>
                        </a>
                    </li>

                    {/* Opción Carrito */}
                    <li className='option-navbar-mobile-active' id='third-option-navbar-mobile-active'>
                        <a href='/cart'>
                            <div className='figure-option-navbar-mobile-active'></div>
                            <h5 className='title-option-navbar-mobile-active'>Carrito</h5>
                        </a>
                    </li>

                </ul>

            </nav>

        </section>

    )
}

export default NavbarMobile;