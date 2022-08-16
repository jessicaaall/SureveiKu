import MainWrapper from "./mainWrapper/MainWrapper";
import FrontPageContent from "../../components/frontPage/FrontPageContent"

export default function FrontPage(){
  return(
    <MainWrapper where='home'>
      <FrontPageContent/>
    </MainWrapper>
  );
}
