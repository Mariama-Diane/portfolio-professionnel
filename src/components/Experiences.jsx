import React from 'react'

function Experiences() {
    return (
        <section id='experiences' className='bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
            <div className='max-w-6xl mx-auto'>

                {/* Titre principal de la section */}
                <div className='text-center mb-12 sm:mb-16'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                        Mon <span className='text-blue-600'>Parcours</span>
                    </h2>
                    <p className='text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto'>
                        Découvrez mes compétences techniques et mes expériences professionnelles
                    </p>
                </div>

                {/* Bloc Expériences Techniques */}
                <div className='mb-16 sm:mb-20'>
                    <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                        {/* Texte */}
                        <div>
                            <div className='inline-flex items-center gap-3 mb-6'>
                                <div className='w-10 h-1 bg-blue-500 rounded-full'></div>
                                <h3 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                                    Compétences Techniques
                                </h3>
                            </div>

                            <div className='space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed'>
                                <p>
                                    J'ai acquis une solide maîtrise du <span className='font-semibold text-blue-600'>HTML/CSS</span>,
                                    que j'ai renforcée à travers plusieurs projets web. Je possède un niveau intermédiaire en
                                    <span className='font-semibold text-blue-600'> Java</span>,
                                    <span className='font-semibold text-blue-600'> JavaScript</span> et
                                    <span className='font-semibold text-blue-600'> PHP/MySQL</span> que j'ai mis en pratique
                                    dans la réalisation de deux sites en PHP/MySQL.
                                </p>
                                <p>
                                    Côté frameworks, je suis à l'aise avec <span className='font-semibold text-blue-600'>Bootstrap</span>
                                    et je me forme actuellement sur <span className='font-semibold text-blue-600'>Node.js</span>,
                                    <span className='font-semibold text-blue-600'>TailwindCSS</span> et
                                    <span className='font-semibold text-blue-600'>React</span>, que j'utilise pour concevoir
                                    mon portfolio actuel.
                                </p>
                            </div>
                        </div>

                        {/* Logos technologies */}
                        <div className='bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 sm:p-8'>
                            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 sm:gap-6'>
                                {[
                                    { src: "html.svg", alt: "HTML", name: "HTML" },
                                    { src: "css.svg", alt: "CSS", name: "CSS" },
                                    { src: "bootstrap.svg", alt: "Bootstrap", name: "Bootstrap" },
                                    { src: "tailwindcss.svg", alt: "TailwindCSS", name: "Tailwind" },
                                    { src: "react.svg", alt: "React", name: "React" },
                                    { src: "javascript.svg", alt: "JavaScript", name: "JS" },
                                ].map((tech, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 group'
                                    >
                                        <img
                                            src={tech.src}
                                            alt={tech.alt}
                                            className='w-12 h-12 sm:w-14 sm:h-14 mb-2 group-hover:scale-110 transition duration-300'
                                        />
                                        <span className='text-sm font-medium text-gray-600'>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <div className='flex justify-center my-12'>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full'></div>
                </div>

                {/* Bloc Expériences Professionnelles */}
                <div className='mt-16 sm:mt-20'>
                    <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                        {/* Image */}
                        <div className='order-2 lg:order-1'>
                            <div className='relative'>
                                <div className='absolute -inset-4 bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl -z-10'></div>
                                <img
                                    src="experience.jpg"
                                    alt="Logo Club"
                                    className='w-full max-w-md mx-auto rounded-xl shadow-lg object-cover aspect-square'
                                />
                            </div>
                        </div>

                        {/* Texte */}
                        <div className='order-1 lg:order-2'>
                            <div className='inline-flex items-center gap-3 mb-6'>
                                <div className='w-10 h-1 bg-blue-500 rounded-full'></div>
                                <h3 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                                    Expériences Professionnelles
                                </h3>
                            </div>

                            <div className='space-y-6'>
                                <div className='bg-blue-50/50 rounded-xl p-5 sm:p-6'>
                                    <h4 className='font-bold text-lg text-blue-700 mb-2'>
                                        Assistante - Club des Jeunes Scientifiques Francophones de Guinée
                                    </h4>
                                    <p className='text-gray-700 leading-relaxed'>
                                        Stage où j'ai contribué à la coordination des activités scientifiques et éducatives.
                                    </p>
                                </div>

                                <div className='bg-blue-50/50 rounded-xl p-5 sm:p-6'>
                                    <h4 className='font-bold text-lg text-blue-700 mb-2'>
                                        Vice-présidente VBG - Koundara
                                    </h4>
                                    <p className='text-gray-700 leading-relaxed'>
                                        Gestion de la branche locale du club, développement de compétences en organisation,
                                        communication et leadership.
                                    </p>
                                </div>

                                <div className='mt-6'>
                                    <p className='text-gray-600 italic'>
                                        Ces expériences m'ont permis de développer des compétences transversales
                                        précieuses pour mon parcours professionnel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences