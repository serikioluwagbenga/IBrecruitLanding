function Heading({ title, subtitle = "", description = "", className = "" }) {
    return <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 align-middle ">
        <div className="mb-12 space-y-5 md:mb-16 md:text-center items-center md:flex flex-col">
            <div
                className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-primary bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                {subtitle}
            </div>
            <h1 className="mb-5 text-3xl font-semibold dark:text-white text-slate-900 md:text-center md:text-4xl">
                {title}
            </h1>
            <p className=" text-gray-dark dark:text-gray-light md:text-center text-sm md:w-[50%] ">
                {description}
            </p>
        </div>
    </div>


}
export default Heading