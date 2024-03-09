import { ServicesList } from "./data";
export const links = [
  {
    name: "Home",
    submenu: false,
    link: '/',
    sublinks: [],
  },
  {
    name: "About Us",
    link: '/about',
    submenu: false,
    sublinks: [],
  },
  {
    name: "Media",
    submenu: false,
    sublinks: [],
  },
  
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        Head: "Services",
        sublink: ServicesList.length > 0 ? ServicesList.map((service) => (
          {
            name: service.title,
            link: '/service/'+service.slug,
          }
        )) : [{}],
      },

    ],
  },
  {
    name: "Contact Us",
    submenu: false,
    sublinks: [],
  },

];

