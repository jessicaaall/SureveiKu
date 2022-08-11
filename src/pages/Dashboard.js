import './mainPage/Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import SideBar from '../components/dashboard/sideBar/SideBar';
import DashboardNavigationBar from '../components/dashboard/navigationBar/DashboardNavigationBar';

const SignUpPage = () => {
  return (
    <div>
      <div className='bg-image'></div>
      <div className="bg-filter"></div>
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

export default SignUpPage;
