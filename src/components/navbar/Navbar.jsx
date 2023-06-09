// import React, {useState} from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
// import './navbar.css';
//
// // mobile menu imported togglemenu from use state initially it will be false
//
//
//
// const Menu= () => (
//   <>
//     <p><a href="#Home">Home</a></p>
//     <p><a href="#wgpt3">WhatisGPT3</a></p>
//     <p><a href="#possiblity">Open AI</a></p>
//     <p><a href="#features">Case Studies</a></p>
//     <p><a href="#blog">Library</a></p>
//   </>
// );
//
//
// const Navbar = () => {
//   const[toggleMenu,setToggleMenu] = useState(false);
//   return (
//     <div className='gpt3_navbar'>
//       <div className="gpt3__navbar_links">
//         <div className='gpt__navbar_links_logo'>
//           <img src={logo} alt="" className="src" />
//         </div>
//         <div className='gpt3__navbar_links_container'>
//             <Menu/>
//         </div>
//
//       </div>
//
//       <div className='gpt3__navbar-sign'>
//           <p> Sign in </p>
//           <button type="button"> Sign up</button>
//       </div>
//       {/* // for mobile menu toggle */}
//       <div className='gpt3__navbar-menu'>
//         {toggleMenu
//           ?<RiCloseLine color="#fff" size={27} onclick={()=> setToggleMenu(false)}/>
//           :<RiMenu3Line color="#fff" size={27} onclick={()=> setToggleMenu(true)}/>
//
//         }
//         {toggleMenu && (
//           <div className='gpt3__navbar_menu_container scale-up-'>
//               <div className='gpt3__navbar-menu_container-links'>
//                 <Menu/>
//                   <div className='gpt3__navbar-menu_container-links'>
//                       <p> Sign in </p>
//                       <button type="button"> Sign up</button>
//                   </div>
//
//               </div>
//
//           </div>
//
//         )
//
//         }
//       </div>
//
//     </div>
//   )
// }
//
//
// export default Navbar

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

