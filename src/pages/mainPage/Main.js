import './Main.css';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import FrontPage from '../../components/frontPage/FrontPage';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const Main = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar/>
        <Spacer></Spacer>
        <Flex>
          <FrontPage/>
        </Flex>
      </VStack>
    </div>
  );
}

export default Main;
