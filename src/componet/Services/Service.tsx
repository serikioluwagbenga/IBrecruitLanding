import PrimaryButton from "../Utilities/Buttons";


function Service({ service }) {
    return <div className="p-6">
        <img className="roundImg" src={service.img} alt="blog" />
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-green lg:text-3xl underline">{service.title}</h1>
        <p className="text">
            {service.description}
        </p>                
        <div className="mt-4 text-green">
            Read More »
        </div>
    </div>
}

export default Service;