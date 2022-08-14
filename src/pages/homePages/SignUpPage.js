import MainWrapper from "./mainWrapper/MainWrapper";
import SignUpBox from '../../components/signUpBox/SignUpBox';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const SignUpPage = () => {
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
      <SignUpBox/>
    </MainWrapper>
  );
};

export default SignUpPage;
