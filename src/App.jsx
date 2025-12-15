import React from 'react';
import Navbar from './components/Navbar';
import Apropos from './components/Apropos';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Projet from './components/Projet';
function App(){
    return(
        <>
           
            <Navbar/>
            <Apropos/>
             <hr  className='bg-white-200 text-xl'/>
            <Experiences/>
            <Projet/>
            <Footer/>
            
            
           


            
        </>
        
    )
}

export default App;



