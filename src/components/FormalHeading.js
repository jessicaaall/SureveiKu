import {Heading} from '@chakra-ui/react';

export default function FormalHeading(props){
    return(
        <Heading fontWeight='bold' fontSize='4em' color='whitesmoke'>
            {props.title}
        </Heading>
    );
};