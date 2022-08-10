import { Box, Button, Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { Image }from "@chakra-ui/react"

const Example = () => {
    return(
        <HStack mx="100px" mt="100px" mb="50px" spacing="50px">
            <Box boxShadow="xl" rounded="md" bg="white" w="70%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Build Surveys</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="35px" boxSize="275" src="https://bit.ly/3dd90kB"/>
                    <Spacer p="10px"/>
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
            <Box boxShadow="xl" rounded="md" bg="white" w="70%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Real Time Analysis</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="35px" boxSize="275" src="https://bit.ly/3SCkyy4"/>
                    <Spacer p="10px"/>
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
            <Box boxShadow="xl" rounded="md" bg="white" w="70%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%">
                    <Text fontFamily="" fontSize="4xl" fontWeight="bold" color="white">
                        Fill in Surveys</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="35px" boxSize="275" src="https://bit.ly/3djFw4t"/>
                    <Spacer p="10px"/>
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
        </HStack>
    );
}

export default Example;
