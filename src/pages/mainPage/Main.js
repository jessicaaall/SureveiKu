// import './Main.css';
import '../../components/dashboard/background/DashboardBackground.css';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import Pricing from '../../components/pricing/Pricing';
import FrontPage from '../../components/frontPage/FrontPage';

const Main = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' spacing={10}>
        <DashboardNavigationBar/>
        <Spacer></Spacer>
        <Flex>
          <SideBar/>
        </Flex>
      </VStack>
    </div>
  );
}

export default Main;
