
import { useQuery } from 'react-query';
import PrimaryButton from './Utilities/Buttons';
import { Carousel } from 'flowbite-react';
import {makeRequest} from '../../axios';
import DOMPurify from 'dompurify';
function Slider() {
    const { isLoading, error, data} = useQuery(['sliders'],() => {
        return makeRequest.get("/sliders").then((res) => {
            return res.data;
        })
    });
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <Carousel leftControl="." rightControl="." className="-mt-[100px] -z-10 top-0 h-dvh">
            {
            !isLoading && data.length > 0 ? data.map((slide) => (
                <div className={`bg-no-repeat bg-right-bottom bg-cover flex h-full items-center justify-left bg-green dark:text-white p-0 relative`}>
                   <img src={slide.img} className='absolute top-0 left-0 flex-shrink-0 min-h-[100%] min-w-[100%] md:object-fill object-cover'/>
                    <div className='md:w-[40%] w-[20%] h-full bg-primary opacity-80'></div>
                    <div className='flex items-left justify-center text-center h-[100%]  w-[90%]  absolute flex-col left-[5%] gap-3 md:w-[50%] md:left-[30%]'>
                        {/* <div className="flex flex-row items-center gap-2 w-100 text-green"><p className='text-left text-lg '></p><div className='w-[100px] h-[5px] bg-green rounded'></div></div> */}
                        <h2 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(slide.description)}} className='text-5xl text-left text-white uppercase font-bold' />
                        <PrimaryButton bg='bg-green' className="w-[100px] rounded-none">Login</PrimaryButton>
                    </div>
                </div>
            )) : <div></div>}
        </Carousel>
    );
}

export default Slider;
