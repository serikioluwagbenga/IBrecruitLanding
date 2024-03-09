import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../componet/pages/Home";
import { About } from "../componet/pages/About";
import { Service } from "../componet/pages/Service";
import { Footer, Navbar } from "flowbite-react";
import App from "../App";
const Layout = () => (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
export const webRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/service/:slug",
                element: <Service/>
            }
        ]
    },
]);