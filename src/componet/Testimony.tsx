function Testimony({testimony}) {
    return <li className="text-sm leading-6">
    <div className="relative group">
        <div
            className="w-[100%] h-[10%] absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div><a href="#" className="cursor-pointer">
            <div
                className="relative p-6 space-y-6 leading-none rounded-lg bg-white dark:bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4"><img
                    src={testimony.avatar}
                    className="w-12 h-12 bg-center bg-cover border rounded-full" alt={testimony.name} />
                    <div>
                        <h3 className="text-lg font-semibold">{testimony.name}</h3>
                        <p className="text-gray-500 text-md">{testimony.position}</p>
                    </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">{testimony.body}</p>
            </div>
        </a>
    </div>
</li>
}

export default Testimony;