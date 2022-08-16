import QuestionTemplate from "./QuestionTemplate";
import {Box} from "@chakra-ui/react";

export default function QuestionNonInputBox(props){
    return (
        <QuestionTemplate judulPertanyaan={props.judulPertanyaan}>
            <Box bg='white' borderRadius='25px' p={2} w='100%'>
                {props.children}
            </Box>
        </QuestionTemplate>
    );
}