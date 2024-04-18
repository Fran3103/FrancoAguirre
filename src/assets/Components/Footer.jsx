import { FaGithub, FaLinkedin  } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 mb-12'>
       
       <ul className='flex gap-5  mt-3 justify-center'>
           
           <li className='text-3xl text-white  cursor-pointer '><a href="https://github.com/Fran3103" target='blank_'><FaGithub /></a></li>
           <li className='text-3xl text-white  cursor-pointer '><a href="https://linkedin.com/in/franco-aguirre-24855012a" target='blank_'><FaLinkedin /></a></li>
           <li className='text-3xl text-white  cursor-pointer '><a href="mailto:fn.aguirre@hotmail.com" target='blank_'><AiOutlineMail /></a></li>
       </ul>
    </div>
  )
}

export default Footer