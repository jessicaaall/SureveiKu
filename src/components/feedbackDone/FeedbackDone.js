import { Text, Spacer, VStack } from "@chakra-ui/react";

const FeedbackDone = () => {
    return (
        <VStack>
            <Text fontSize={60} fontWeight='bold' color='white' letterSpacing={2}>Thanks for giving us a feedback!</Text>
            <Text fontSize={25} color='white' letterSpacing={3}>We will reply to your feedback as soon as possible.</Text>
            <Spacer/>
            <VStack pt="25%">
                <Text fontSize={20} color='white' letterSpacing={3}>You will be returned to the main page shortly</Text>
            </VStack>
        </VStack>
    )
}

export default FeedbackDone;