import {
    Box,
    Text,
    Image,
    Button,
    VStack,
    HStack,
    Flex,
  } from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';
  
  const RedeemPoint = () => {
    function RewardBox(){
      return(
        <Box w='20em' h='25em' bg='white' boxShadow='0 4px 12px 0 black' borderRadius={20} p={4}>
          <Flex flexDirection='column' alignItems='center' w='100%'>
            <Image src='./amazon-gift-card.jpeg' w='60%' pt={3} pb={4}/>
              <Text fontSize='1.5em' fontWeight='bold' color='black' pb={2}>
                Amazon $5 Giftcard
              </Text>
              <Text color='black' align='center' style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                What is Amazon Pay Gift Card? <br/>
                What is Amazon Pay Gift Card? <br/>
                What is Amazon Pay Gift Card?
                </Text>
                <Box align='center' color='black' pb={2} pt={2}>
                  <Text>Stocks: 9.999</Text>
                  <Text>Points: 450</Text>
                </Box>
                <Button bgColor='#EA8238' color='white' _hover={{ bg: '#d66a1e' }} w='8em' fontWeight='bold' borderRadius={20}>
                  REDEEM
                </Button>
          </Flex>
        </Box>
      )
    }
    return (
      <VStack align='left' h='100%'>
        <FormalHeading title='Redeem Points'></FormalHeading>
        <Text fontFamily='Raleway' color='white' fontSize='35px' fontWeigt='bold'>
          Your points : 17.000
        </Text>
        <Box w='160vh' overflowX='auto' whiteSpace='nowrap' css={{"&::-webkit-scrollbar": {height:"10px", width:'10px',},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
          <HStack pb={10} spacing='50px'>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
          </HStack>
          <HStack pb={10} spacing='50px'>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
          </HStack>
          <HStack pb={10} spacing='50px'>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
          </HStack>
        </Box>
      </VStack>
    );
  };
  
  export default RedeemPoint;