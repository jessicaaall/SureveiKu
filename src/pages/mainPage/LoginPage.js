import './Main.css';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import LoginBox from '../../components/loginBox/LoginBox';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const LoginPage = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar/>
        <Spacer></Spacer>
        <Flex>
          <LoginBox/>
        </Flex>
      </VStack>
    </div>
  );
}

export default LoginPage;
