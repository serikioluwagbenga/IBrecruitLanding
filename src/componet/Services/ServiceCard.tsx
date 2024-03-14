import { Link } from "react-router-dom";
import { defaultImg } from "../../data";
import DOMPurify from "dompurify";

function ServiceCard({ service }) {
    return <div className="md:p-6 p-3">
        <img className="roundImg" src={service.img != "" ? service.img : defaultImg } alt="blog" />
        <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-green lg:text-3xl underline"><Link to={`/service/${service.id}`}>{service.name}</Link></h2>
        <p className="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(service.description)}} />
        <Link to={`/service/${service.id}#`} className="mt-4 text-green">
            Read More »
        </Link>
    </div>
}

export default ServiceCard;