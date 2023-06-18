/* Importando las funcionalidades de React */
import { useState } from 'react';

/* Importando componentes de React Bootstrap */
import { Accordion } from 'react-bootstrap';

/* Importando componentes propios */
import DynamicTitle from '../partials/DynamicTitle';

/* Importando imágenes */
import iconInstagram from '../../assets/home/icon-instagram.png';
import iconWhatsapp from '../../assets/home/icon-whatsapp.png';

/* Importando estilos del Home */
import '../../css/Home.css';


const Contact = () => {

    /* Estado que si se hizo focus en el input del formulario */
    let [ activeInput, setActiveInput ] = useState({
        name: false,
        phone: false,
        theme: false,
        date: false
    });

    /* Estado que guarda la data que se vaya agregando a los campos del formulario */
    let [ data, setData ] = useState({
        name: '',
        phone: '',
        service: '',
        event: '',
        theme: '',
        date: ''
    });

    /* Estado que guarda los errores en la validación de los campos del formulario  */
    let [ errorsState, setErrorsState ] = useState({
        name: false,
        phone: false,
        service: false,
        event: false,
        theme: false,
        date: false
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

        /* Regex de teléfono para validar que el campo phone tenga el formato correcto */
        let regexPhone = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;

        /* Valida si el campo "Nombre" tiene más de 2 caracteres */
        if ( event.target.name === 'name' && event.target.value.length <= 2 ) {
            errors.name = 'El campo "Nombre" debe tener más de 2 caracteres';
            isError = true;
        }

        /* Valida si el campo "Teléfono" tiene el formato correcto */
        if ( event.target.name === 'phone' && !regexPhone.test( event.target.value ) ) {
            errors.phone = 'El campo "Teléfono" debe tener un formato de número telefónico';
            isError = true;
        }

        /* Valida si el campo "Temática" tiene más de 2 caracteres */
        if ( event.target.name === 'theme' && event.target.value.length <= 2 ) {
            errors.theme = 'El campo "Temática" debe tener más de 2 caracteres';
            isError = true;
        }

        /* Valida si la fecha del campo "Fecha del evento" no es del pasado */
        if ( event.target.name === 'date' ) {

            let currentDate = new Date();
            let entryDate = new Date( event.target.value );

            if ( entryDate < currentDate ) {
                errors.date = 'La fecha no puede ser del pasado';
                isError = true;
            }

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

        /* Valida si el campo "Teléfono" está vacío */
        if ( !data.phone.trim() ) {
            errors.phone = 'El campo "Teléfono" no debe estar vacío';
            isError = true;
        }

        /* Valida si el campo "Producto o Servicio" está vacío */
        if ( !data.service.trim() ) {
            errors.service = 'Debe seleccionar un producto o servicio de interés';
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

        /* Valida si el campo "Fecha" está vacío */
        if ( !data.date.trim() ) {
            errors.date = 'Debe seleccionar una fecha del evento';
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

        /* Sección de Contacto */
        <section className='contact-section'>

            {/* Título dinámico */}
            <DynamicTitle 
                title='Hablemos'
            />

            {/* Caja formulario e información de contacto */}
            <article className='box-form-info-contact-section'>

                {/* Formulario */}
                <div className='form-contact-section'>

                    <form onSubmit={ handleSubmit } autoComplete='off'>

                        {/* Campo Nombre */}
                        <div className='input-group-form-contact-section'>
                            <label htmlFor='name' className={ !activeInput.name ? 'd-block' : 'd-none' }>Nombre</label>
                            <input type='text' name='name' id='name' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />
                            {/* Mensaje de error */}                        
                            {
                                errorsState.name &&
                                <span className='text-error'>{ errorsState.name }</span>
                            }
                        </div>

                        {/* Campo Teléfono */}
                        <div className='input-group-form-contact-section'>
                            <label htmlFor='phone' className={ !activeInput.phone ? 'd-block' : 'd-none' }>Teléfono</label>
                            <input type='text' name='phone' id='phone' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />  
                            {/* Mensaje de error */}                        
                            {
                                errorsState.phone &&
                                <span className='text-error'>{ errorsState.phone }</span>
                            }                    
                        </div>

                        {/* Acordiones del select de Producto o servicio de interés y de tipo de evento */}
                        <Accordion>

                            {/* Select Producto o servicio de interés  */}
                            <Accordion.Item eventKey='0' className='option-accordion-group-form-contact-section'>

                                <Accordion.Header className='header-option-accordion-group-form-contact-section'>
                                    Producto o servicio de interés
                                </Accordion.Header>
                                <Accordion.Body className='body-option-accordion-group-form-contact-section'>

                                    {/* Opción 1 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='option1' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='option1' className='label-radio-group-form-contact-section'>
                                            Opción 1
                                        </label>
                                    </div>

                                    {/* Opción 2 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='option2' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='option2' className='label-radio-group-form-contact-section'>
                                            Opción 2
                                        </label>
                                    </div>

                                    {/* Opción 3 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='opcion3' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='opcion3' className='label-radio-group-form-contact-section'>
                                            Opción 3
                                        </label>
                                    </div>

                                    {/* Opción 4 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='option4' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='option4' className='label-radio-group-form-contact-section'>
                                            Opción 4
                                        </label>
                                    </div>

                                    {/* Opción 5 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='option5' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='option5' className='label-radio-group-form-contact-section'>
                                            Opción 5
                                        </label>
                                    </div>

                                    {/* Opción 6 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='service' id='option 6' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='option 6' className='label-radio-group-form-contact-section'>
                                            Opción 6
                                        </label>
                                    </div>

                                </Accordion.Body>

                                {/* Mensaje de error */}  
                                {
                                    errorsState.service &&
                                    <span className='text-error'>{ errorsState.service }</span>
                                } 

                            </Accordion.Item>

                            {/* Select del tipo de evento */}
                            <Accordion.Item eventKey='1' className='option-accordion-group-form-contact-section'>

                                <Accordion.Header className='header-option-accordion-group-form-contact-section'>
                                    Tipo de Evento
                                </Accordion.Header>
                                <Accordion.Body className='body-option-accordion-group-form-contact-section'>

                                    {/* Opción 1 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='birthday' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='birthday' className='label-radio-group-form-contact-section'>
                                            Cumpleaños
                                        </label>
                                    </div>

                                    {/* Opción 2 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='baby_shower' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='baby_shower' className='label-radio-group-form-contact-section'>
                                            Baby Shower
                                        </label>
                                    </div>

                                    {/* Opción 3 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='christening' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='christening' className='label-radio-group-form-contact-section'>
                                            Bautizo
                                        </label>
                                    </div>

                                    {/* Opción 4 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='communion' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='communion' className='label-radio-group-form-contact-section'>
                                            Comunión
                                        </label>
                                    </div>

                                    {/* Opción 5 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='wedding' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='wedding' className='label-radio-group-form-contact-section'>
                                            Boda
                                        </label>
                                    </div>

                                    {/* Opción 6 */}
                                    <div>
                                        <label className='container-radio-group-form-contact-section'>
                                            <input type='radio' name='event' id='other' onClick={ handleInput } />
                                            <span className='checkmark'></span>
                                        </label>
                                        <label htmlFor='other' className='label-radio-group-form-contact-section'>
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
                        <div className='input-group-form-contact-section'>
                            <label htmlFor='theme' className={ !activeInput.theme ? 'd-block' : 'd-none' }>Temática</label>
                            <input type='text' name='theme' id='theme' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } />
                            {/* Mensaje de error */}                        
                            {
                                errorsState.theme &&
                                <span className='text-error'>{ errorsState.theme }</span>
                            }
                        </div>

                        {/* Campo Fecha del evento */}
                        <div className='input-group-form-contact-section'>
                            <label htmlFor='date' className={ !activeInput.date ? 'd-block' : 'd-none' }>Fecha del evento</label>
                            <input type='date' name='date' id='date' onFocus={ handleFocus } onChange={ handleInput } onBlur={ handleInput } className={ !activeInput.date ? 'color-transparent' : 'color-black' } />
                            {/* Mensaje de error */}                        
                            {
                                errorsState.date &&
                                <span className='text-error'>{ errorsState.date }</span>
                            }
                        </div>

                        {/* Botón de Enviar */}
                        <div className='button-group-contact'>
                            <button type='submit'>Enviar formulario</button>
                            {/* Mensaje de éxito en el envío */}  
                            { formSubmittedState && 
                                <span className='text-success'>El formulario se ha enviado correctamente</span>
                            }
                        </div>

                    </form>

                </div>

                {/* Información de contacto */}
                <div className='info-contact-section'>

                    {/* Instagram */}
                    <a href='https://instagram.com/decopartyibiza' className='social-media-contact-section'>
                        <img src={ iconInstagram } alt='Logo de Instagram' className='icon-social-media-contact-section' />
                        <h6 className='title-social-media-contact-section'>Instagram</h6>
                    </a>

                    {/* Whatsapp */}
                    <a href='https://wa.me/+34644680001' className='social-media-contact-section'>
                        <img src={ iconWhatsapp } alt='Logo de Whatsapp' className='icon-social-media-contact-section' />
                        <h6 className='title-social-media-contact-section'>WhatsApp</h6>
                    </a>

                </div>

            </article>

        </section>

    )
}

export default Contact;