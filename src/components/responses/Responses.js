import {
    VStack,
    Text,
    HStack,
    Spacer,
    Image,
    Select,
    Box,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";
import FormalHeading from '../FormalHeading';
import "@fontsource/raleway";
import "@fontsource/nunito"

const Responses = () => {
    return ( 
        <VStack h='100%'>
            <HStack alignItems={'left'} w='100%' pb={4}>
                <FormalHeading title='RESPONSES'/>
                <Spacer></Spacer>
                <HStack alignSelf={'end'}>
                    <Image src='./Sheet.png' boxSize='2.5em'/>
                    <Select bg={'#D9D9D9'} borderRadius='20px'>
                        <option value='question'>Responses per Question</option>
                        <option value='individual'>Responses per Individual</option>
                    </Select>
                </HStack>
            </HStack>
            <VStack pt={3} align='left' w='100%' h='full' spacing='22px' overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <Box w='98%' h='auto' bg={'#122543'} color='white' borderRadius='20' pt={2}>
                    <Text pl={'15px'} marginBottom='5px' fontFamily='Raleway' fontSize='20px'>Pertanyaan 1</Text>
                    <Box w='100%' h='auto' bg={'white'} color='black' borderRadius='20' pl={'15px'}>
                        <HStack verticalAlign={'center'}>
                            <Image src='./piechart2.png' boxSize={'9em'}/>
                            <Box>
                                <Text color='black' fontFamily='Nunito'>42% menjawab XX</Text>
                                <Text color='black' fontFamily='Nunito'>33% menjawab YY</Text>
                                <Text color='black' fontFamily='Nunito'>25% menjawab ZZ</Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
                <Box w='98%' h='auto' bg={'#122543'} color='white' borderRadius='20' pt={2}>
                    <Text pl={'15px'} marginBottom='5px' fontFamily='Raleway' fontSize='20px'>Pertanyaan 2</Text>
                    <Box w='100%' h='auto' bg={'white'} color='black' borderRadius='20' pl={5} pt={3} pb={3} pr={4}>
                        <Box overflowY={'scroll'} maxHeight='9em' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                            <Text color='black' fontFamily='Nunito'>Jawaban:</Text>
                            <OrderedList color='black' fontFamily='Nunito'>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                                <ListItem>Lorem Ipsum</ListItem>
                            </OrderedList>
                        </Box>
                    </Box>
                </Box>
                <Box w='98%' h='auto' bg={'#122543'} color='white' borderRadius='20' pt={2}>
                    <Text pl={'15px'} marginBottom='5px' fontFamily='Raleway' fontSize='20px'>Pertanyaan 3</Text>
                    <Box w='100%' h='auto' bg={'white'} color='black' borderRadius='20' pl={5} pt={3} pb={3}>
                    <Image src='./barchart.png' h='9em'/>
                    </Box>
                </Box>
            </VStack>
        </VStack>
     );
}
 
export default Responses;