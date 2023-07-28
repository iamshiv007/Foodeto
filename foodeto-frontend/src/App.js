import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/user/auth/Login';
import Register from './components/user/auth/Register';
import Home from './components/home/Home';
import { useDispatch } from 'react-redux';
import { loadUser } from './featured/actions/userActions';
import { useEffect } from 'react';
import Profile from './components/user/profile/Profile';
import PartnerLogin from './components/partner/auth/PartnerLogin';
import PartnerRegister from './components/partner/auth/PartnerRegister';
import { loadpartner } from './featured/partnerActions/partnerActions';
import NotFound from './components/layout/notFound/NotFound';
import NewProduct from './components/partner/product/NewProduct';
import Products from './components/product/Products';
import PartnerProducts from './components/partner/product/PartnerProducts';
import EditProduct from './components/partner/product/EditProduct';
import Dashboard from './components/partner/dashboard/Dashboard';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadpartner())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>

          {/* User */}
          <Route exact element={<Login />} path='/login' />
          <Route exact element={<Register />} path='/signup' />
          <Route exact element={<Home />} path='/' />
          <Route exact element={<Profile />} path='/profile' />
          <Route exact element={<Products />} path='/products' />


          {/* Partner */}
          <Route exact element={<PartnerLogin />} path='/partner/login' />
          <Route exact element={<PartnerRegister />} path='/partner/signup' />
          <Route exact element={<Dashboard />} path='/dashboard' />

          <Route exact path='/product/new' element={<NewProduct />} />
          <Route exact path='/partner/products' element={<PartnerProducts />} />

          <Route exact path='/partner/product/update/:id' element={<EditProduct />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
