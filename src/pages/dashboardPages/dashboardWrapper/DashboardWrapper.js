import './DashboardBackground.css';
import SideBar from "../../../components/dashboard/sideBar/SideBar";
import DashboardNavigationBar from "../../../components/dashboard/navigationBar/DashboardNavigationBar";
import { Grid, GridItem } from '@chakra-ui/react';

export default function DashboardWrapper(props){
    return(
        <div className='dashboard-bg-image'>
            <Grid
            templateAreas={`"navbar navbar"
                            "sidebar content"
                                `}
            gridTemplateRows={'10vh 90vh'}
            gridTemplateColumns={'250px auto'}
            w='full'
            color='blackAlpha.700'
            >
                <GridItem area={'navbar'} zIndex='101'>
                    <DashboardNavigationBar />
                </GridItem>
                <GridItem area={'sidebar'} zIndex='100'>
                    <SideBar/>
                </GridItem>
                <GridItem p={8} area={'content'} paddingBottom={props.marginBawah}>
                    {props.children}
                </GridItem>
            </Grid>
        </div>
    );
}