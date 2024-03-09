import { useParams } from "react-router"
import Countainer from "../Utilities/Countainer"
import { Calltoaction, ServicesList } from "../../data";
import CallToAction from "../CallToAction";
import { Link } from "react-router-dom";
import { ImageBackdrop } from "../Utilities/ImageBackdrop";

export const Service = () => {
    const params = useParams();
    const service = ServicesList.find(service => service.slug === params.slug);
    console.log(service);
    return <section>
        <Countainer className="my-10">
            <div className="md:flex gap-5 md:overflow-hidden">
                <div className="md:w-[70%] flex flex-col gap-3">
                    {/* <div className="w-[100%] h-[300px] bg-green"></div> */}
                 <img src={service?.img} className="object-cover md:object-top object-center w-full h-[300px] rounded-3xl" alt="" />
                    <h1 className="text-3xl  font-bold">{service?.title}</h1>
                    <p className="text">{service?.description}</p>
                </div>
                {ServicesList.length > 2 ? (
                    
                    <div className="card md:w-[30%]">
                        <h2 className="font-bold text-success text-xl ">Order Services</h2>
                        <hr className=" border-success-100/50" />
                        {
                            ServicesList.map((s) => (
                                (s.slug != params.slug) &&
                                <li className="">
                                    <Link to={`/service/${s.slug}`} className="relative card sm:space-y-6 md:space-y-0 flex items-center z-20 rounded-lg  dark:bg-primary/5">
                                        {/* <ImageBackdrop img={s.img} className=""/> */}
                                        <div className="flex flex-col gap-2 z-10">
                                            <h3 className="text-success">{s.title}</h3>
                                            <p className="text">{s.description.length > 40 ? s.description.substring(0, 40) + "..." : s.description}</p>
                                        </div>
                                    </Link>
                                </li> 
                                ))
                        }
                    </div>
                ) : ""}
            </div>
            <CallToAction className="mt-10" details={Calltoaction}/>
        </Countainer>
    </section>
}