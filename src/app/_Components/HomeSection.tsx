import Clients from "./Clients";
import Community from "./Community";
import HeroPage from "./HeroSection";
const HomeSection = () => {
    return ( 
        <div className="home">
            <HeroPage></HeroPage>
            <Clients></Clients>
            <Community></Community>
        </div>
    );
}
 
export default HomeSection;