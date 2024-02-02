import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup'
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import coverbanner from './Components/Assest/coverbanner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={coverbanner} category='men' />}/>
          <Route path='/womens' element={<ShopCategory banner={coverbanner} category='women' />}/>
          <Route path='/kids' element={<ShopCategory banner={coverbanner} category='kids' />}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
        </Routes>
        <Footer/>      
      </BrowserRouter>

    </div>
  ); 
}

export default App;
