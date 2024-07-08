import {
    FaCloudDownloadAlt,
    FaCloudUploadAlt,
    FaListAlt,
  } from "react-icons/fa";
  import { CgPerformance } from "react-icons/cg";
  import { NavLink } from "react-router-dom";
  
  function SideBar({ children }) {
    // Array of sidebar links with their respective names, routes, and icons
    const SideLinks = [
      {
        name: "Module 1 - Introduction",
        link: "/Children_Module_1",
        icon: FaListAlt,
      },
      {
        name: "Module 2 - Savings",
        link: "/Children_Module_2",
        icon: FaListAlt,
      },
      {
        name: "Module 3 - Spending",
        link: "/Children_Module_3",
        icon: FaListAlt,
      },
      {
        name: "Module 4 - Responsibility",
        link: "/Children_Module_4",
        icon: FaListAlt,
      },
    ];
  
    // Classes for active, hover, and inactive link states
    const active = "bg-dryGray text-black";
    const hover = "hover:text-black hover:bg-white";
    const inActive =
      "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  
    // Function to set the appropriate class based on the active state
    const Hover = ({ isActive }) =>
      isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  
    return (
      <div className="min-h-screen container mx-auto px-2">
        <div className="flex md:py-12 py-6">
          {/* Sidebar section */}
          <div className="w-64 sticky top-0 h-1/5 bg-main border border-gray-800 p-5 rounded-md mr-5 text-black">
            {
              // Rendering sidebar links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
          </div>
          {/* Content section */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="flex-1 rounded-md bg-main border border-gray-800 p-4"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export default SideBar;