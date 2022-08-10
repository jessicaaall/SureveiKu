import {Link, Img} from '@chakra-ui/react';
import {Flex, VStack} from '@chakra-ui/layout';

const Logo = () => {
    return (
        <div className="dashboard-logo">
            <VStack>
                <Flex alignItems='center'>
                    <Img 
                    boxSize='3em'
                    objectFit={'contain'}
                    src='/logo.png' 
                    alt='logo' />
                    <Link fontSize='2em'
                    fontWeight='extrabold' 
                    href='#' 
                    bgGradient='linear(to-r, #33416E, #4686B2)'
                    bgClip='text'
                    ml={1}
                    >SureveiKu</Link>
                </Flex>
            </VStack>
            
            
        </div>
    );
}
 
export default Logo;