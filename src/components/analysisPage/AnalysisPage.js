import {Box, HStack, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react"
import FormalHeading from "../FormalHeading"
import "@fontsource/raleway"
import "@fontsource/nunito"
  
const AnalysisPage = () => {
    return(
        <VStack w="full" h="full">
            <VStack align="left" h="100%">
                <FormalHeading title="ANALYSIS PAGE"/>
                <SimpleGrid rows={2} spacingY={10} overflowY={"scroll"} w="auto" h="full" css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:"#D9D9D9", borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:"#122543", borderRadius:"50px",},}}>
                    <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                        <Text pl="1.5%" py="1%" color="white" fontFamily="raleway" fontSize="3xl" align="left">Persentase Ketercapaian Target Responden Survei Online</Text>
                        <Box w="100%" bg="white" borderRadius={20}>
                            <HStack w='full' h="full">
                                <Image pl="2%" py="1%" boxSize="100%" w="30%" src="roundedchart_analysis.png"/>
                                <Box pl="1%" pr="2%" fontFamily="nunito" fontSize="xl" align="left">
                                    <Text as="span" color="black">
                                        Berdasarkan data tersebut dapat dilihat bahwa mahasiswa yang dapat mencapai target
                                        responden sruvei online mereka</Text>
                                    <Text as="span" color="#AB2B2B"> kurang dari 50%</Text>
                                    <Text as="span" color="black">, yaitu hanya sekitar</Text>
                                    <Text as="span" color="#EA8238"> 35,2%</Text>
                                    <Text as="span" color="black">. Hal ini menunjukkan bahwa adanya kesulitan yang cukup berarti yang dihadapi oleh para mahasiswa dalam mencapai target responden yang mereka perlukan. Oleh karena itu,</Text>
                                    <Text as="span" color="#4685B2">  perlu adanya inovasi yang dapat mengatasi kesulitan tersebut</Text>
                                    <Text as="span" color="black"> , mengingat jumlah responden merupakan salah satu hal yang sangat penting dalam mengumpulkan suatu data agar dapat dikatakan sebagai data yang valid.</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </Box>
                    <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                        <Text pl="1.5%" py="1%" color="white" fontFamily="raleway" fontSize="3xl" align="left">Kisaran Uang yang Rela Dikeluarkan Pembuat Survey untuk Mencapai Target Jumlah Responden</Text>
                        <Box w="100%" bg="white" borderRadius={20}>
                            <HStack w="full" h="full">
                                <Image pl="2%" py="1%" boxSize="100%" w="40%" src="barchart_analysis.png"/>
                                <Box pl="1%" pr="2%" fontFamily="nunito" fontSize="xl" align="left">
                                    <Text as="span" color="black">Berdasarkan data survey, rata-rata persentase kategori budget adalah pilihan 3, yaitu budget dengan</Text>
                                    <Text as="span" color="#4685B2"> kisaran Rp10.000 - Rp25.000</Text>
                                    <Text as="span" color="black">. Kesimpulan yang dapat diambil adalah jumlah uang yang rela dikeluarkan oleh pembuat survei untuk mencapai target jumlah responden berada di </Text>
                                    <Text as="span" color="#4685B2"> kisaran Rp10.000 - Rp25.000</Text>
                                    <Text as="span" color="black">.</Text>
                                </Box>
                            </HStack>
                        </Box>
                    </Box>
                </SimpleGrid>
            </VStack>
        </VStack>
    )
}
  
export default AnalysisPage;
