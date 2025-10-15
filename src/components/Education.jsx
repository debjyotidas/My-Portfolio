import React from 'react'
import education from './data/education.json'

const Experience = () => {
  return (
    <>
      <div className='container ex' id="education">
      <h1>Education</h1>
      {
        education.map((data)=>{
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
                    <h2>{data.organisation}</h2>
                    <h5><span style={{color:"yellowgreen"}}>{data.startDate}{"-"}{data.endDate}</span>{" "} <span style={{color:"yellow"}}>{data.location}</span></h5>
                    <h6>{data.experiences}</h6>
                    <h6>{data.grade}</h6>
                    
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