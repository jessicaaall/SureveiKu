import {Box, Input, Text, HStack} from '@chakra-ui/react';

const ProfileInput = (props) => {
    return(
        <Input
            type={props.typeInput}
            size='lg'
            fontSize='lg'
            fontWeight='bold'
            color='black'
            bg='white'
            h='full'
            placeholder={props.placeholder}
            textAlign='right'
            borderRadius={20}
        ></Input>
    );
};

export default function ProfileBar(props){
    const typeInput = props.typeInput;
    return(
        <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20} h='6vh'>
            <HStack h='full'>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'>
                {props.title}
              </Text>
                <ProfileInput typeInput={typeInput} placeholder={props.placeholder}/>
            </HStack>
          </Box>
    );
}