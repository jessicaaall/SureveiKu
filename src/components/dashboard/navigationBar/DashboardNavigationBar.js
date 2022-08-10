import './DashboardNavigationBar.css';
import Logo from './Logo';
import DashboardProfile from './DashboardProfile';
import {Flex, Stack, Box, Spacer} from '@chakra-ui/react';


const DashboardNavigationBar = () => {
    return (
        <div className='dashboard-navigation-bar'>
            <Box bg='white' w='full' p={4}>
                <Flex w='full'>
                    <Stack direction='row' align='center'>
                    <Logo/>
                    </Stack>
                    <Spacer></Spacer>
                    <DashboardProfile/>
                </Flex>
            </Box>
        </div>
    );
}
 
export default DashboardNavigationBar;