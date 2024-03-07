import Testimony from "./Testimony";
import Countainer from "./Utilities/Countainer"
import Heading from "./Utilities/Heading"

function Testimonies({ testimonies = [] }) {
    var no = testimonies.length / 3;
    const size = no.toFixed(0);
    var data = slipt_data(testimonies, size);
    return <section id="testimonies" className="py-20  relative">
        <img src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute top-0 left-0 min-h-screen min-w-full object-cover  -z-10" alt="" />
        <div className="absolute top-0 left-0 min-h-full min-w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur"></div>
        <Countainer>
            <Heading subtitle="words from others" title="it's is not just us" description="Here's what others have to say about us."></Heading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <ul className="space-y-8">
                    {data[0].length > 0 ? data[0].map((t) => (
                        <Testimony testimony={t} />
                    )) : ""}
                </ul>
                <ul className="hidden space-y-8 sm:block">
                    {data[0].length > 0 ? data[0].map((t) => (
                        <Testimony testimony={t} />
                    )) : ""}

                </ul>
                <ul className="hidden space-y-8 lg:block">
                    {data[0].length > 0 ? data[0].map((t) => (
                        <Testimony testimony={t} />
                    )) : ""}
                </ul>
            </div>
        </Countainer>
    </section>
}
export default Testimonies


function count(testimonies: never[]) {
    return testimonies.length;
}

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

