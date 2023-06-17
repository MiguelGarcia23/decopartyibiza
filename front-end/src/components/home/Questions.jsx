/* Importando componentes de React Bootstrap */
import { Accordion } from 'react-bootstrap';

/* Importando componentes propios */
import DynamicTitle from '../partials/DynamicTitle';

/* Importando estilos del Home */
import '../../css/Home.css';


const Questions = () => {

    return (

        /* Sección de Preguntas Frecuentes */
        <section className='questions-section'>

            {/* Título dinámico */}
            <DynamicTitle 
                title='Preguntas frecuentes'
            />

            {/* Acordión de opciones de preguntas frecuentes */}
            <article className='accordion-question-section'>

                <Accordion>

                    <Accordion.Item eventKey='0' className='option-accordion-question-section'>

                        <Accordion.Header className='header-option-accordion-question-section'>
                            ¿Cómo puedo realizar un pedido?
                        </Accordion.Header>
                        <Accordion.Body className='body-option-accordion-question-section'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>

                    </Accordion.Item>

                    <Accordion.Item eventKey='1' className='option-accordion-question-section'>

                        <Accordion.Header className='header-option-accordion-question-section'>
                            ¿Cúal es el plazo de realización de los productos?
                        </Accordion.Header>
                        <Accordion.Body className='body-option-accordion-question-section'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>

                    </Accordion.Item>

                    <Accordion.Item eventKey='2' className='option-accordion-question-section'>

                        <Accordion.Header className='header-option-accordion-question-section'>
                            ¿Sólo venden en Ibiza?
                        </Accordion.Header>
                        <Accordion.Body className='body-option-accordion-question-section'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>

                    </Accordion.Item>

                    <Accordion.Item eventKey='3' className='option-accordion-question-section'>

                        <Accordion.Header className='header-option-accordion-question-section'>
                            ¿El precio mostrado es el precio definitivo del producto?
                        </Accordion.Header>
                        <Accordion.Body className='body-option-accordion-question-section'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>

                    </Accordion.Item>

                </Accordion>

            </article>

        </section>

    )
}

export default Questions;