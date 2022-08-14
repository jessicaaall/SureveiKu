import { Box, Button, Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { Image }from "@chakra-ui/react"

const Service = () => {
    return(
        <HStack mx="7.5%" mt="7.5%" mb="5%" w="100%" textAlign="center" spacing="5%">
            <Box boxShadow="dark-lg" rounded="md" bg="white" w="70%" h="500px">
                <Stack w="100%" alignItems="center">
                    <Center rounded="md" bg="#0F2543" w="100%" h="100px">
                        <Text fontSize="4xl" fontWeight="bold" color="white">
                            Build Surveys</Text>
                    </Center>
                    <Spacer p="12.5px"/>
                    <Image boxSize="100%" w="70%" src="left_service_icon.png"/>
                    <Spacer p="12.5px"/>
                        <Button
                            bg="#49439B"
                            size="lg"
                            w="70%"
                            h="30px"
                            color="white"
                            _hover={{bg:"#e3e3e3", color:"#49439B"}}>
                            TRY NOW
                            </Button>    
                </Stack>
            </Box>
            <Box boxShadow="dark-lg" rounded="md" bg="white" w="70%" h="500px">
                <Stack w="100%" alignItems="center">
                    <Center rounded="md" bg="#0F2543" w="100%" h="100px">
                        <Text fontSize="4xl" fontWeight="bold" color="white">
                            Real Time Analysis</Text>
                    </Center>
                    <Spacer p="12.5px"/>
                    <Image boxSize="100%" w="70%" src="middle_service_icon.png"/>
                    <Spacer p="10px"/>
                    <Button
                        bg="#49439B"
                        size="lg"
                        w="70%"
                        h="30px"
                        color="white"
                        _hover={{bg:"#e3e3e3", color:"#49439B"}}>
                        TRY NOW
                        </Button>
                </Stack>
            </Box>
            <Box boxShadow="dark-lg" rounded="md" bg="white" w="70%" h="500px">
                <Stack w="100%" alignItems="center">
                    <Center rounded="md" bg="#0F2543" w="100%" h="100px">
                        <Text fontSize="4xl" fontWeight="bold" color="white">
                            Fill in Surveys</Text>
                    </Center>
                    <Spacer p="12.5px"/>
                    <Image boxSize="100%" w="70%" src="right_service_icon.png"/>
                    <Spacer p="6.5px"/>
                    <Button
                        bg="#49439B"
                        size="lg"
                        w="70%"
                        h="30px"
                        color="white"
                        _hover={{bg:"#e3e3e3", color:"#49439B"}}>
                        TRY NOW
                        </Button>
                </Stack>
            </Box>
        </HStack>
    );
}

export default Service;
