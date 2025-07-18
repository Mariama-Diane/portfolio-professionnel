import React from 'react';

function App(){
    return(
        <>
           
            <Navbar/>
            
            <section  id='apropos' className='bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 border-b px-2 sm:px-4 md:px-6 py-8 sm:py-10 mt-20 rounded-2xl shadow-lg mx-1 sm:mx-2 lg:mx-20 flex flex-col lg:flex-row items-center gap-6 sm:gap-8'>
                <div className='flex-1 flex justify-center mb-6 lg:mb-0'>
                    <img src="mariama.jpg" alt="Portrait de Mariama"  className='w-48 h-56 sm:w-64 sm:h-72 md:w-80 md:h-96 rounded-2xl shadow-lg object-cover object-top mt-4 hover:scale-105 hover:shadow-blue-200 transition duration-300'/>
                </div>
                <div className='flex-1'>
                    <h1  className='text-blue-600 font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-left drop-shadow'>Qui suis-je ❔</h1>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-left text-gray-700'>
                        Je suis <span className='font-semibold text-blue-500'>étudiante en licence 3 de Génie Informatique</span> passionnée par le développement web.<br/><br/>
                        Curieuse et rigoureuse, j'aime apprendre et explorer de nouvelles technologies. En dehors du code, j'aime lire, cuisiner et observer le monde avec un regard analytique.<br/><br/>
                        Je suis aussi à l'aise en équipe, avec un bon sens de l'écoute et une forte capacité d'adaptation. Toujours motivée à évoluer !
                    </p>
                </div>
            </section>
            
            <hr  className='bg-white-200 text-xl'/>
            <section id='experiences' className='bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 border-b px-2 sm:px-4 md:px-6 py-8 sm:py-10 mt-3 rounded-2xl shadow-lg mx-1 sm:mx-2 lg:mx-20 flex flex-col gap-8 sm:gap-10'>
                {/* Bloc Expériences Techniques */}
                <div className='flex flex-col md:flex-row gap-6 sm:gap-8 items-center'>
                    <div className='flex-1'>
                        <h1 className='text-blue-600 font-extrabold lg:text-4xl md:text-3xl text-2xl mb-4 text-left lg:text-right drop-shadow'>
                            Expériences Techniques ❔
                        </h1>
                        <p className='lg:text-2xl md:text-xl text-base text-left lg:text-right text-gray-700'>
                            J'ai acquis une solide maîtrise du <span className='font-semibold text-blue-500'>HTML/CSS</span>, que j'ai renforcée à travers plusieurs projets web. Je possède un niveau intermédiaire en <span className='font-semibold text-blue-500'>Java</span>, <span className='font-semibold text-blue-500'>JavaScript</span> et <span className='font-semibold text-blue-500'>PHP/MySQL</span> que j'ai mis en pratique dans la réalisation de deux sites en PHP/MySQL.<br/><br/>
                            Côté frameworks, je suis à l'aise avec <span className='font-semibold text-blue-500'>Bootstrap</span> et je me forme actuellement sur <span className='font-semibold text-blue-500'>Node.js</span>, <span className='font-semibold text-blue-500'>TailwindCSS</span> et <span className='font-semibold text-blue-500'>React</span>, d'ailleurs que j'utilise pour concevoir mon portfolio actuel.
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center flex-1">
                        <img src="html.svg" alt="HTML" className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg shadow-md hover:scale-110 hover:shadow-blue-200 transition duration-300 bg-white p-2'/>
                        <img src="css.svg" alt="CSS" className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg shadow-md hover:scale-110 hover:shadow-blue-200 transition duration-300 bg-white p-2'/>
                        <img src="bootstrap.svg" alt="Bootstrap" className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-md hover:scale-110 hover:shadow-blue-200 transition duration-300 bg-white p-2'/>
                        <img src="tailwindcss.svg" alt="TailwindCSS" className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-md hover:scale-110 hover:shadow-blue-200 transition duration-300 bg-white p-2'/>
                        <img src="react.svg" alt="React" className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-md hover:scale-110 hover:shadow-blue-200 transition duration-300 bg-white p-2'/>
                    </div>
                </div>
                {/* Séparateur visuel */}
                <div className='w-full flex justify-center'>
                    <div className='h-1 w-2/3 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 rounded-full opacity-60'></div>
                </div>
                {/* Bloc Expériences Professionnelles */}
                <div className='flex flex-col md:flex-row-reverse gap-6 sm:gap-8 items-center'>
                    <div className='flex-1'>
                        <h1 className='text-blue-600 font-extrabold lg:text-4xl md:text-3xl text-2xl mb-4 text-left drop-shadow'>
                            Expériences Professionnelles ❔
                        </h1>
                        <p className='lg:text-2xl md:text-xl text-base text-left text-gray-700'>
                            J'ai effectué un stage en tant qu'assistante au sein du <span className='font-semibold text-blue-500'>Club des Jeunes Scientifiques Francophones de Guinée</span>, où j'ai contribué à la coordination des activités scientifiques et éducatives.<br/><br/>
                            Avant cela, j'ai occupé le poste de vice-présidente du <span className='font-semibold text-blue-500'>VBG (Violence Basée sur le Genre)</span> à Koundara, une branche locale du club. Ces expériences m'ont permis de développer des compétences en organisation, en communication et en leadership.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center mb-6 md:mb-0'>
                        <img src="LOGO2.jpg" alt="Logo Club" className='w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-200 transition duration-300 object-cover'/>
                    </div>
                </div>
            </section>

            <footer id='contact' className='bg-gray-800 text-white left-0 right-0 w-full p-4 sm:p-6 mt-3 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6'>
                <div className='text-center md:text-left mb-4 md:mb-0'>
                    <span className='font-bold text-blue-400'>&copy; Mon portfolio</span> <br />
                    <span className='text-sm text-gray-300'>Mariama Diané - 2025</span>
                </div>

                <ul className='flex flex-col gap-2 sm:gap-4 text-base sm:text-lg'>
                    <li className='flex items-center gap-2'>
                        <span className='font-semibold'>Tel :</span> <a href='tel:+224620728229' className='hover:text-blue-400 transition'>+224-620-72-82-29</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <a href="mailto:mariamadiane0101@gmail.com" className='flex items-center gap-2 hover:text-blue-400 transition'>
                            <img src="mail.jpg" alt="mail" className='w-8 h-8 rounded-full border-2 border-blue-400 hover:scale-110 transition'/>
                            Me contacter par mail
                        </a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <a href="https://github.com/Mariama-Diane/" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:text-blue-400 transition'>
                            <img src="github.jpg" alt="github" className='w-8 h-8 rounded-full border-2 border-blue-400 hover:scale-110 transition'/>
                            Mon compte GitHub
                        </a>
                    </li>
                </ul>

                <ul className='flex flex-row gap-2 sm:gap-4 text-sm sm:text-base mt-2 sm:mt-4 md:mt-0'>
                    <li><a href="#apropos" className='hover:underline hover:text-blue-400 transition'>A propos</a></li>
                    <li><a href="#experiences" className='hover:underline hover:text-blue-400 transition'>Expériences</a></li>
                    <li><a href="#contact" className='hover:underline hover:text-blue-400 transition'>Contact</a></li>
                </ul>
            </footer>
        </>
        
    )
}

export default App;


const Navbar=()=>{

    return (
        <nav className='bg-gradient-to-r from-blue-200 via-white to-blue-100/80 bg-opacity-80 fixed top-0 left-0 right-0 w-full z-50 border-b border-blue-100 px-2 sm:px-4 md:px-6 py-2 sm:py-3 h-16 sm:h-20 flex flex-col sm:flex-row items-center justify-between rounded-b-2xl shadow-lg backdrop-blur-md'>
            <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-xl sm:text-2xl md:text-3xl cursor-pointer drop-shadow hover:scale-105 transition duration-300 mb-2 sm:mb-0'>
                Mariama Diané
            </h1>
            <ul className='flex gap-2 sm:gap-4 list-none text-base sm:text-lg md:text-xl font-medium justify-end'>
                <li>
                    <a href="#apropos" className='px-2 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300'>A propos</a>
                </li>
                <li>
                    <a href="#experiences" className='px-2 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300'>Expériences</a>
                </li>
                <li>
                    <a href="#contact" className='px-2 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}
