import {Box, Text, VStack} from '@chakra-ui/react';
import React from 'react';

export default function QuestionTemplate(props){
    return(
        <Box bg="#122543" borderRadius='25px'>
            <VStack w='100%' display='flex' alignItems={'baseline'}>
                <Box pt={4} pl={5} pr={5}>
                    <Text color={'white'} fontSize='20px'>{props.judulPertanyaan}</Text>
                </Box>
                {props.children}
            </VStack>
        </Box>
    );
}