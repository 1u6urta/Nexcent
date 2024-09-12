import Achievements from "./Achievements";
import Calender from "./Calender";
import CommunityUpdates from "./CommunityUpdates";
import Customer from "./Customer";
import Unlock from "./Unlock";

const Body = () => {
  return (
    <div className="body">
      <Unlock></Unlock>
      <Achievements></Achievements>
      <Calender></Calender>
      <Customer></Customer>
      <CommunityUpdates></CommunityUpdates>
    </div>
  );
};

export default Body;
