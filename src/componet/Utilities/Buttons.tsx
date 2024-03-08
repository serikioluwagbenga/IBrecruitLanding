function PrimaryButton({children, bg ="bg-primary", className = ""}) {
    return <button className={`${bg} py-3 px-5 rounded-lg text-white ${className}`}>{children}</button>
}
export default PrimaryButton;

