import {
    Box,
    Text,
    Image,
    Button,
    VStack,
    HStack,
    Flex
  } from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';
  
  const RedeemPoint = () => {
    function RewardBox(){
      return(
        <Box w='300px' h='550px' bg='white' boxShadow='0 4px 12px 0 black' borderRadius={20} p={4}>
          <VStack>
            <Image src='./amazon-gift-card.jpeg' w={'15em'} pt={3} pb={4}/>
            <Box pb={6}>
              <Text fontSize='1.5em' fontWeight='bold' color='black' align='center' pb={2}>
                Amazon $5 Giftcard
              </Text>
              <Text align='left' color='black' fontSize='16px'>
                What is Amazon Pay Gift Card? Amazon Pay Gift Cards are pre-paid
                gift instruments that can be redeemed for purchasing items on Amazon.in
                and it's partner merchants.
              </Text>
            </Box>
            <Box align='center' color='black' pb={2}>
              <Text>Stocks: 9.999</Text>
              <Text>Points: 1.000</Text>
            </Box>
            <Box>
              <Button bgColor='#EA8238' color='white' _hover={{ bg: '#d66a1e' }} w='8em' fontWeight='bold' borderRadius={20}>
                REDEEM
              </Button>
            </Box>
          </VStack>
        </Box>
      )
    }
    return (
      <VStack align='left' w='100%'>
        <FormalHeading title='REDEEM POINTS'></FormalHeading>
        <Text fontFamily='Raleway' color='white' fontSize='35px' fontWeigt='bold'>
          Your points : 17.000
        </Text>
        <Box overflowX='auto' whiteSpace='nowrap' css={{"&::-webkit-scrollbar": {height:"10px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
          <HStack pb={5} spacing='50px'>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
            <RewardBox/>
          </HStack>
        </Box>
      </VStack>

    );
  };
  
  export default RedeemPoint;