export const logo = '/assets/images/main.svg';
export const defaultAvater = "https://cdn-icons-png.flaticon.com/128/11753/11753675.png";
export const defaultImg = "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png";
export const Calltoaction = {
    title: "Book A Free 30-Minutes Consultation",
    description: "Join us today by clicking on the button by the side of this box",
    action: { name: "Get A Job", url: "" },
};

export const ServicesList = [{
    slug: "learning-development",
    title: "Learning & Development",
    description: "Your employees are your biggest assets. Training improves the skills and performance of your employees on their job. At Proten International, we pride ourselves in delivering quality and innovative bespoke learning solutions.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: { name: "Get A Job", url: "" },
},
{
    slug: "talent-acquisition",
    title: "Talent Acquisition",
    description: "Hiring the right employee pays you back in employee productivity, and a positive impact on your work environment. We use our rich ATS to source for prime candidates and select the right talent fit for the organization.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: { name: "Get A Job", url: "" },
},
{
    slug: "hr-outsourcing",
    title: "HR Outsourcing",
    description: "Most Organisations have Great Talents but they always think they can do it all, this can really stall the growth of the business. Outsourcing your non-core or Operational functions, saves you more time to focus on Income generation.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: { name: "Get A Job", url: "" },
}];


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