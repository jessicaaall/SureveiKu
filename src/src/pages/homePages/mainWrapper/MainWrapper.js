import './MainWrapper.css';
import { Grid, GridItem} from '@chakra-ui/layout';
import NavigationBar from '../../../components/navigationBar/NavigationBar';

export default function MainWrapper(props){
    return(
        <div>
        <div className='bg-image'></div>
        <div className="bg-filter"></div>
        <Grid
        templateAreas={`"navbar"
                        "content"
                            `}
        gridTemplateRows={'10vh 90vh'}
        gridTemplateColumns={'100%'}
        w='full'
        >
            <GridItem area={'navbar'} display='flex' alignItems='center'>
                <NavigationBar where={props.where}/>
            </GridItem>
            <GridItem area={'content'} display='flex' alignItems='center' justifyContent='center'>
                {props.children}
            </GridItem>
        </Grid>
        </div>
    );
}