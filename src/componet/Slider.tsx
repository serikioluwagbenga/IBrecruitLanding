
import { Carousel } from 'flowbite-react';
import PrimaryButton from './Utilities/Buttons';

function Slider() {
    var sliders = [
        {
            subTitle: "Welcome Home",
            title: "We Deliver Enduting Results",
            img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            subTitle: "Welcome Home 2",
            title: "We Deliver Enduting Results",
            img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            subTitle: "Welcome Home 3",
            title: "We Deliver Enduting Results",
            img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
        <Carousel leftControl="." rightControl="." className="-mt-[100px] -z-10 top-0 h-dvh">
            {sliders.map((slide) => (
                <div className={`bg-[url('${slide.img}')] bg-no-repeat bg-right-bottom bg-cover flex h-full items-center justify-left bg-green dark:text-white p-0`}>
                    <div className='md:w-[40%] w-[20%] h-full bg-primary opacity-80'></div>
                    <div className='flex items-left justify-center text-center h-[100%]  w-[90%]  absolute flex-col left-[10%] gap-3 md:w-[50%] md:left-[30%]'>
                        <div className="flex flex-row items-center gap-2 w-100 text-green"><p className='text-left text-lg '>{slide.subTitle}</p><div className='w-[100px] h-[5px] bg-green rounded'></div></div>
                        <h2 className='text-5xl text-left text-white uppercase font-bold'>{slide.title}</h2>
                        <PrimaryButton className="w-[100px] bg-green rounded-none">Login</PrimaryButton>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider;
