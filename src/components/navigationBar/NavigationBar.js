import {
  Spacer,
  Button,
  HStack,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import LogoHome from '../../components/LogoHome';

const NavigationBar = () => {
  let styles = {
    navbar: {
      width: '100%',
      position: 'fixed'
    }
  }

  return (
    <div style={styles.navbar}>
      <HStack spacing={10} padding={5} h='10vh' alignItems={'center'} justify='space-between' bg='whiteAlpha.300' broderRadius={4}>
          <NavLink to='/home'>
            <LogoHome />
          </NavLink>
          <NavLink to='/home'>
            <Link to color='white' fontSize='16pt'>
              Home
            </Link>
          </NavLink>
          <NavLink to='/pricing'>
            <Link color='white' fontSize='16pt'>
                Pricing
            </Link>
          </NavLink>
          <NavLink to='/service'>
            <Link color='white' fontSize='16pt'>
              Service
            </Link>
          </NavLink>
          <NavLink to='/contact'>
            <Link color='white' fontSize='16pt'>
              Contact
            </Link>
          </NavLink>
          <NavLink to='/feedback'>
            <Link color='white' fontSize='16pt'>
              Feedback
            </Link>
          </NavLink>
        <Spacer></Spacer>
        <HStack>
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
          <NavLink to='/dashboard'>
            <Button colorScheme='teal' size='md'>
              KE DASHBOARD (SEMENTARA)
            </Button>
          </NavLink>
        </HStack>
        </HStack>
    </div>
  );
};

export default NavigationBar;
