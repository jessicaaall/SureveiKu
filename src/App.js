import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignUpPage from './pages/homePages/SignUpPage';
import LoginPage from './pages/homePages/LoginPage';
import PricingPage from './pages/homePages/PricingPage';
import ServicePage from './pages/homePages/ServicePage';
import ContactPage from './pages/homePages/ContactPage';
import FeedbackPage from './pages/homePages/FeedbackPage';
import Dashboard from './pages/dashboardPages/Dashboard';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AvailableSurvey from './pages/dashboardPages/AvailableSurvey';
import ToSPage from './pages/dashboardPages/ToSPage';
import FrontPage from './pages/homePages/FrontPage';
import PrivacyPolicyPage from './pages/dashboardPages/PrivacyPolicyPage';
import HelpPage from './pages/dashboardPages/HelpPage';
import RedeemPoints from './pages/dashboardPages/RedeemPoints';
import CreateSurvey from './pages/dashboardPages/CreateSurvey';
import MySurveys from './pages/dashboardPages/MySurveys';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        navigate('/home', { replace: true });
      }
    });
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<FrontPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
        <Route path='/redeempoints' element={<RedeemPoints/>} />
        <Route path='/createsurvey' element={<CreateSurvey/>} />
        <Route path='/mysurveys' element={<MySurveys/>} />
        <Route path='/available-surveys' element={<AvailableSurvey />} />
        <Route path='/help' element={<HelpPage/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicyPage />} />
        <Route path='/tos' element={<ToSPage/>} />
        
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  );
};

export default App;
