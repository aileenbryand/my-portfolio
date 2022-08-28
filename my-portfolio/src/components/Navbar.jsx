import React, {useState} from "react"
//import logo
//import Logo from '..assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0E2440] text-gray-300' >

           {/*menu*/} 
            
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            

            {/*hbg*/} 

            <div onClick={handleClick}className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>





            {/*Mobile menu*/} 

            <div className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0E2440] flex flex-col justify-center items-center'}>
            <ul>
                    <li className="py-6 text-4xl">Home</li>
                    <li className="py-6 text-4xl">About</li>
                    <li className="py-6 text-4xl">Skills</li>
                    <li className="py-6 text-4xl">Work</li>
                    <li className="py-6 text-4xl">Contact</li>
                </ul>
            </div>




            {/*Social Icons*/} 
            <div className="hidden"></div>
        </div>
    )
        
    
}

export default Navbar