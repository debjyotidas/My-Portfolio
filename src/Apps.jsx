import React, { Component, useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Aos from 'aos';
import "aos/dist/aos.css"

const Apps=()=>{
    useEffect(() => {
      Aos.init()
    
    }, [])
    
    return(
    <>
    <div>
        <Navbar/>
        <div className='container'>
            <Home/>
            <Experience/>
            <Skills/>
            <Project/>
            <Education/>
            <Contact/>
            
        </div>
        
    </div>
    </>
    )

}
export default Apps;