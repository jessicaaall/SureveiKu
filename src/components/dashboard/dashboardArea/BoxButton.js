import { Box, Text, Divider, VStack} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function BoxButton(props){
    const [isFocused, setFocus] = useState(false);
    let styles = {
        box: {
            background: isFocused ? 'linear-gradient(to bottom right, #F76E11 30%, #FF9F45 100%)' : 'linear-gradient(to bottom right, #FFFFFF 30%, #4685B2 100%)',
            width: '275px',
            padding: '10px',
            borderRadius: '4px',
            color: isFocused ? 'white' : 'black',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
        },
        boxTitle: {
            fontSize: '1.5em',
        },
        boxDesc: {
        },
      }
    return(
        <NavLink to={props.link}>
            <Box as='button' 
            style={styles.box}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            >
                <VStack display='flex' textAlign={'left'} alignItems='baseline' spacing={3}>
                    <Text style={styles.boxTitle}>{props.title}</Text>
                    <Divider borderColor={'black'}/>
                    <Text style={styles.boxDesc}>{props.desc}</Text>
                </VStack>
            </Box>
        </NavLink>
    );
}