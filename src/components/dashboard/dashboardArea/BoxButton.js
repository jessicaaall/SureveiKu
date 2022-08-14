import { Box, Text, Divider, VStack, Link} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export default function BoxButton(props){
    let styles = {
        box: {
            background: 'linear-gradient(to bottom right, #FFFFFF 30%, #4685B2 100%)',
            width: '275px',
            padding: '10px',
            borderRadius: '4px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
        },
        boxTitle: {
            fontSize: '1.5em',
        },
        boxDesc: {

        },
        boxHover: {
            transition: 'all 0.2s ease',
            background: 'black',
            color: 'teal',
        }
      }
    return(
        <NavLink to={props.link}>
            <Link>
                <Box as='button' style={styles.box} _hover={styles.boxHover}>
                    <VStack display='flex' textAlign={'left'} alignItems='baseline' spacing={3}>
                        <Text style={styles.boxTitle}>{props.title}</Text>
                        <Divider borderColor={'black'}/>
                        <Text style={styles.boxDesc}>{props.desc}</Text>
                    </VStack>
                </Box>
            </Link>
        </NavLink>
    );
}