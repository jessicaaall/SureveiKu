import './DashboardBackground.css';
import SideBar from "../../../components/dashboard/sideBar/SideBar";
import DashboardNavigationBar from "../../../components/dashboard/navigationBar/DashboardNavigationBar";
import { Grid, GridItem } from '@chakra-ui/react';

export default function DashboardWrapper(props){
    return(
        <div>
            <Grid
            templateAreas={`"navbar navbar"
                            "sidebar content"
                                `}
            gridTemplateRows={'10vh 90vh'}
            gridTemplateColumns={'250px auto'}
            w='full'
            className='dashboard-bg-image'
            color='blackAlpha.700'
            >
                <GridItem area={'navbar'} zIndex='101'>
                    <DashboardNavigationBar />
                </GridItem>
                <GridItem area={'sidebar'} zIndex='100'>
                    <SideBar/>
                </GridItem>
                <GridItem p={4} area={'content'}>
                    {props.children}
                </GridItem>
            </Grid>
        </div>
    );
}