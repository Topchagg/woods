import HomeOpenSection from "../sections/homeOpenSection"
import HomeWeWorkWith from '../sections/HomeWeWorkWith'
import HomeOurWork from "../sections/homeOurWOrk"
import HomeOurAdvantages from "../sections/homeOurAdvantages"
import HomeAboutUs from "../sections/homeAboutUs"
import FormSection from "../sections/formSection"

const Home = () => {
    return (
        <>
        <div className="section default-background">   
            <HomeOpenSection/>
        </div>
        <HomeWeWorkWith/>
        <HomeOurWork/>
        <HomeOurAdvantages/>
        <div className="section default-background">
            <HomeAboutUs/>
        </div>
        <FormSection/>
        </>
    )
}

export default Home