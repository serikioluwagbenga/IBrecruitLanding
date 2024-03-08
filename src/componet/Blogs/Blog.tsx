// import { FcClock } from "react-icons/fc";
import { FaRegClock } from "react-icons/fa";
import PrimaryButton from "../Utilities/Buttons";

function Blog({blog}) {
    const des = blog.description;
    return <a href={blog.action} className="card md:p-4 space-y-2 border-b-2 border-green">
       <img src={blog.img} className="roundImg"  alt={blog.title} />
       <div className="badge ">Blog</div>
       <h4 className="text-xl font-bold ">{blog.title}</h4>
       <p className="text pt-3 dark:text-slate-500">{
        des.length > 200 ? des.substring(0, 200) + "..." : des
       }</p>
       <div className="flex justify-between items-center">
        <div className="flex gap-2 dark:text-slate-500 text-slate-400">
        <FaRegClock className="text-green"></FaRegClock>
            {blog.date}
        </div>
        <PrimaryButton bg="bg-green">
            Read more
        </PrimaryButton>
       </div>
    </a>
}

export default Blog;