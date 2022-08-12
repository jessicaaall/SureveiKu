import '../../components/dashboard/background/DashboardBackground.css';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import { Grid, GridItem } from '@chakra-ui/react'
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-bg-image'>
        <Grid
          templateAreas={`"header header"
                          "nav main"
                          `}
          gridTemplateRows={'12vh'}
          gridTemplateColumns={'250px auto'}
          h='full'
          w='full'
          color='blackAlpha.700'
        >
          <GridItem area={'header'}>
            <DashboardNavigationBar />
          </GridItem>
          <GridItem area={'nav'}>
            <SideBar/>
          </GridItem>
          <GridItem p={4} bg='orange.400' area={'main'}>
            MASUKIN KOMPONEN KALIAN DI SINI
            {/* MASUKIN KOMPONEN KALIAN DI SINI */}
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
