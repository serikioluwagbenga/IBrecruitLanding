export const ImageBackdrop = ({img, bg = "bg-white/70 dark:bg-slate-950/70 backdrop-blur", className = ""}) => {
return <>
        <img src={img} className={`absolute top-0 left-0 min-h-screen min-w-full object-cover -z-10 ${className}`} alt="" />
        <div className={` absolute top-0 left-0 min-h-full min-w-full ${bg}`}></div>
</>
}