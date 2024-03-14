import { useQuery } from "react-query";
import Countainer from "../Utilities/Countainer";
import Heading from "../Utilities/Heading";
import List from "../Utilities/List";
import ServiceCard from "./ServiceCard";
import { makeRequest } from "../../../axios";

function Services() {
    const { isLoading, error, data} = useQuery(['services'],() => {
        return makeRequest.get("/services").then((res) => {
            return res.data;
        })
    });
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    let services =  data;
    return <section className="py-20 bg-inherit">
        <Countainer>
            <Heading subtitle="what we do" title={'Services'} description={'Unleash hidden performance potential with 360 surveys! This blog post explores how 360 surveys go beyond traditional reviews.'} />
            {services.length > 0 && services ? 
            <List className="relative">
                {services.map((service: any) => (
                    <ServiceCard service={service} />
                ))}
            </List> : "No service available"}
        </Countainer>
    </section>
}

export default Services;