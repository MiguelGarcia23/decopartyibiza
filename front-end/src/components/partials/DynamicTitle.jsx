/* Importando funcionalidades de React */
import { useEffect, useState } from 'react';

/* Importando estilos del Título Dinámico */
import '../../css/DynamicTitle.css';

const DynamicTitle = ({ title }) => {

    /* Estados de React que guardan los tres colores de los círculos del título dependiendo de la sección */
    let [ firstColorState, setFirstColorState ] = useState( '' ); 
    let [ secondColorState, setSecondColorState ] = useState( '' ); 
    let [ thirdColorState, setThirdColorState ] = useState( '' ); 

    useEffect(() => {
      
        switch ( title ) {
            case 'Nuestros productos':
                setFirstColorState( 'green-circle-dynamic-title' );
                setSecondColorState( 'violet-circle-dynamic-title' );
                setThirdColorState( 'pink-circle-dynamic-title' );
                break;

            case 'Lo que dicen nuestros clientes':
                setFirstColorState( 'blue-circle-dynamic-title' );
                setSecondColorState( 'green-circle-dynamic-title' );
                setThirdColorState( 'violet-circle-dynamic-title' );
                break;

            case 'Preguntas frecuentes':
                setFirstColorState( 'blue-circle-dynamic-title' );
                setSecondColorState( 'violet-circle-dynamic-title' );
                setThirdColorState( 'pink-circle-dynamic-title' );
                break;
        
            default:
                setFirstColorState( 'blue-circle-dynamic-title' );
                setSecondColorState( 'pink-circle-dynamic-title' );
                setThirdColorState( 'green-circle-dynamic-title' );
                break;
        }

    }, []);

    /* Estados de REACT que cambian con el Scroll

    - transitionRow1: Guarda la posición de transition que tiene la fila 1 del título.
    - transitionRow2: Guarda la posición de transition que tiene la fila 2 del título.
    - positionYState: Guarda la posición del scroll de la ventana del navegador.
    
    */
    let [ transitionRow1, setTransitionRow1 ] = useState( -450 );
    let [ transitionRow2, setTransitionRow2 ] = useState( -200 );
    let [ positionYState, setPositionYState ] = useState( 0 );

    /* Función de contiene lo que hará el banner cuando se haga scroll */
    const handleScroll = () => {

        /* Variables que guardan las filas */
        let firstRow = document.getElementById('first-row-dynamic-title');
        let secondRow = document.getElementById('second-row-dynamic-title');

        /* Condición que pregunta si la página hizo scroll hacia abajo o hacia arriba */
        if ( window.scrollY > positionYState ) {

            /* Variables de aumento o disminución de la posición de transición Y */
            let decreaseTranslateX = transitionRow1 - 10;
            let increaseTranslateX = transitionRow2 + 10;

            /* String que guarda el nuevo estilo de transform que tendrán las filas */
            let newStyleTransformWithDecreaseTranslateX = `translateX( ${ decreaseTranslateX }px )`;
            let newStyleTransformWithIncreaseTranslateX = `translateX( ${ increaseTranslateX }px )`;

            /* Agregando los estilos a cada una de las filas por separado para crear el efecto de movimiento */
            firstRow.style.transform = newStyleTransformWithDecreaseTranslateX;
            secondRow.style.transform = newStyleTransformWithIncreaseTranslateX;

            /* Actualizando la posición del estado TransitionX de cada una de las filas */
            setTransitionRow1( decreaseTranslateX )
            setTransitionRow2( increaseTranslateX )
    
        } else {

            /* Variables de aumento o disminución de la posición de transición Y */
            let decreaseTranslateX = transitionRow2 - 2;
            let increaseTranslateX = transitionRow1 + 2;

            /* String que guarda el nuevo estilo de transform que tendrán las filas */
            let newStyleTransformWithDecreaseTranslateX = `translateX( ${ decreaseTranslateX }px )`;
            let newStyleTransformWithIncreaseTranslateX = `translateX( ${ increaseTranslateX }px )`;

            /* Agregando los estilos a cada una de las filas por separado para crear el efecto de movimiento */
            firstRow.style.transform = newStyleTransformWithIncreaseTranslateX;
            secondRow.style.transform = newStyleTransformWithDecreaseTranslateX;

            /* Actualizando la posición del estado TransitionX de cada una de las filas */
            setTransitionRow1( increaseTranslateX )
            setTransitionRow2( decreaseTranslateX )

        }

        /* Actualizando la posición del scroll de la ventana  */
        setPositionYState( window.scrollY );

    };

    window.addEventListener( 'scroll', handleScroll );

    return (

        /* Título dinámico de Nuestros Productos */
        <article className='dynamic-title'>

            {/* Primera fila del título */}
            <div className='row-dynamic-title' id='first-row-dynamic-title'>

                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ firstColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ secondColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ thirdColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>

            </div>

            {/* Segunda fila del título */}
            <div className='row-dynamic-title' id='second-row-dynamic-title'>

                <div className={ `circle-dynamic-title ${ secondColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ thirdColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ firstColorState }` }></div>
                <h3 className='text-dynamic-title'>{ title }</h3>
                <div className={ `circle-dynamic-title ${ secondColorState }` }></div>

            </div>

        </article>

    )
}

export default DynamicTitle;