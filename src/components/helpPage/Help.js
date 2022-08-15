import {Box, Text, VStack, Spacer, Accordion, AccordionItem, AccordionButton, AccordionPanel} from '@chakra-ui/react';
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons';
import FormalHeading from '../FormalHeading';
import "@fontsource/krona-one";


const HelpPage = () => {
    return (
        <VStack align='left' paddingLeft='20px' h='100%'>
            <FormalHeading title='Help'/>
            <Text color='white' fontSize={'18px'} pb={3}>
                Kontak Customer Service : cs@sureveiku.com
            </Text>
            <VStack align='left' overflowY={'auto'} w='auto' h='full' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <Text color='white' fontSize={'22px'} pt={3} pb={3} fontFamily='Krona One'>
                    Creating Surveys
                </Text>
                <VStack align='left' spacing={4}>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' h='40px' fontSize='15px' fontWeight='600' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        How to create a survey?
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' h='90px' borderRadius='25px' bgColor='white' color='black' fontSize='13px' pl={4} pr={4} pt={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci sit amet elementum placerat, felis odio mattis arcu, sed dignissim magna felis vitae tellus. Donec id dapibus arcu. Nullam sodales eget massa eget auctor. Sed et hendrerit quam. Nam ut odio imperdiet, pellentesque diam nec, convallis nibh. Donec suscipit odio purus, sit amet venenatis sem imperdiet nec. Quisque id condimentum metus. Nam sed purus sed lacus semper lobortis ut a augue.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' h='40px' fontSize='15px' fontWeight='600' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        What types of questions can I add to my survey?
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' h='90px' borderRadius='25px' bgColor='white' color='black' fontSize='13px' pl={4} pr={4} pt={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci sit amet elementum placerat, felis odio mattis arcu, sed dignissim magna felis vitae tellus. Donec id dapibus arcu. Nullam sodales eget massa eget auctor. Sed et hendrerit quam. Nam ut odio imperdiet, pellentesque diam nec, convallis nibh. Donec suscipit odio purus, sit amet venenatis sem imperdiet nec. Quisque id condimentum metus. Nam sed purus sed lacus semper lobortis ut a augue.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' h='40px' fontSize='15px' fontWeight='600' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        How to create surveys from templates?
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' h='90px' borderRadius='25px' bgColor='white' color='black' fontSize='13px' pl={4} pr={4} pt={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci sit amet elementum placerat, felis odio mattis arcu, sed dignissim magna felis vitae tellus. Donec id dapibus arcu. Nullam sodales eget massa eget auctor. Sed et hendrerit quam. Nam ut odio imperdiet, pellentesque diam nec, convallis nibh. Donec suscipit odio purus, sit amet venenatis sem imperdiet nec. Quisque id condimentum metus. Nam sed purus sed lacus semper lobortis ut a augue.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>               
                </VStack>
                <Text color='white' pt={7} pb={3} fontSize={'22px'} fontFamily='Krona One'>
                    Analyzing Results
                </Text>
                <VStack align='left' spacing={4}>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' h='40px' fontSize='15px' fontWeight='600' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        How to analyze survey results?
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' h='90px' borderRadius='25px' bgColor='white' color='black' fontSize='13px' pl={4} pr={4} pt={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci sit amet elementum placerat, felis odio mattis arcu, sed dignissim magna felis vitae tellus. Donec id dapibus arcu. Nullam sodales eget massa eget auctor. Sed et hendrerit quam. Nam ut odio imperdiet, pellentesque diam nec, convallis nibh. Donec suscipit odio purus, sit amet venenatis sem imperdiet nec. Quisque id condimentum metus. Nam sed purus sed lacus semper lobortis ut a augue.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' h='40px' fontSize='15px' fontWeight='600' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        How to view individual responses?
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' h='90px' borderRadius='25px' bgColor='white' color='black' fontSize='13px' pl={4} pr={4} pt={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci sit amet elementum placerat, felis odio mattis arcu, sed dignissim magna felis vitae tellus. Donec id dapibus arcu. Nullam sodales eget massa eget auctor. Sed et hendrerit quam. Nam ut odio imperdiet, pellentesque diam nec, convallis nibh. Donec suscipit odio purus, sit amet venenatis sem imperdiet nec. Quisque id condimentum metus. Nam sed purus sed lacus semper lobortis ut a augue.
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion> 
                    <Spacer></Spacer>    
                    <Spacer></Spacer>    
                </VStack>
            </VStack>
        </VStack>
    );
};

export default HelpPage;