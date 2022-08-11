import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import Contact from '../../components/contact/Contact';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const ContactPage = () => {
  return (
    <div>
      <div className='bg-image'></div>
      <div className='bg-filter'></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar />
        <Spacer></Spacer>
        <Flex>
          <Contact />
        </Flex>
      </VStack>
    </div>
<<<<<<< HEAD:src/pages/ContactPage.js
  );
};

export default ContactPage;
=======
     );
}
 
export default ContactPage;
>>>>>>> 4769a2ce8876e2d197758156e0f70d8489b10065:src/pages/homePages/ContactPage.js
