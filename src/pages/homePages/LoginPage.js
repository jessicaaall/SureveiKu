import MainWrapper from './mainWrapper/MainWrapper';
import LoginBox from '../../components/loginBox/LoginBox';
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        navigate('/dashboard', { replace: true });
      }
    });
  }, []);

  return (
    <MainWrapper>
      <LoginBox />
    </MainWrapper>
  );
};

export default LoginPage;
