import Service from "../Services/ServiceCard";

function List({ children, className = "" }) {
    return <div className={`grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 ${className}`}>
        {children}
    </div>
}

export default List;