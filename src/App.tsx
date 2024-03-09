import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import { Footer } from './componet/Footer';
import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='bg-white dark:bg-slate-900 dark:text-white relative z-0'>
        <Navbar />
          <ScrollRestoration />
          <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
