import Logo from '../../Logo';
import {Flex, Stack, Box} from '@chakra-ui/react';


const DashboardNavigationBar = () => {
    return (
        <Box bg='whiteAlpha.900'>
            <Flex w='100%'>
                <Stack direction='row' align='center'>
                <Logo/>
                </Stack>
            </Flex>
        </Box>
    );
}
 
export default DashboardNavigationBar;