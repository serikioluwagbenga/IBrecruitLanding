import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import Carousel from './componet/Slider'
import CallToAction from './componet/CallToAction';
import Services from './componet/Services/Services';
import Companys from './componet/Companys';
import Testimonies from './componet/Testimonies/Testimonies';
import { Calltoaction, ServicesList, blogs, testimonies } from './data';
import { Blogs } from './componet/Blogs/Blogs';
import { Footer } from './componet/Footer';
function App() {
  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white relative z-0'>
        <Navbar/>
        <Carousel/>
        <CallToAction details={Calltoaction}/>
        <Services services={ServicesList}/>
        <Companys title="Our Clients and Partners"/>
        <Testimonies testimonies={testimonies}/>
        <Blogs blogs={blogs}/>
        <CallToAction details={Calltoaction} className='mt-10' bg='bg-primary' btnBg='bg-green'/>
        <Footer />
      </div>
    </>
  )
}

export default App
