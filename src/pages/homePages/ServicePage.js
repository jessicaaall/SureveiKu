import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import Service from '../../components/service/Service';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const ServicePage = () => {
    return ( 
    <div>
      <div className='bg-image'></div>
      <div className="bg-filter"></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar />
        <Spacer></Spacer>
        <Flex>
          <Service/>
        </Flex>
      </VStack>
    </div>
     );
}
 
export default ServicePage;