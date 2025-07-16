import React from 'react';

function App(){
    return(
        <>
           
            <Navbar/>
            
            <section  id='apropos' className='bg-gray-200 border-b px-10 py-6 mt-20 h-30 lg:flex flex-row md:flex flex-reverse justify-between'>
                <br /> <br />
                <img src="mariama.jpg" alt=""  className='mt-[-3px] w-60 h-70 rounded-lg mx-auto'/>

                <div>
                    <br /> <br />
                    <h1  className='text-blue-500 font-bold text-4xl text-right mr-20'>  Qui suis-je ❔ </h1>
                    <br />
                    <p className='lg:text-2xl md:text-xl text-left ml-20'>
                        je suis étudiante en licence 3 de Génie Informatique passionnée par le developpement web.
                        curieuse et rigoureuse,j'aime apprendre et explorer de nouvelle technologies.En dehors du code, j'aime lire,cuisiner et observer le monde avec un regard analytique .Je suis aussi à l'aise en équipe avec un bon sens de l'écoute et une forte capacité d'adaptation. Toujours motivée à évoluer.
                    </p>
                    <br />
                </div>

            </section>
            
            <hr  className='bg-white-200 text-xl'/>
            <section id='experiences' className='bg-gray-200 border-b px-10 py-6 mt-3 h-30 lg:flex flex-col md:flex flex-reverse left-0 right-0 lg:w-full md:w-full '>
                <br />
                <br />
                  <div className=''>
                    <h1 className='text-blue-500 font-bold lg:text-4xl md:text-3xl text-right mr-20'>  Experiences  Techniques ❔ </h1>
                    <p className='lg:text-2xl md:text-xl text-left mr-2'>
                    j'ai acquis une solide maîtrise du HTML/CSS, que j'ai renforcée à travers plusieurs projet web.je possède un niveau intermediaire du java,javaScript et du PHP,MySQL que j'ai mis en pratique dans la réalisation de  deux sites en PHP/MySQL.

                    côté frameworks, je suis à l'aise avec boostsTrap et je me forme actuellement sur,nodeJs, tailwindCSS et react, d'ailleur que j'utilise pour concevoir mon portfolio actuel.
                </p>
                <br />
                </div >

                    <div className="image  flex flex-row gap-2 flex mx-auto ">
                    <img src="html.svg" alt="" className='mt-[-3px]  w-20 h-30  rounded-lg'/>
                    <img src="css.svg" alt="" className='mt-[-3px] w-20 h-30  rounded-lg' />
                    <img src="bootstrap.svg" alt="" className='mt-[-3px]  w-20 h-30  rounded-full' />
                    <img src="tailwindcss.svg" alt="" className='mt-[-3px]   w-20 h-30 rounded-full' />
                    <img src="react.svg" alt="" className='mt-[-3px]   w-20 h-30 rounded-full'/>
                    <br />
                </div>
                <div>
                     <h1 className='text-blue-500 font-bold lg:text-4xl md:text-3xl text-right mr-20'>  Experiences  professionnelles ❔ </h1>
                 <div className='flex flex-col lg:flex-row md:flex-row sm:flex-col gap-2 justify-between'  >
                    <img src="LOGO2.jpg" alt="" className='mt-[-3px] w-60 h-70 rounded-lg mx-auto' />
                    <p className='lg:text-2xl md:text-xl text-left mr-2'>
                        j'ai effectué un stage en tant qu'assistante au sein du Club des jeunes Scientifique Francophone de Guinée, où j'ai contribué à la coordination des activités Scientifique et éducatives.
                         Avant cela,j'ai occupé le poste de vice-présidente du VBG(Violence Basé sur le Genre) à koundara,une branche local du club. Ces experiences m'ont permis de developper des compétences en organisation, en communication et en leadership.
                </p>
                 </div>
                </div>
              
            </section>

            <footer id='contact' className=' bg-gray-800 text-white left-0 right-0 lg:w-full md:w-full sm:w-full p-4 mt-3 lg:text-2xl md:text-xl sm:text-l flex flex-row justify-between'>
          <     div>
                      &copy; Mon portfolio <br /> 
                </div>

                <ul className='flex flex-col  '> 
                    <li>tel: +224-620-72-82-29</li>
                    <li className='flex flex-row justtify-between'><a href="mailto:mariamadiane0101@gmail.com"><img src="mail.jpg" alt="" className='  w-20 h-30 rounded-full'/>me contacter par mail</a></li>
                    <li><a href="https://github.com/Mariama-Diane/"><img src="github.jpg" alt=""className='mt-[-3px]   w-20 h-30 rounded-full' />mon compte gitHub</a></li>
                </ul>
                <ul>
                    <li>a propos</li>
                    <li>experiences</li>
                    <li>contact</li>
                </ul>
          
            </footer>
        </>
        
    )
}

export default App;


const Navbar=()=>{

            return(
                <nav className=' bg-gray-300 fixed top-0 left-0 right-0 lg:w-full md:w-full sm:w-full z-50 border-b px-6 py-2.5 h-20 flex items-center justify-between '>
                    <h1 className='font-bold lg:text-3xl md:text-xl sm:text-l'>Mariama Diané</h1>
                
                  
                    <ul className='  md:flex gap-4 list-none md:w-full sm:w-full flex flex-row lg:text-2xl md:text-xl sm:text-l justify-end'>
                            <li className=''><a href="#apropos" className='hover:underline hover:text-blue-400 transition duration-300 '>A propos</a></li>
                            <li><a href="#experiences"className='hover:underline hover:text-blue-400 transition duration-300 '> experiences</a></li>
                        <   li> <a href="#contact"className='hover:underline hover:text-blue-400 transition duration-300'>contact</a></li>
                    </ul>
       
        
            </nav>
            )
            }
