import {Box, Input, Image, Stack} from '@chakra-ui/react'
import QuestionTemplate from './QuestionTemplate';

export default function QuestionInputBox(props){
    const imageSource = props.imageSource;
    const propsChildren = props.children;
    return(
        <QuestionTemplate judulPertanyaan={props.judulPertanyaan}>
            <Stack pr={5} pl={5}>
                {imageSource === '' ? null : <Image boxSize='100%' src={props.imageSrc}/>}
                {propsChildren}
            </Stack>
            <Box borderRadius='25px' bg='white' w='100%' h='full'>
                <Input placeholder={props.inputPlaceholder}/>
            </Box>
        </QuestionTemplate>
    );
}