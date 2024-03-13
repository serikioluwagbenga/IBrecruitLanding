import { Calltoaction, ServicesList, testimonies, blogs } from "../../data"
import { Blogs } from "../Blogs/Blogs"
import CallToAction from "../CallToAction"
import Companys from "../Companys"
import Services from "../Services/Services"
import Slider from "../Slider"
import Testimonies from "../Testimonies/Testimonies"
export const Home = ({}) => {
    return <div>
        <Slider/>
        <CallToAction details={Calltoaction}/>
        <Services services={ServicesList}/>
        <Companys title="Our Clients and Partners"/>
        <Testimonies/>
        <Blogs/>
        <CallToAction details={Calltoaction} className='mt-10' bg='bg-primary' btnBg='bg-green'/>
    </div>
}