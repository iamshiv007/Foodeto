import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/home/Home';
import { useDispatch } from 'react-redux';
import { loadUser } from './featured/actions/userActions';
import { useEffect } from 'react';
import Profile from './components/user/Profile';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>

          <Route exact element={<Login />} path='/login' />
          <Route exact element={<Register />} path='/signup' />
          <Route exact element={<Home />} path='/' />
          <Route exact element={<Profile />} path='/profile' />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
