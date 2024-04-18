
import data from '../proyectos.json'
const Main = () => {
  return (
    <div className='xl:max-w-[1200px] md:max-w-[800px] w-full m-auto p-4 flex flex-col items-center xl:items-start bg-gray-900 rounded-lg'>
        <h2 className='text-xl  mb-4 xl:text-4xl'> Proyectos</h2>

        <h3 className=' mb-5 font-light md:text-xl xl:text-2xl '>Los siguientes proyectos, son proporcionados por <a href="https://www.frontendmentor.io/" target='_blank' className='font-bold hover:text-gray-400'>FrontendMentor</a>, al no contar con experiencia laboral real, realizo proyecto desde esta pagina practicando y realizando proyectos cada vez mas complejos. Estos son algunos de los que he realizado:</h3>

        <div className='w-full grid grid-cols-1 gap-7 xl:gap-12  place-items-center sm:grid-cols-2 xl:grid-cols-3 my-12'>
            {
                data.map((datos)=> 
                    
                        <div key={datos.id} className='w-72 h-[430px] rounded-xl shadow shadow-white hover:shadow-md hover:shadow-white  flex flex-col items-center '>
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
                                    <a href={datos.codigo} target='blank_' className='hover:font-medium'>Codigo</a>
                                    <a href={datos.link} target='blank_' className='hover:font-medium'>Proyecto</a>
                                </div>
                            </div>

                        </div>
                    
                )
            }
        </div>

        
    </div>
  )
}

export default Main