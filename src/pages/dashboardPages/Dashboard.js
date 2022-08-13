import '../../components/dashboard/background/DashboardBackground.css';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import { Grid, GridItem } from '@chakra-ui/react';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';

const Dashboard = () => {
  return (
    <Grid
      templateAreas={`"header header"
                          "nav main"
                          `}
      gridTemplateRows={'10vh 1fr'}
      gridTemplateColumns={'250px 1fr'}
      minHeight='100vh'
      w='full'
      color='blackAlpha.700'
      className='dashboard-bg-image'
    >
      <GridItem area={'header'}>
        <DashboardNavigationBar />
      </GridItem>
      <GridItem area={'nav'} zIndex='100'>
        <SideBar />
      </GridItem>
      <GridItem p={4} area={'main'}>
        MASUKIN KOMPONEN KALIAN DI SINI
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
