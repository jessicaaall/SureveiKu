import {Box, HStack, Image, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, Spacer} from "@chakra-ui/react";
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons';
import FormalHeading from "../FormalHeading";
  
const AnalysisPage = () => {
    return(
            <VStack align="left" h="100%">
                <FormalHeading title="Analysis Page"/>
                <Spacer></Spacer>
                <Spacer></Spacer>
                <VStack align='left' spacing={5} overflowY='auto' w="auto" h="full" css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:"#D9D9D9", borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:"#122543", borderRadius:"50px",},}}>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' fontSize='18px' fontWeight='bold' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        Persentase Ketercapaian Target Responden Survei Online
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' borderRadius='25px' bgColor='white'>
                                    <HStack p={2} w='100%'>
                                        <Image h='15em' src="roundedchart_analysis.png"/>
                                        <Box pr={4} fontSize="15px" align="left">
                                            <Text as="span" color="black">
                                                Berdasarkan data tersebut dapat dilihat bahwa mahasiswa yang dapat mencapai target
                                                responden sruvei online mereka</Text>
                                            <Text as="span" color="#AB2B2B"> kurang dari 50%</Text>
                                            <Text as="span" color="black">, yaitu hanya sekitar</Text>
                                            <Text as="span" color="#EA8238"> 35,2%</Text>
                                            <Text as="span" color="black">. Hal ini menunjukkan bahwa adanya kesulitan yang cukup berarti yang dihadapi oleh para mahasiswa dalam mencapai target responden yang mereka perlukan. Oleh karena itu,</Text>
                                            <Text as="span" color="#4685B2"> perlu adanya inovasi yang dapat mengatasi kesulitan tersebut</Text>
                                            <Text as="span" color="black">, mengingat jumlah responden merupakan salah satu hal yang sangat penting dalam mengumpulkan suatu data agar dapat dikatakan sebagai data yang valid.</Text>
                                        </Box>
                                    </HStack>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultiple>
                        <AccordionItem border='none'>
                            {({ isExpanded }) => (
                            <>
                                <AccordionButton _hover={{ bg: '#122543' }} bgColor='#122543' color='white' w='98%' fontSize='18px' fontWeight='bold' borderRadius='30px' pl={4}>
                                    <Box flex='1' textAlign='left'>
                                        Kisaran Uang yang Rela Dikeluarkan Pembuat Survei untuk Mencapai Target Jumlah Responden
                                    </Box>
                                    {isExpanded ? <TriangleUpIcon/> : <TriangleDownIcon/>}
                                </AccordionButton>
                                <AccordionPanel w='98%' borderRadius='25px' bgColor='white'>
                                    <HStack p={2} w='100%'>
                                        <Image h='15em' src="barchart_analysis.png"/>
                                        <Box pr={4} fontSize="15px" align="left">
                                            <Text as="span" color="black">Berdasarkan data survei, rata-rata persentase kategori budget adalah pilihan 3, yaitu budget dengan</Text>
                                            <Text as="span" color="#4685B2"> kisaran Rp10.000 - Rp25.000</Text>
                                            <Text as="span" color="black">. Kesimpulan yang dapat diambil adalah jumlah uang yang rela dikeluarkan oleh pembuat survei untuk mencapai target responden berada di </Text>
                                            <Text as="span" color="#4685B2"> kisaran Rp10.000 - Rp25.000</Text>
                                            <Text as="span" color="black">.</Text>
                                        </Box>
                                    </HStack>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </VStack>
    )
}
  
export default AnalysisPage;
