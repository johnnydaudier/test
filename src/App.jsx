import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
import Others from './Components/Others/Others';
function App() {
 
  
  const hi = 'Hola, este es un mensaje de saludo ';
 
  
  
  return (
    <BrowserRouter>
    
        <div
          className='App'
        >
          <NavBar />
          <Routes>
            
              <Route path='/' element={<ItemListContainer greeting={hi}/>} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} /> 
              <Route path='/categoria/:categoriaId'  element={<ItemListContainer greeting={hi} />} />
              <Route path='/cart' element={<Cart />} />   
              <Route path='/*' element={<Navigate to='/' replace/>}/>     
              <Route path='/account' element={<Account />} /> 
              <Route path='/others' element={<Others />} /> 
                        
          </Routes>     
          
        </div>
    
    </BrowserRouter>

  );
}


export default App;
