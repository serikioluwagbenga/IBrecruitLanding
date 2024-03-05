import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import Carousel from './componet/Slider'
import CallToAction from './componet/CallToAction';
function App() {
  var Calltoaction = {
    title: "Book A Free 30-Minutes Consultation",
    description: "",
    action: {name: "Get A Job", url: ""},
  };
  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white relative z-0'>
          <Navbar></Navbar>
          <Carousel />
        <CallToAction details={Calltoaction}></CallToAction>
      </div>
    </>
  )
}

export default App
