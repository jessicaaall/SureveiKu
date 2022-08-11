import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import Contact from '../../components/contact/Contact';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const ContactPage = () => {
    return ( 
    <div>
      <div className='bg-image'></div>
      <div className="bg-filter"></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar />
        <Spacer></Spacer>
        <Flex>
          <Contact/>
        </Flex>
      </VStack>
    </div>
     );
}
 
export default ContactPage;