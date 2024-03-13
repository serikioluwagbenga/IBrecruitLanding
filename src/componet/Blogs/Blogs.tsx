import { useQuery } from "react-query"
import { makeRequest } from "../../../axios"
import Countainer from "../Utilities/Countainer"
import Heading from "../Utilities/Heading"
import List from "../Utilities/List"
import Blog from "./Blog"
export var Blogs = () => {
    const { isLoading, error, data} = useQuery(['blogs'], () => {
        return makeRequest.get("/blogs").then((res) => {
            return res.data;
        })
    });
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return <section className="bg-white dark:bg-slate-900 md:p-5">
        <Countainer >
            <Heading title="Blogs" subtitle="What we say" className="m-0 my-10"></Heading>
            <List>
                {data.length > 0 ?
                    data.map((blog) => (<Blog blog={blog}></Blog>))
                    : "No Blog here"}
            </List>
        </Countainer>
    </section>
}