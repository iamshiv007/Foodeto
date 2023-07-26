import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/home/Home';
import { useDispatch } from 'react-redux';
import { loadUser } from './featured/actions/userActions';
import { useEffect } from 'react';
import Profile from './components/user/Profile';
import PartnerLogin from './components/partner/PartnerLogin';
import PartnerRegister from './components/partner/PartnerRegister';
import { loadpartner } from './featured/partnerActions/partnerActions';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/layout/notFound/NotFound';

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


          {/* Partner */}
          <Route exact element={<PartnerLogin />} path='/partner/login' />
          <Route exact element={<PartnerRegister />} path='/partner/signup' />
          <Route exact element={<Dashboard />} path='/dashboard' />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
