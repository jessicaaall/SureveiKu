import {SimpleGrid} from "@chakra-ui/react";
import FormalHeading from "../../FormalHeading";
import BoxButton from "./BoxButton";

const DashboardArea = () => {
    return (
        <div>
            <FormalHeading p={4} fontSize='2em' color='whitesmoke' title='Menu Dashboard'/>
            <SimpleGrid columns={4} spacing={10} padding={4}>
                <BoxButton link="/redeem-points" title="Redeem Points" desc="Redeem your points here"/>
                <BoxButton link="/create-survey" title="Create Survey" desc="Make your new survey here"/>
                <BoxButton link="/my-surveys" title="My Surveys" desc="List of your surveys"/>
                <BoxButton link="/available-surveys" title="Available Surveys" desc="List of all available surveys"/>
                <BoxButton link="/help" title="Help Page" desc="Need customer support?"/>
                <BoxButton link="/privacy-policy" title="Privacy Policy" desc="All about privacy policy"/>
                <BoxButton link="/tos" title="Terms of Service" desc="All about terms of service"/>
                <BoxButton link="/profile" title="Profile" desc="Change your personal details here"/>
                <BoxButton link="/home" title="Back to Homepage" desc="Forwarding you back to homepage"/>
            </SimpleGrid>
        </div>
    );
}
 
export default DashboardArea;