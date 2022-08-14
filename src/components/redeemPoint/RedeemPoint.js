import {
    Box,
    Text,
    Image,
    Spacer,
    Stack,
    Button,
    VStack,
    SimpleGrid,
  } from '@chakra-ui/react';
  import FormalHeading from '../FormalHeading';
  
  const RedeemPoint = () => {
    function RewardBox(){
      return(
        <Box
          w='300px'
          h='550px'
          bg='white'
          boxShadow='0 4px 12px 0 black'
          borderRadius={20}
          padding={5}
        >
          <Stack w='100%' h='100%'>
            <Spacer></Spacer>
            <Box boxSize={'15em'} w='100%'>
              <Spacer></Spacer>
              <Image src='./amazon-gift-card.jpeg' />
            </Box>
            <Box>
              <Text
                fontSize='1.5em'
                fontWeight='bold'
                color='black'
                align='center'
              >
                Amazon $5 Giftcard
              </Text>
              <Text align='left' color='black'>
                What is Amazon Pay Gift Card? Amazon Pay Gift Cards are pre-paid
                gift instruments that can be redeemed for purchasing items on Amazon.in
                and it's partner merchants.
              </Text>
            </Box>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Text align='center' color='black'>Stocks: 9.999</Text>
            <Text align='center' color='black'>Points: 1.000</Text>
            <Box align='center'>
              <Button
                bgColor='#EA8238'
                color='white'
                _hover={{ bg: '#d66a1e' }}
                w='80%'
                fontWeight='bold'
                borderRadius={20}
              >
                REDEEM
              </Button>
            </Box>
            <Spacer></Spacer>
          </Stack>
        </Box>
      )
    }
    return (
        <VStack align='center' h='100%'>
            <FormalHeading title='Redeem Points'></FormalHeading>
            <Text fontWeight='bold' fontSize='2em' color='white' align='center'>
            Your Points: 17.000
            </Text>
            <SimpleGrid columns={3} spacingX={20} pt={4} pb={4} pr={2} spacingY='10' overflowY={'scroll'} w='auto' h='full' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <RewardBox/>
                <RewardBox/>
                <RewardBox/>
                <RewardBox/>
                <RewardBox/>
                <RewardBox/>
                <Spacer/>
            </SimpleGrid>
        </VStack>
    );
  };
  
  export default RedeemPoint;