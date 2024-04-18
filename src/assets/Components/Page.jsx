import foto from '../../../public/img/Foto.webp'
import data from '../proyectos.json'
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt   } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { AiOutlineMail } from "react-icons/ai";

const Page = () => {
  return (
    < div className='max-w-[1240px] m-auto mt-4 p-4 flex flex-col  lg:grid lg:grid-cols-[200px]  xl:grid-cols-[260px] lg:grid-rows-[400px] place-content-center mb-4 gap-4 lg:px-12 xl:px-0'>
        <header className='flex  flex-col items-center  w-full  p-4 lg:w- xl:w-60 lg:h-96 bg-gray-900 rounded-lg px-2 lg:p-4 lg:col-start-1 col-end-2 row-start-1 lg:mb-0'>
          
            <img src={foto} alt="foto"  className='w-72 h-72 lg:w-48 lg:h-48  '/>
            <h1 className="text-2xl text-center md:text-left  lg:text-xl mt-4">Franco Aguirre <span className='font-bold '>Programador Frontend</span></h1>
            <ul className='flex gap-3 mt-6  justify-start items-center text-3xl'>
            
            <FaHtml5 /><FaCss3Alt /><IoLogoJavascript /><SiTailwindcss /><FaReact />
            
        </ul>
        </header>
        
    
            <section className='bg-gray-900 rounded-lg p-4 lg:w-48 xl:w-60 lg:h-[460px] lg:col-start-1 row-start-2'>
            
                <h2 className="text-3xl mb-4 xl:text-4xl ">Sobre mi</h2>
                <p className="text-xl m-auto font-light   ">
                    ¡Hola! Soy Franco, un apasionado de la programación web autodidacta con experiencia en varias tecnologías clave. He dedicado tiempo y esfuerzo a aprender y dominar herramientas como <br /> HTML, CSS, SASS, JavaScript, React y Tailwind CSS.
                </p>
            
            </section>    

            <section className='flex  flex-col items-start w-full gap-3  bg-gray-900 rounded-lg p-4 col-start-7 xl:cols-start-5 row-start-1 lg:w-48 xl:w-60 lg:h-96'>
               
                <h3 className='text-2xl xl:text-3xl'>Educacion</h3>
                <h4 className='text-xl xl:text-2xl'>Youtube - Academia HolaMundo</h4>
                <h5 className='font-thin xl:text-xl'>Programacion Web</h5>
                <p className='font-thin xl:text-lg'>Estudio de manera autodidacta tecnologias como <span className='font-semibold '>HTML, CSS, Sass, Tailwind, JavaScript, React JS, TypeScript, SQL</span></p>
                
            </section>
 

            <aside className='xl:max-w-[1200px]   w-full m-auto flex flex-col items-start xl:items-start  col-start-3 xl:col-start-2 col-end-6 row-start-1 row-end-4  '>

                <div className=' bg-gray-900 rounded-lg  xl:max-w-[1200px]   w-full p-4'>
            
                < h2 className='text-2xl   mb-4 xl:text-4xl'> Proyectos</h2>

                <h3 className=' font-light md:text-xl xl:text-2xl '>Los siguientes proyectos, son proporcionados por <a href="https://www.frontendmentor.io/" target='_blank' className='font-bold hover:text-gray-400'>FrontendMentor</a>, al no contar con experiencia laboral real, realizo proyecto desde esta pagina practicando y realizando proyectos cada vez mas complejos. Estos son algunos de los que he realizado:</h3>

                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 xl:gap-5  place-items-center  my-4 '>
                        {
                            data.map((datos)=> 
                                
                                    <div key={datos.id} className='w-full h-[430px] shadow   flex flex-col items-center  bg-gray-900 rounded-lg'>
                                        <div className='lg:hidden'>
                                            <img src={datos.img} alt={datos.Titulo} className='w-full rounded-t-xl hover:opacity-90 h-40'/>
                                            <div className='flex  flex-col gap-2 p-3 '>
                                                <h3 className='text-lg text-center'>{datos.Titulo}</h3>
                                                <p className='font-thin  '>{datos.descripcion}</p>
                                                <div >
                                                    <p>Tecnologias:</p>
                                                    <div className='flex items-center gap-3 flex-wrap '>
                                                        {datos.tecnologias.map((tec, idx)=> (<li key={tec[idx]} className='list-none font-thin '>{tec}</li>))}
                                                    </div>
                                                    
                                                    
                                                </div>
                                                <div className='flex items-center justify-around '>
                                                    <a href={datos.codigo} target='blank_' className='hover:text-gray-400'>Codigo</a>
                                                    <a href={datos.link} target='blank_' className='hover:text-gray-400'>Proyecto</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='hidden lg:flex w-full h-full text-xl overflow-hidden'>
                                            <div className='flex  flex-col gap-2 p-4 w-full '>
                                                    <div className='flex items-center justify-between w-full '>
                                                    <h3 className='text-2xl text-start font-semibold'>{datos.Titulo}</h3>
                                                    <div className='flex items-center justify-start gap-5 '>
                                                        <a href={datos.codigo} target='blank_' className='text-lg hover:text-gray-400'>Codigo</a>
                                                        <a href={datos.link} target='blank_' className='text-lg hover:text-gray-400'>Proyecto</a>
                                                    </div>
                                                    </div>
                                                    
                                                    <div >
                                                        
                                                        <div className='flex items-center gap-3 flex-wrap font-thin'>
                                                          <p>Tecnologias:</p>  {datos.tecnologias.map((tec, idx)=> (<li key={tec[idx]} className='list-none font-semibold '>{tec}</li>))}
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                    
                                                    <p className='font-thin  text-lg'>{datos.descripcion}</p>
                                                </div>
                                            </div>
                                            <img src={datos.img} alt={datos.Titulo} className='w-full rounded-b-xl hover:opacity-90 h-64 hidden lg:block '/>
                                       </div>
                                    
                                
                            )
                        }
                    </div>

            
     
            </aside>

        <footer className='max-w-[1240px] m-auto p-4 mb-12 lg:mb-0 col-start-7 row-start-2 lg:mt-0'>
            <ul className='flex gap-5  mt-3 justify-center '>
            
            <li className='text-3xl text-white  cursor-pointer '><a href="https://github.com/Fran3103" target='blank_'><FaGithub /></a></li>
            <li className='text-3xl text-white  cursor-pointer '><a href="https://linkedin.com/in/franco-aguirre-24855012a" target='blank_'><FaLinkedin /></a></li>
            <li className='text-3xl text-white  cursor-pointer '><a href="mailto:fn.aguirre@hotmail.com" target='blank_'><AiOutlineMail /></a></li>
        </ul>
        </footer>
        
    </div>
  )
}

export default Page