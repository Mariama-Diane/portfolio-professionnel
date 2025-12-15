import React from 'react'

function Apropos() {
  return (
<section id='apropos' className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 flex items-center">
  <div className="max-w-7xl mx-auto w-full">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Texte de présentation */}
      <div className="order-2 lg:order-1">
        <div className="space-y-6">
          
          {/* Titre professionnel */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">
            Étudiante en Génie Informatique <br />
            Licence 4
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
            Passionnée par le développement web, je combine curiosité et rigueur dans mes projets. 
            Toujours motivée à apprendre et à évoluer dans le domaine des technologies.
          </p>
          
         
        </div>
        
       
      </div>
      
      {/* Photo de profil */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative">
         
          
          {/* Photo */}
          <img 
            src="mariama.jpg" 
            alt="Mariama - Étudiante en Génie Informatique" 
            className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 lg:w-88 lg:h-104 object-cover object-top rounded-2xl shadow-xl"
          />
          
          {/* Élément décoratif */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-50 rounded-2xl -z-10"></div>
        </div>
      </div>
    </div>
    
    {/* Indicateur de défilement */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
      <div className="animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>
</section>
  )
}

export default Apropos