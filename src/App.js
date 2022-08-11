import Main from './pages/homePages/Main';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/homePages/SignUpPage';
import LoginPage from './pages/homePages/LoginPage';
import PricingPage from './pages/homePages/PricingPage';
import ServicePage from './pages/homePages/ServicePage';
import ContactPage from './pages/homePages/ContactPage';
import Dashboard from './pages/dashboardPages/Dashboard';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Main />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/feedback' element={<FeedbackPage />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  );
};

export default App;
