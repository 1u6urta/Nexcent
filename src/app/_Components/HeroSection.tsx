import Dot from "./Dot";
import ImageHero from "./ImageHero";
const HeroPage = () => {
    return ( 
        <div className="hero">
            <div className="Frame">
                <p className="lessons">Lessons and insights</p> 
                <span className="span">
                from 8 years
                </span>
                <p className="where">Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>
            <div className="image">
                <ImageHero></ImageHero>
            </div>
            <Dot></Dot>
        </div>
    );
}
 
export default HeroPage;