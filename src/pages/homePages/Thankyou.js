import MainWrapper from "./mainWrapper/MainWrapper";
import FeedBackDone from "../../components/feedbackDone/FeedbackDone";

export default function FrontPage(){
  return(
    <MainWrapper where='feedback'>
      <FeedBackDone/>
    </MainWrapper>
  );
}
