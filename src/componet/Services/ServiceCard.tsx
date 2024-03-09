import { Link } from "react-router-dom";

function ServiceCard({ service }) {
    return <div className="md:p-6 p-3">
        <img className="roundImg" src={service.img} alt="blog" />
        <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-green lg:text-3xl underline"><Link to={`/service/${service.slug}`}>{service.title}</Link></h2>
        <p className="text">
            {service.description}
        </p>                
        <Link to={`/service/${service.slug}#`} className="mt-4 text-green">
            Read More »
        </Link>
    </div>
}

export default ServiceCard;