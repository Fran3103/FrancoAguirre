
import logo from '../../../public/img/SVG/Recurso1.svg'
import logo2 from '../../../public/img/SVG/Recurso2.svg'
import { FaGithub, FaLinkedin  } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
const Nabvar = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4  mx-4 flex flex-col gap-2 items-center sm:flex-row sm:justify-evenly xl:justify-between bg-gray-900 rounded-lg mt-2 lg:mx-12 xl:m-auto lg:mt-2 xl:mt-2'>
        <img src={logo} alt="logo"  className='w-60 shadow-sm shadow-slate-400 h-full'/>
        <img src={logo2} alt="logo" className='w-40 hidden ' />
        <ul className='flex gap-5  mt-3 items-center'>
           
            <li className='text-3xl text-white  cursor-pointer '><a href="https://github.com/Fran3103" target='blank_'><FaGithub /></a></li>
            <li className='text-3xl text-white  cursor-pointer '><a href="https://linkedin.com/in/franco-aguirre-24855012a" target='blank_'><FaLinkedin /></a></li>
            <li className='text-3xl text-white  cursor-pointer '><a href="mailto:fn.aguirre@hotmail.com" target='blank_'><AiOutlineMail /></a></li>
        </ul>
    </div>
  )
}

export default Nabvar