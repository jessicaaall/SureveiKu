import './Main.css';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';
import NavigationBar from '../../components/navigationBar/NavigationBar';
import FeedbackBox from '../../components/feedbackBox/FeedbackBox';

const FeedbackPage = () => {
    return (
        <div>
          <div className='bg-image'></div>
          <div className="bg-filter"></div>
          <VStack w='full' h='full' spacing={10}>
            <NavigationBar />
            <Spacer></Spacer>
            <Flex>
                <FeedbackBox/>
            </Flex>
          </VStack>
        </div>
      );
    };
 
export default FeedbackPage;