import Countainer from "../Utilities/Countainer"
import Heading from "../Utilities/Heading"
import List from "../Utilities/List"
import Blog from "./Blog"
export var Blogs = ({blogs}) => {
    return <section className="bg-white dark:bg-slate-900 p-5">
        <Countainer >
            <Heading title="Blogs" subtitle="What we say" className="m-0 my-10"></Heading>
            <List>
                {blogs.length > 0 ?
                    blogs.map((blog) => (<Blog blog={blog}></Blog>))
                    : "No Blog here"}
            </List>
        </Countainer>
    </section>
}