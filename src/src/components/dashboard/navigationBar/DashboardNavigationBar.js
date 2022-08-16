import './DashboardNavigationBar.css';
import Logo from '../../Logo';
import DashboardProfile from './DashboardProfile';
import {HStack, Stack, Box, Spacer} from '@chakra-ui/react';


const DashboardNavigationBar = () => {
    return (
        <div className='dashboard-navigation-bar'>
            <Box bg='white' w='full' p={4} h='10vh'>
                <HStack direction='row' w='full' h='full' alignItems='center'>
                    <Stack direction='row' align='center'>
                    <Logo/>
                    </Stack>
                    <Spacer></Spacer>
                    <DashboardProfile/>
                </HStack>
            </Box>
        </div>
    );
}
 
export default DashboardNavigationBar;