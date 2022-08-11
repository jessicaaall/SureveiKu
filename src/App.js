import Main from './pages/mainPage/Main';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PricingPage from './pages/PricingPage';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        navigate('/dashboard', { replace: true });
      } else {
        navigate('/home', { replace: true });
      }
    });
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Main />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  );
};

export default App;
