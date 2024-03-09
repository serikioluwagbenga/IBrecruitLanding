import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../MyLinks";
import { GrFormDown, GrFormUp } from "react-icons/gr";

const NavLinks = ({onChangeOpen}) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const handleChangeOpen = useCallback(e => {
    onChangeOpen(e.target.value)
  }, [onChangeOpen])
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <Link
              to={link.link ? link.link : ""}
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={link.submenu ? () => {
                link.submenu && heading !== link.name ? setHeading(link.name) : setHeading("");
                link.submenu && setSubHeading("");
              } : handleChangeOpen } 
                          >
              {link.name}
              <span className="text-xl md:hidden inline">
                {link.submenu ? heading === link.name ? <GrFormUp className="text-sm" /> : <GrFormDown className="text-sm" /> : ""}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              {link.submenu ? <GrFormDown className="" /> : ""}
              </span>
            </Link>
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 dark:bg-slate-800 bg-slate-100  rotate-45"
                    ></div>
                  </div>
                  <div className="dark:bg-slate-800/80 bg-slate-100/90 backdrop-blur  p-5 grid gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div className="w-full">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm my-2.5 w-[100%] ">
                            <Link
                              to={slink.link}
                              className="hover:text-primary w-100"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
           
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <div
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="pl-7  flex flex-col "
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-2">
                        <Link onClick={handleChangeOpen} to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}

                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;