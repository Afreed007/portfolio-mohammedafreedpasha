import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 font-bold items-center">
            AFREED CODES
        </div>
        
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a className="hover:bg-purple-800" href="http://www.linkedin.com/in/mohammed-afreed-pasha-405965289"><FaLinkedin /></a>
          <a className="hover:bg-purple-800" href="https://github.com/afreed007"><FaGithub /></a>
          <a className="hover:bg-purple-800" href="https://www.instagram.com/__afreed007__/"><FaInstagram /></a>
          
          
        </div>
    </nav>
  )
}

export default Navbar