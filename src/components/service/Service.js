import { Box, Button, Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { Image }from "@chakra-ui/react"

const Service = () => {
    let styles = {
        textTitle: {
          fontSize: '1.25em',
          fontWeight: 'bold',
          color: 'white'
        }
      }
    return(
        <HStack spacing="60px">
            <Box boxShadow="xl" rounded="md" bg="white" w="100%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%" p={4}>
                    <Text style={styles.textTitle}>
                        Build Surveys</Text>
                </Center>
                <Stack alignItems="center">
                    <Image pt="33px" boxSize="100%" w="90%" src="left_service_icon.png"/>
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
            <Box boxShadow="xl" rounded="md" bg="white" w="100%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%" p={4}>
                    <Text style={styles.textTitle}>
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
            <Box boxShadow="xl" rounded="md" bg="white" w="100%" h="450px">
                <Center rounded="md" bg="#0F2543" w="100%" h="20%" p={4}>
                    <Text style={styles.textTitle}>
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

export default Service;
