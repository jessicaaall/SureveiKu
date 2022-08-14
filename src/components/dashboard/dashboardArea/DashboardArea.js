import {SimpleGrid} from "@chakra-ui/react";
import BoxButton from "./BoxButton";

const DashboardArea = () => {
    return (
        <SimpleGrid columns={4} spacing={10}>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Redeem Points" desc="Hello hello"/>
            <BoxButton link="/home" title="Back to Homepage" desc="Forwarding you back to homepage"/>
        </SimpleGrid>
    );
}
 
export default DashboardArea;