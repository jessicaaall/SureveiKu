import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import SignUpBox from '../../components/signUpBox/SignUpBox';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const SignUpPage = () => {
  return (
    <div>
      <div className='bg-image'></div>
      <div className="bg-filter"></div>
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
