import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'
import { useEffect,useRef } from 'react'
import { Parallax } from 'react-next-parallax';

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    
    const options={
      strings:['Hi, I am Debjyoti Das<br> I am a <strong style="color: yellow;">Frontend Developer</strong>', 'Hi, I am Debjyoti Das<br> I am a <strong style="color: yellow;">Programmer</strong>', 'Hi, I am Debjyoti Das<br> I am a <strong style="color: yellow;">Full Stack Developer</strong>'],
      typeSpeed:50,
      backSpeed:40,
      loop:true
    }
    const typed=new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className='container home' id="home">
        <div className='left'
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
          <h1 ref={typedRef}>
          </h1>
          <a href={pdf} download="Debjyoti_Das_cv_Frontend_Dev.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        
            <div className='right'>
                <div className='img'
                data-aos="fade-up-left"
                data-aos-duration="1000"
                >
                <img src={`/assets/${hero.imgSrc}`} alt="hero"/>
                </div>
              </div>
          
      </div>
    </>
    
  )
}

export default Home
