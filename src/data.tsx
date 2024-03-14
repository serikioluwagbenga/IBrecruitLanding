import { useQuery } from "react-query";
import { makeRequest } from "../axios";

export const info = await getInfo();
export const logo = info.logo;
console.log(info);
export const defaultAvater = "https://cdn-icons-png.flaticon.com/128/11753/11753675.png";
export const defaultImg = "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png";
export const Calltoaction = {
    title: "Book A Free 30-Minutes Consultation",
    description: "Join us today by clicking on the button by the side of this box",
    action: { name: "Get A Job", url: "" },
};


export const ServicesList = await getServices();
async function  getServices() {
        return await makeRequest.get("/services").then((res) => {
            return res.data;
        });
}
async function  getInfo() {
        return await makeRequest.get("/settings").then((res) => {
            return res.data[0];
        });
}



 export const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero if minutes < 10
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert hours from 24-hour to 12-hour format

    return `${days[date.getDay()]} ${month} ${day}, ${year} ${formattedHours}:${minutes}${ampm}`;
};