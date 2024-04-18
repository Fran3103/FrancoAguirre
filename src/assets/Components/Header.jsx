import foto from '../../../public/img/Foto.webp'

const Header = () => {
  return (
    <div  className='xl:max-w-[1200px] md:max-w-[800px] p-4 m-auto flex flex-col items-center xl:items-start mt-12 ' >
       
        <div className='flex  flex-col items-center  w-full  mb-12 md:flex-row md:justify-start bg-gray-900 rounded-lg px-2'>
           <img src={foto} alt="foto"  className='w-72 h-72'/>
           <h1 className="text-2xl text-center md:text-left xl:text-4xl md:ml-40">Franco Aguirre <br /> Programador Frontend</h1>
        </div>
            
  
        <div className='bg-gray-900 rounded-lg p-2'>
            <h2 className="text-3xl mb-4 xl:text-4xl ">Sobre mi</h2>
            <p className="text-xl m-auto font-light  xl:text-2xl ">
                ¡Hola! Soy Franco, un apasionado de la programación web autodidacta con experiencia en varias tecnologías clave. He dedicado tiempo y esfuerzo a aprender y dominar herramientas como HTML, CSS, SASS, JavaScript, React y Tailwind CSS.
            </p>
        </div>
        <div  className='flex  flex-col items-start w-full gap-3  my-12 bg-gray-900 rounded-lg p-2'>
            <h3 className='text-2xl xl:text-3xl'>Educacion</h3>
            <h4 className='text-xl xl:text-2xl'>Youtube - Academia HolaMundo</h4>
            <h5 className='font-thin xl:text-xl'>Programacion Web</h5>
            <p className='font-thin xl:text-xl'>Estudio de manera autodidacta tecnologias como <span className='font-bold text-xl'>HTML, CSS, Sass, Tailwind, JavaScript, React JS, TypeScript, SQL</span></p>
        </div>
    </div>
  )
}

export default Header