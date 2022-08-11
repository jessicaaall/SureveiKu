import { Text, Spacer, VStack, HStack, Image } from "@chakra-ui/react";

const Contact = () => {
    return (
        <VStack mt='18em'>
            <Text fontSize={60} fontWeight='bold' color='white' letterSpacing={2}>CONTACT US!</Text>
            <Text fontSize={25} color='white' letterSpacing={3}>We will respond to you as soon as possible.</Text>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <HStack spacing={5}>
                <VStack mt={0} spacing={4}>
                    <Image src='./PhoneIcon.png' boxSize={6}></Image>
                    <Image src='./MailIcon.png' boxSize={8}></Image>
                </VStack>
                <VStack spacing={0}>
                    <Text fontSize={23} color='white' letterSpacing={4}>021-XXXX-XXXX</Text>
                    <Text fontSize={23} color='white' letterSpacing={4}>cs@surveiku.com</Text>
                </VStack>
            </HStack>
        </VStack>
     );
}
 
export default Contact;