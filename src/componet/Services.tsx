import Cards from "./Utilities/Cards";
import Countainer from "./Utilities/Countainer";
import Heading from "./Utilities/Heading";

function Services({ services }) {
    return <section className="py-20 bg-inherit">
        <Countainer>
            <Heading subtitle="what we do" title={'Services'} description={'Unleash hidden performance potential with 360 surveys! This blog post explores how 360 surveys go beyond traditional reviews.'}/>
            { services.length > 0 && services ? <Cards cards={services}></Cards> : "No service available"}
        </Countainer>
    </section>
}

export default Services;