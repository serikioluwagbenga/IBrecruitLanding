import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import Slider from './componet/Slider'
function App() {

  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white'>
        <Navbar></Navbar>
        <Slider></Slider>
      </div>
    </>
  )
}

export default App
