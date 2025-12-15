import React from 'react'
import { useState } from 'react';

function Projet() {
 "use client";
  const projets = [
    {
      id: 1,
      titre: "tastRoots",
      description: "Application de gestion de recettes développée avec React, Node.js, Express et MongoDB.",
      statut: "Personnel",
      couleur: "blue",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      images: [
        "tastRoot.jpg",
        "tastRootLOGO.png",
      ]
    },
    {
      id: 2,
      titre: "Sira",
      description: "Solution numérique pour digitaliser les carnets médicaux et faciliter l'accès aux dossiers patients.",
      statut: "En cours",
      couleur: "green",
      technologies: ["Projet de groupe", "Solution médicale", "Équipe féminine"],
      images: [
        "Sira1.png",
        "Sira2.png",
        "Sira3.png"
      ]
    },
    {
      id: 3,
      titre: "TATKA TAKA",
      description: "Application de transport avec réservation de taxi et suivi GPS en temps réel.",
      statut: "Soutenance",
      couleur: "purple",
      technologies: ["Transport", "GPS", "Réservation", "Temps réel"],
      images: [
        "tata1.png",
        "taka2.png",
      ]
    }
  ];

  return (
    <section id='projets' className='bg-white py-12 sm:py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Mes <span className='text-blue-600'>Projets</span>
          </h2>
          <p className='text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto'>
            Naviguez à travers les images pour découvrir mes réalisations
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projets.map((projet) => (
            <ProjetCard key={projet.id} projet={projet} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant de carte de projet
const ProjetCard = ({ projet }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projet.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projet.images.length) % projet.images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const colorClasses = {
    blue: {
      badge: 'bg-blue-100 text-blue-700',
      tech: 'bg-blue-50 text-blue-700'
    },
    green: {
      badge: 'bg-green-100 text-green-700',
      tech: 'bg-green-50 text-green-700'
    },
    purple: {
      badge: 'bg-purple-100 text-purple-700',
      tech: 'bg-purple-50 text-purple-700'
    }
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300'>
      {/* Carrousel d'images */}
      <div className='relative h-64 overflow-hidden'>
        {/* Image actuelle */}
        <div className='w-full h-full'>
          <img 
            src={projet.images[currentImage]} 
            alt={`${projet.titre} - Capture ${currentImage + 1}`}
            className='w-full h-full object-cover'
          />
        </div>
        
        {/* Boutons de navigation */}
        <button 
          onClick={prevImage}
          className='absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition'
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className='absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition'
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
        {/* Indicateurs de slide */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {projet.images.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentImage ? 'bg-white' : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-900'>{projet.titre}</h3>
          <span className={`px-3 py-1 ${colorClasses[projet.couleur].badge} text-xs font-semibold rounded-full`}>
            {projet.statut}
          </span>
        </div>
        
        <p className='text-gray-600 text-sm mb-4'>{projet.description}</p>
        
        <div className='flex flex-wrap gap-2'>
          {projet.technologies.map((tech, index) => (
            <span key={index} className={`px-3 py-1 ${colorClasses[projet.couleur].tech} text-xs rounded-full`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projet