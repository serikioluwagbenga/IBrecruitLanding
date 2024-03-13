import './css/App.css'
import Navbar from './componet/Navbar/Navbar'
import { Footer } from './componet/Footer';
import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='bg-white dark:bg-slate-900 dark:text-white relative z-0'>
          <Navbar />
          <ScrollRestoration />
          <Outlet />
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
