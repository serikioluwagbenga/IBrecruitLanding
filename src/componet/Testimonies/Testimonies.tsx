import Testimony from "./Testimony";
import Countainer from "../Utilities/Countainer"
import Heading from "../Utilities/Heading"
import { ImageBackdrop } from "../Utilities/ImageBackdrop";
import { makeRequest } from "../../../axios";
import { useQuery } from "react-query";

function Testimonies() {
    const { isLoading, error, data} = useQuery(['testimonials'],() => {
        return makeRequest.get("/testimonials").then((res) => {
            return res.data;
        })
    });
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    let testimonials =  data;
    return <section id="testimonies" className="py-20  relative">
        <ImageBackdrop img={`https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}/>
        <Countainer>
            <Heading subtitle="words from others" title="it's is not just us" description="Here's what others have to say about us."></Heading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                
                    {testimonials.length > 0 ? testimonials.map((t) => (
                        <Testimony testimony={t} />
                    )) : ""}
            </div>
        </Countainer>
    </section>
}
export default Testimonies



function slipt_data(testimonies: never[], size: string) {
    try {
        let data = []
        var ssize = parseInt(size);
        for (let i = 0; i < testimonies.length; i += ssize)
            data.push(testimonies.slice(i, i + ssize));
        return data;
    } catch (error) {
        throw new Error("Error " + error);
    }
}

