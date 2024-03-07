import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import Carousel from './componet/Slider'
import CallToAction from './componet/CallToAction';
import Services from './componet/Services';
import Companys from './componet/Companys';
import Testimonies from './componet/Testimonies';
function App() {
  var Calltoaction = {
    title: "Book A Free 30-Minutes Consultation",
    description: "Join us today by clicking on the button by the side of this box",
    action: {name: "Get A Job", url: ""},
  };

  var ServicesList = [{
    title: "Learning & Development",
    description: "Your employees are your biggest assets. Training improves the skills and performance of your employees on their job. At Proten International, we pride ourselves in delivering quality and innovative bespoke learning solutions.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: {name: "Get A Job", url: ""},
  },
  {
    title: "Talent Acquisition",
    description: "Hiring the right employee pays you back in employee productivity, and a positive impact on your work environment. We use our rich ATS to source for prime candidates and select the right talent fit for the organization.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: {name: "Get A Job", url: ""},
  },
  {
    title: "HR Outsourcing",
    description: "Most Organisations have Great Talents but they always think they can do it all, this can really stall the growth of the business. Outsourcing your non-core or Operational functions, saves you more time to focus on Income generation.",
    img: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: {name: "Get A Job", url: ""},
  }
];

var testimonies = [
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Find God.",
},
  {
  name: "Tim Cook",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Find God.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Find God.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
},
  {
  name: "Kanye West",
  position: "Rapper &amp; Entrepreneur",
  avatar: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
  body: "Find God.",
},

];
  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white relative z-0'>
       
          <Navbar></Navbar>
          <Carousel />
        <CallToAction details={Calltoaction}></CallToAction>
        <Services services={ServicesList}></Services>
        
        <Companys title="Our Clients and Partners"></Companys>
        <Testimonies testimonies={testimonies}></Testimonies>
      </div>
    </>
  )
}

export default App
