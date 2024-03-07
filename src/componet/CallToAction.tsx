import PrimaryButton from "./Utilities/Buttons";
import Countainer from "./Utilities/Countainer";

function CallToAction({ details, className = "" }) {
    console.log(details)
    return <div className="bg-green py-10 -mt-3">
        <Countainer className="md:items-center md:gap-0 md:flex-row gap-5 flex justify-between  flex-col">
            <div>
                <h1 className="md:text-3xl text-2xl font-bold text-white">{details.title}</h1>
                <p>{details.description}</p>
            </div>
            <PrimaryButton className="w-[150px]">
                <a href={details.action.url} target="_blank" rel="noopener noreferrer">{details.action.name}</a>
            </PrimaryButton>
        </Countainer>
    </div>
}

export default CallToAction;