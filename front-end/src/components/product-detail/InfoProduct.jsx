/* Importando funcionalidades de React */
import { useState } from 'react';

/* Importando componentes propios */
import FormProductDetail from './FormProductDetail';


const InfoProduct = () => {

    /* Estado que guarda la cantidad de items seleccionados */
    let [ quantityItemState, setQuantityItemState ] = useState( 1 );

    /* Funcionalidad para reducir la cantidad del producto */
    let removeItem = () => {

        if ( quantityItemState > 1 ) {
            setQuantityItemState( quantityItemState - 1 );
        }

    }

    /* Funcionalidad para aumentar la cantidad del producto */
    let addItem = () => {

        setQuantityItemState( quantityItemState + 1 );

    }

    return (

        /* Sección de Info del Detalle del Producto */
        <section className='info-product-detail-section'>
            
            {/* Título del producto */}
            <h2 className='title-product-detail'>Cajitas de chuches</h2>

            {/* Párrafo de descripción */}
            <p className='descripcion-product-detail'>Cake topper realizado en varias capas de cartulina y figuras impresas.</p>

            {/* Medidas del producto */}
            <p className='size-product-detail'>Medidas: 9x16 cm</p>

            {/* Precio del producto */}
            <p className='price-product-detail'>Precio: Desde 5€ cada cajita. El precio definitivo depende de las características de cada proyecto, por lo que primero se debn conocer las especificaciones dadas por el cliente.</p>

            {/* Cantidad del producto */}
            <div className='amount-product-product-detail'>

                <p>Cantidad de producto:</p>

                {/* Contador de la cantidad del producto */}
                <div className='counter-amount-product-product-detail'>
                    <i className='fa-solid fa-minus minus-counter-amount-product-product-detail' onClick={ removeItem } />
                    <p className='number-counter-amount-product-product-detail'>{ quantityItemState }</p>
                    <i className='fa-solid fa-plus plus-counter-amount-product-product-detail' onClick={ addItem } />
                </div>

            </div>

            {/* Especificaciones del producto */}
            <p className='specifications-product-detail'>Especificaciones:</p>

            <FormProductDetail />

        </section>

    )
}

export default InfoProduct;