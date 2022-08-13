import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import SignUpBox from '../../components/signUpBox/SignUpBox';
import NavigationBar from '../../components/navigationBar/NavigationBar';
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
    <div>
      <div className='bg-image'></div>
      <div className='bg-filter'></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar />
        <Spacer></Spacer>
        <Flex>
          <SignUpBox />
        </Flex>
      </VStack>
    </div>
  );
};

export default SignUpPage;
