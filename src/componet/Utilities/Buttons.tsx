function PrimaryButton({children, className = ""}) {
    return <button className={`bg-primary py-3 px-5 rounded-lg text-white ${className}`}>{children}</button>
}
export default PrimaryButton;

