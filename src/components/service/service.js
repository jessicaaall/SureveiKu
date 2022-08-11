import { Box, Button, Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { Image }from "@chakra-ui/react"

const Example = () => {
    return(
        <HStack mx="120px" mt="120px" mb="90px" spacing="60px">
            <Box boxShadow="xl" rounded="md" bg="white" w="65%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Build Surveys</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="33px" boxSize="280px" w="65%" src="left_service_icon.png"/>
                    <Spacer p="7px"/>
                    <Button
                        bg="#49439B"
                        size="lg"
                        w="65%"
                        h="30px"
                        color="white"
                        _hover={{bg:"#e3e3e3", color:"#49439B"}}>
                        TRY NOW
                        </Button>
                </Stack>
            </Box>
            <Box boxShadow="xl" rounded="md" bg="white" w="65%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Real Time Analysis</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="33px" boxSize="280px" w="65%" src="middle_service_icon.png"/>
                    <Spacer p="7px"/>
                    <Button
                        bg="#49439B"
                        size="lg"
                        w="60%"
                        h="30px"
                        color="white"
                        _hover={{bg:"#e3e3e3", color:"#49439B"}}>
                        TRY NOW
                        </Button>
                </Stack>
            </Box>
            <Box boxShadow="xl" rounded="md" bg="white" w="65%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Fill in Surveys</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="33px" boxSize="280px" w="65%" src="right_service_icon.png"/>
                    <Spacer p="7px"/>
                    <Button
                        bg="#49439B"
                        size="lg"
                        w="65%"
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

export default Example;
