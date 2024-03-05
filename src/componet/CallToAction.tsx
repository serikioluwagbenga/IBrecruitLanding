import PrimaryButton from "./Utilities/Buttons";
import Countainer from "./Utilities/Countainer";

function CallToAction({ details, className = "" }) {
    console.log(details)
    return <div className="bg-green py-10 -mt-3">
        <Countainer className="flex justify-between items-center">
            <div>
                <h1>{details.title}</h1>
                <p>{details.description}</p>
            </div>
            <PrimaryButton className="w-[200px]">
                <a href={details.action.url} target="_blank" rel="noopener noreferrer">{details.action.name}</a>
            </PrimaryButton>
        </Countainer>
    </div>
}

export default CallToAction;