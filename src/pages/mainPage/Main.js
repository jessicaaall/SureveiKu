import './Main.css';
import LoginBox from '../../components/loginBox/LoginBox';
import SignUpBox from '../../components/signUpBox/SignUpBox';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import NavigationBar from '../../components/navigationBar/NavigationBar';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';

const Main = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' alignItems="center" spacing={10}>
        <DashboardNavigationBar/>
        <Spacer>
        </Spacer>
        <Flex>
          {/* <LoginBox/> */}
          <SignUpBox/>
        </Flex>
      </VStack>
    </div>
  );
}

export default Main;
