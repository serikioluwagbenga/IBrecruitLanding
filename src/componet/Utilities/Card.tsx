import PrimaryButton from "./Buttons";

function Card({ card }) {
    return <div className="p-6">
        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={card.img} alt="blog" />

        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-green lg:text-3xl underline">{card.title}</h1>
        <p className="mx-auto text-base leading-relaxed text-gray-500 text-gray-dark dark:text-gray-light">
            {card.description}
        </p>                
        <div className="mt-4">
            <PrimaryButton>
            Read More »
            </PrimaryButton>
           
        </div>
    </div>
}

export default Card;