/* Importando funcionalidades para el ruteo de la App */
import { Routes, Route } from 'react-router-dom';

/* Importando componentes propios */
import HomePage from './home/HomePage';
import ProductsPage from './products/ProductsPage';
import ProductDetailPage from './product-detail/ProductDetailPage';
import CartPage from './cart/CartPage';
import ContactPage from './contact/ContactPage';

/* Importando estilos de la App */
import '../css/App.css';


const App = () => {

  return (

    <div className='App'>

      {/* Rutas de la App */}
      <Routes>

        {/* Home Page */}
        <Route path='/' element={ <HomePage /> } />

        {/* Página del Listado de Productos */}
        <Route path='/products' element={ <ProductsPage /> } />

        {/* Página del Detalle del Producto */}
        <Route path='/products/:id' element={ <ProductDetailPage /> } />

        {/* Página de Carrito de Compras */}
        <Route path='/cart' element={ <CartPage /> } />

        {/* Página de Contacto */}
        <Route path='/contact' element={ <ContactPage /> } />

      </Routes>

    </div>

  );
}

export default App;