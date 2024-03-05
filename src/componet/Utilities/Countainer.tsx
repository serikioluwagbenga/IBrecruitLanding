function Countainer({children, className = ""}) {
   return <div className={`w-[90%] mx-auto ${className}`}>
        {children}
    </div>
}
export default Countainer;