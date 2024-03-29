import DOMPurify from "dompurify";
import Card from "../Utilities/Card";
import {defaultAvater} from "../../data"

function Testimony({testimony}) {
    return <li className="text-sm leading-6">
    <div className="relative group">
        <div
            className="w-[100%] h-[10%] absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
        </div><a href="#" className="cursor-pointer">
            <Card
                className="relative">
                <div className="flex items-center space-x-4"><img
                    src={testimony.img != "" ? testimony.img : defaultAvater}
                    className="w-12 h-12 bg-center bg-cover border rounded-full" alt={testimony.customer_name} />
                    <div>
                        <h3 className="text-lg font-semibold">{testimony.customer_name}</h3>
                        {/* <p className="text-gray-500 text-md">{testimony.position}</p> */}
                    </div>
                </div>
                <p className="leading-normal text-gray-300 text-md" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(testimony.description)}} />
            </Card>
        </a>
    </div>
</li>
}

export default Testimony;