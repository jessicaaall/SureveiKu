import './Main.css';
import LoginBox from '../../components/loginBox/LoginBox';
import SignUpBox from '../../components/signUpBox/SignUpBox';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import NavigationBar from '../../components/navigationBar/NavigationBar';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import Pricing from '../../components/pricing/Pricing';
import FrontPage from '../../components/frontPage/FrontPage';

const Main = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' alignItems="center" spacing={10}>
        <DashboardNavigationBar/>
        <Spacer>
        </Spacer>
        <Flex>
          <SideBar/>
        </Flex>
      </VStack>
    </div>
  );
}

export default Main;
