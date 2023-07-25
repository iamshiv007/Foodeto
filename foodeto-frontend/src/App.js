import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './featured/actions/userActions';
import { useEffect } from 'react';
import Profile from './components/user/Profile';
import PartnerLogin from './components/partner/PartnerLogin';
import PartnerRegister from './components/partner/PartnerRegister';
import { loadpartner } from './featured/partnerActions/partnerActions';
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const { isAuthenticated } = useSelector((state) => state.auth)
  const { isPartner } = useSelector((state) => state.authPartner)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(loadpartner())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>

          <Route exact element={<Login />} path='/login' />

          <Route exact element={<Register />} path='/signup' />
          {!isPartner && <Route exact element={<Home />} path='/' />}
          <Route exact element={<Profile />} path='/profile' />

          {/* Partner */}
          <Route exact element={<PartnerLogin />} path='/partner/login' />
          <Route exact element={<PartnerRegister />} path='/partner/signup' />
          {!isAuthenticated && <Route exact element={<Dashboard />} path='/dashboard' />}
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
