import {Box, Text, HStack, Select, Spacer} from '@chakra-ui/react';

export default function ProfileGenderBar(props){
    return(
        <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20} h='6vh'>
            <HStack h='full'>
              <Text
                pl='1.5%'
                w='140px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'>
                {props.title}
              </Text>
              <Spacer/>
              <Select variant='outline' bg='white' h='6vh' w='full' textAlign='right' borderRadius={20} size='lg'
            fontSize='lg'
            fontWeight='bold'
            color='black'>
                <option value='laki'>Laki-Laki</option>
                <option value='perempuan'>Perempuan</option>
                <option value='undefined'>Not Specified</option>
            </Select>
            </HStack>
          </Box>
    );
}