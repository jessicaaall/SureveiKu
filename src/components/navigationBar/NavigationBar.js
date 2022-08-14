import {
  Spacer,
  Button,
  HStack,
  Text
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import LogoHome from '../../components/LogoHome';


function WhereAmI({link, children}){
  const path = window.location.pathname;
  return (
    <NavLink to={link}>
      <Text 
      color='white' 
      fontSize='16pt' 
      _hover={{bgGradient: "linear-gradient(to right, #FF9F45, #F76E11)"}}
      padding={5}
      bgGradient={path === link ? "linear-gradient(to right, #FF9F45, #F76E11)" : ""}
      >{children}</Text>
    </NavLink>
  );
}

const NavigationBar = () => {
  let styles = {
    navbar: {
      width: '100%',
      position: 'fixed'
    }
  };
  return (
    <div style={styles.navbar}>
      <HStack spacing={10} padding={5} h='10vh' alignItems={'center'} justify='space-between' bg='whiteAlpha.300' broderRadius={4}>
          <NavLink to='/home'>
            <LogoHome />
          </NavLink>
          <WhereAmI link='/home'>Home</WhereAmI>
          <WhereAmI link='/pricing'>Pricing</WhereAmI>
          <WhereAmI link='/service'>Service</WhereAmI>
          <WhereAmI link='/contact'>Contact</WhereAmI>
          <WhereAmI link='/feedback'>Feedback</WhereAmI>
        <Spacer></Spacer>
        <HStack>
        <NavLink to='/login'>
            <Button 
            color='white'
            bg="#FF9F45"
            borderRadius='10'
            _hover={{ bg:'#F76E11' }}
            _active={{bg:'#F76E11'}}
            size='md'>
              Login
            </Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button 
              color='white'
              bg="#F76E11"
              borderRadius='10'
              _hover={{ bg:'#FF9F45' }}
              _active={{bg:'#FF9F45'}}
              size='md'>
                SignUp
              </Button>
          </NavLink>
        </HStack>
        </HStack>
    </div>
  );
};

export default NavigationBar;
