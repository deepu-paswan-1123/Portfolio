// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { TiThMenu } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
// import MobileNav from "../MobileNav/MobileNav";
// import SkillsCard from "../Skills/SkillsCard/SkillsCard";

// const Navbar = () => {

//     const [openMenu,setOpenMenu]=useState(false);

//     const toggleMenu=()=>{
//         setOpenMenu(!openMenu);
//     }

//   return (
//     <>
//       <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
//       <nav className="nav-wrapper">
//         <div className="Nav-Content">
//           <h2 className="navbarlogo">Deepu Paswan</h2>

//           <ul>
//             <li>
//               <a href="" className="menu-item">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="" className="menu-item">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a href="" className="menu-item">
//                 Work Experience 
//               </a>
//             </li>
//             <li>
//               <a href="" className="menu-item">
//                 Contact me
//               </a>
//             </li>

//             <button className="contact-btn" onClick={() => {}}>
//               Hire Me
//             </button>
//           </ul>
//           <button className="menu-btn" onClick={toggleMenu}>
//             <span
//               className={"material-symbols-outlined"}
//               style={{ fontSize: "1.8rem" }}
//             >
//                 {openMenu ? <RxCross2 /> : <TiThMenu />}
              
//             </span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;










// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";
// // import { TiThMenu } from "react-icons/ti";
// // import { RxCross2 } from "react-icons/rx";
// // import MobileNav from "../MobileNav/MobileNav";

// // const Navbar = () => {
// //   const [openMenu, setOpenMenu] = useState(false);

// //   const toggleMenu = () => {
// //     setOpenMenu(!openMenu);
// //   };

// //   return (
// //     <>
// //       <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
// //       <nav className="nav-wrapper">
// //         <div className="Nav-Content">
// //           <h2 className="navbarlogo">Deepu Paswan</h2>

// //           <ul>
// //             <li>
// //               <Link to="/" className="menu-item">
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/skills" className="menu-item">
// //                 Skills
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/work-experience" className="menu-item">
// //                 Work Experience
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/contact-me" className="menu-item">
// //                 Contact Me
// //               </Link>
// //             </li>
// //             <button className="contact-btn" onClick={() => {}}>
// //               Hire Me
// //             </button>
// //           </ul>
// //           <button className="menu-btn" onClick={toggleMenu}>
// //             <span style={{ fontSize: "1.8rem" }}>
// //               {openMenu ? <RxCross2 /> : <TiThMenu />}
// //             </span>
// //           </button>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;










import React, { useState } from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} handleScroll={handleScroll} />
      <nav className="nav-wrapper">
        <div className="Nav-Content">
          <h2 className="navbarlogo">Deepu Paswan</h2>
          <ul>
            <li>
              <a href="#hero" className="menu-item" onClick={() => handleScroll("hero")}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item" onClick={() => handleScroll("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item" onClick={() => handleScroll("work-experience")}>
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact-me" className="menu-item" onClick={() => handleScroll("contact-me")}>
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.8rem" }}>
              {openMenu ? <RxCross2 /> : <TiThMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

