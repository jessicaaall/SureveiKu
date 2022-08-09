import Logo from './Logo';
import DashboardProfile from './DashboardProfile';
import {Flex, Stack, Box, Spacer} from '@chakra-ui/react';


const DashboardNavigationBar = () => {
    return (
        <Box bg='whiteAlpha.900' w='full' p={4}>
            <Flex w='full'>
                <Stack direction='row' align='center'>
                <Logo/>
                </Stack>
                <Spacer></Spacer>
                <DashboardProfile/>
            </Flex>
        </Box>
    );
}
 
export default DashboardNavigationBar;