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

const Responses = () => {
    return ( 
        <VStack>
            <HStack alignItems={'left'} w='100%'>
                <Text color='white' fontSize={'2.4em'} fontWeight='semibold'>
                    RESPONSES
                </Text>
                <Spacer></Spacer>
                <HStack alignSelf={'end'}>
                    <Image src='./Sheet.png' boxSize='2.5em'/>
                    <Select bg={'#D9D9D9'} borderRadius='20px'>
                        <option value='question'>Responses per Question</option>
                        <option value='individual'>Responses per Individual</option>
                    </Select>
                </HStack>
            </HStack>
            <Spacer></Spacer>
            <VStack w='100%' spacing={99}>
                <Box w='100%' h='100px'bg={'#122543'} color='white' borderRadius='20' paddingTop='7px'>
                    <Text paddingLeft={'15px'} marginBottom='5px'>Pertanyaan 1</Text>
                    <Box w='100%' h='150px'bg={'white'} color='black' borderRadius='20' paddingLeft={'15px'}>
                        <HStack verticalAlign={'center'}>
                            <Image src='./piechart2.png' boxSize={'9em'}/>
                            <Box>
                                <Text>42% menjawab XX</Text>
                                <Text>33% menjawab YY</Text>
                                <Text>25% menjawab ZZ</Text>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
                <Box w='100%' h='100px'bg={'#122543'} color='white' borderRadius='20' paddingTop='7px'>
                    <Text paddingLeft={'15px'} marginBottom='5px'>Pertanyaan 2</Text>
                    <Box w='100%' h='150px'bg={'white'} color='black' borderRadius='20' paddingLeft={'30px'} paddingTop='3px'>
                        <Text>Jawaban:</Text>
                        <OrderedList>
                            <ListItem>Lorem Ipsum</ListItem>
                            <ListItem>Lorem Ipsum</ListItem>
                            <ListItem>Lorem Ipsum</ListItem>
                            <ListItem>Lorem Ipsum</ListItem>
                            <ListItem>Lorem Ipsum</ListItem>
                        </OrderedList>
                    </Box>
                </Box>
                <Box w='100%' h='100px'bg={'#122543'} color='white' borderRadius='20' paddingTop='7px'>
                    <Text paddingLeft={'15px'} marginBottom='5px'>Pertanyaan 3</Text>
                    <Box w='100%' h='150px'bg={'white'} color='black' borderRadius='20' paddingLeft={'15px'} paddingTop='7px' paddingRight={'15px'} paddingBottom='7px'>
                    <Image src='./barchart.png' h='9em'/>
                    </Box>
                </Box>
            </VStack>
        </VStack>
     );
}
 
export default Responses;