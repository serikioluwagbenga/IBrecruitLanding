import PrimaryButton from "./Buttons";

function Card({ children, className = "" }) {
    return <div className={`card ${className}`}>
        {children}
    </div>
}

export default Card;