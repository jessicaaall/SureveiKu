import '../../components/dashboard/background/DashboardBackground.css';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import { Grid, GridItem } from '@chakra-ui/react';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';

const Dashboard = () => {
  return (
    <Grid
      templateAreas={`"navbar navbar"
                      "sidebar content"
                          `}
      gridTemplateRows={'10%'}
      gridTemplateColumns={'250px auto'}
      minHeight='100vh'
      w='full'
      color='blackAlpha.700'
      className='dashboard-bg-image'
    >
      <GridItem area={'navbar'} zIndex='101'>
        <DashboardNavigationBar />
      </GridItem>
      <GridItem area={'sidebar'} zIndex='100'>
        <SideBar/>
      </GridItem>
      <GridItem p={4} area={'content'}>
        MASUKIN KOMPONEN KALIAN DI SINI
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
