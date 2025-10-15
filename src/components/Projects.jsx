import React from 'react'
import project from './data/project.json'
import { Parallax } from 'react-next-parallax';

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className='row d-flex justify-content-center align-content-center'>
          {project.map((data)=>{
            return(
              <>
              
                <div key={data.key} className="my-4 mx-4 col-sm-6 col-md-4 col-lg-3"
                >
                <Parallax offsetMultiplier={2} scale={1.2}>
                <div className="card bg-dark text-light" style={{width: '18rem', border:'1px solid yellow',boxShadow:"5px 5px 10px 10px rgba(101, 175, 10, 0.5)"}}
                data-aos="flip-right"
                data-aos-duration="1000"
                >
                <div className='img d-flex justify-content-center align-content-center p-3'>
                  <img src={data.imageSrc}  className="card-img-top" alt="..." style={{width:'250px', height:"200px", border:'2px solid yellow',borderRadius:'10px'}}/>
                </div>
                  
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text" style={{fontSize: "13px"}}>{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                    <a href={data.source} className="btn btn-warning">View Code</a>
                  </div>
                </div>
                </Parallax>
                </div>
                
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects