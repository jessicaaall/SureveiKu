import Main from './pages/mainPage/Main';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Main />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  );
};

export default App;
