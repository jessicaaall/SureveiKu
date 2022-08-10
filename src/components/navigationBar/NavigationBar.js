import './NavigationBar.css';
import {
  VStack,
  Flex,
  Spacer,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { NavLink } from 'react-router-dom';
import LogoHome from '../../components/LogoHome';

const NavigationBar = () => {
  return (
    <div className='NavBar'>
      <Box bg='whiteAlpha.300'>
        <VStack p={5} w='full'>
          <Flex w='100%'>
            <Stack direction='row' spacing={10} align='center'>
              <NavLink to='/home'>
                <LogoHome />
              </NavLink>
              <NavLink to='/home'>
                <Link to color='white' fontSize='16pt'>
                  Home
                </Link>
              </NavLink>
              <Link color='white' fontSize='16pt'>
                Pricing
              </Link>
              <Link color='white' fontSize='16pt'>
                Service
              </Link>
              <Link color='white' fontSize='16pt'>
                Contact
              </Link>
              <Link color='white' fontSize='16pt'>
                Feedback
              </Link>
            </Stack>
            <Spacer></Spacer>
            <Stack direction='row' spacing={4} align='center'>
              <NavLink to='/login'>
                <Button colorScheme='orange' size='md'>
                  Login
                </Button>
              </NavLink>
              <NavLink to='/signup'>
                <Button colorScheme='orange' size='md'>
                  Sign Up
                </Button>
              </NavLink>
            </Stack>
          </Flex>
        </VStack>
      </Box>
    </div>
  );
};

export default NavigationBar;
