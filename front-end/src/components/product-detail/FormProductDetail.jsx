/* Importando las funcionalidades de React */
import { useState } from 'react';

/* Importando componentes de React Bootstrap */
import { Accordion } from 'react-bootstrap';

/* Importando estilos del Product Detail */
import '../../css/ProductDetail.css';


const FormProductDetail = () => {

    /* Estado que si se hizo focus en el input del formulario */
    let [ activeInput, setActiveInput ] = useState({
        name: false,
        age: false,
        theme: false
    });

    /* Estado que guarda la data que se vaya agregando a los campos del formulario */
    let [ data, setData ] = useState({
        name: '',
        age: 0,
        event: '',
        theme: ''
    });

    /* Estado que guarda los errores en la validación de los campos del formulario  */
    let [ errorsState, setErrorsState ] = useState({
        name: false,
        age: false,
        event: false,
        theme: false
    });

    /* Estado que guarda si existen errores de validación o no */
    let [ isErrorState, setIsErrorState ] = useState( false );

    /* Estado que guarda si el formulario fue enviado correctamente o no */
    let [ formSubmittedState, setFormSubmittedState ] = useState( false );

    /* Función que elimina el label al hacer focus */
    let handleFocus = ( event ) => {

        /* Eliminar label al hacer focus */
        setActiveInput({
            ...activeInput,
            [ event.target.name ]: true
        })

    }

    /* Función que valida y guarda los cambios en los campos del formulario */
    const handleInput = ( event ) => {

        /* Variable que guarda si hay errores */
        let isError = false;

        /* Objeto que guarda los errores */
        let errors = errorsState;

        /* Valida si el campo "Nombre" tiene más de 2 caracteres */
        if ( event.target.name === 'name' && event.target.value.length <= 2 ) {
            errors.name = 'El campo "Nombre" debe tener más de 2 caracteres';
            isError = true;
        }

        /* Valida si el campo "Temática" tiene más de 2 caracteres */
        if ( event.target.name === 'theme' && event.target.value.length <= 2 ) {
            errors.theme = 'El campo "Temática" debe tener más de 2 caracteres';
            isError = true;
        }

        /* Condicional que valida si hay errores o no para saber si guardar la data agregada a cada campo o no */
        if ( !isError ) {
            setData({
                ...data,
                [event.target.name] : event.target.value
            })
            setIsErrorState( false );
            setErrorsState({
                ...errorsState,
                [event.target.name] : false
            })
        } else {
            setIsErrorState( true );
            setErrorsState( errors );
            setData({
                ...data
            })
        }

    };

    /* Función que valida el formulario antes de enviarlo y lo envía si está correcto */
    const handleSubmit = ( event ) => {

        /* Prevenir el envío por defecto */
        event.preventDefault();
        
        /* Variable que guarda si hay errores o no en los campos del formulario */
        let isError = false;

        /* Condicional que valida si ya existían errores en los campos antes del envío o no */
        if ( isErrorState === true ) {
            isError = true;
        }

        /* Objeto que guarda los errores */
        let errors = {};

        /* Valida si el campo "Nombre" está vacío */
        if ( !data.name.trim() ) {
            errors.name = 'El campo "Nombre" no debe estar vacío';
            isError = true;
        }

        /* Valida si el campo "Edad" está vacío */
        if ( data.age <= 0 ) {
            errors.age = 'La edad debe ser mayor a 0';
            isError = true;
        }

        /* Valida si el campo "Tipo de Evento" está vacío */
        if ( !data.event.trim() ) {
            errors.event = 'Debe seleccionar un tipo de evento';
            isError = true;
        }

        /* Valida si el campo "Temática" está vacío */
        if ( !data.theme.trim() ) {
            errors.theme = 'El campo "Temática" no debe estar vacío';
            isError = true;
        }

        /* Condicional que valida si hay errores o no para enviar el formulario */
        if ( !isError ) {

            setFormSubmittedState( true );
        
        } else {

            setIsErrorState( true );

            setErrorsState( errors );

            setData({
                ...data
            })

        }

    }

    return (

        /* Formulario de las especificaciones del pedido */
        <form onSubmit={ handleSubmit } autoComplete='off'>

            {/* Campo Nombre */}
            <div className='input-group-form-product-detail'>
                <label htmlFor='name' className={ !activeInput.name ? 'd-block' : 'd-none' }>Nombre</label>
                <input type='text' name='name' id='name' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />
                {/* Mensaje de error */}                        
                {
                    errorsState.name &&
                    <span className='text-error'>{ errorsState.name }</span>
                }
            </div>

            {/* Campo Edad */}
            <div className='input-group-form-product-detail'>
                <label htmlFor='age' className={ !activeInput.age ? 'd-block' : 'd-none' }>Edad del homenajeado</label>
                <input type='number' name='age' id='age' min={ 0 } onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />
                {/* Mensaje de error */}                        
                {
                    errorsState.age &&
                    <span className='text-error'>{ errorsState.age }</span>
                }
            </div>

            {/* Acordiones del select de Producto o servicio de interés y de tipo de evento */}
            <Accordion>

                {/* Select del tipo de evento */}
                <Accordion.Item eventKey='1' className='option-accordion-group-form-product-detail'>

                    <Accordion.Header className='header-option-accordion-group-form-product-detail'>
                        Tipo de Evento
                    </Accordion.Header>
                    <Accordion.Body className='body-option-accordion-group-form-product-detail'>

                        {/* Opción 1 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='birthday' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='birthday' className='label-radio-group-form-product-detail'>
                                Cumpleaños
                            </label>
                        </div>

                        {/* Opción 2 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='baby_shower' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='baby_shower' className='label-radio-group-form-product-detail'>
                                Baby Shower
                            </label>
                        </div>

                        {/* Opción 3 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='christening' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='christening' className='label-radio-group-form-product-detail'>
                                Bautizo
                            </label>
                        </div>

                        {/* Opción 4 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='communion' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='communion' className='label-radio-group-form-product-detail'>
                                Comunión
                            </label>
                        </div>

                        {/* Opción 5 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='wedding' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='wedding' className='label-radio-group-form-product-detail'>
                                Boda
                            </label>
                        </div>

                        {/* Opción 6 */}
                        <div>
                            <label className='container-radio-group-form-product-detail'>
                                <input type='radio' name='event' id='other' onClick={ handleInput } />
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor='other' className='label-radio-group-form-product-detail'>
                                Otro
                            </label>
                        </div>

                    </Accordion.Body>

                    {/* Mensaje de error */}  
                    {
                        errorsState.event &&
                        <span className='text-error'>{ errorsState.event }</span>
                    } 

                </Accordion.Item>

            </Accordion>

            {/* Campo Temática */}
            <div className='input-group-form-product-detail'>
                <label htmlFor='theme' className={ !activeInput.theme ? 'd-block' : 'd-none' }>Temática</label>
                <input type='text' name='theme' id='theme' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />
                {/* Mensaje de error */}                        
                {
                    errorsState.theme &&
                    <span className='text-error'>{ errorsState.theme }</span>
                }
            </div>

            {/* Botón de Enviar */}
            <div className='button-group-product-detail'>
                <button 
                    type='submit'
                    className={ ( data.name === '' || data.age === 0 || data.event === '' || data.theme === '' ? 'disabled-button' : null ) }
                >
                    Enviar formulario
                </button>
                {/* Mensaje de éxito en el envío */}  
                { formSubmittedState && 
                    <span className='text-success'>El formulario se ha enviado correctamente</span>
                }
            </div>

        </form>

    )
}

export default FormProductDetail;