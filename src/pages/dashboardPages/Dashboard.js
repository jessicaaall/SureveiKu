import '../../components/dashboard/background/DashboardBackground.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-bg-image'></div>
      <VStack w='full' h='full' spacing={10}>
        <DashboardNavigationBar />
        <Spacer></Spacer>
        <Flex>
          <SideBar/>
        </Flex>
      </VStack>
    </div>
  );
};

export default Dashboard;
