import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
      <div className='container ex' id="experience">
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return(
            <>
              <div key={data.id} className='ex-items text-center my-5'
              data-aos="zoom-in"
        data-aos-duration="1000"
              >
                  <div className='left'>
                      <img src={`/assets/${data.imageSrc}`} alt=""/>
                  </div>
                  <div className='right'>
                    <h2>{data.role}</h2>
                    <h3>{data.organisation}</h3>
                    <h5><span style={{color:"yellowgreen"}}>{data.startDate}{"-"}{data.endDate}</span>{" "} <span style={{color:"yellow"}}>{data.location}</span></h5>
                    {data.experiences.map((experience, index) => (
                      <h6 key={index}>{experience}</h6>
                    ))}
                    
                  </div>

              </div>
            </>

          )

        })
      }
      </div>
    </>
    
  )
}

export default Experience