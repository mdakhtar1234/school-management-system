import React from 'react'
import DeveloperDetails from '../assets/DeveloperDetails';
import img1 from '../assets/images/developerImage.jpg';
function Developer() {
  return (
    <>
      {DeveloperDetails.map((detail)=>(
        <div className="container py-5">
          <div className="card border-0 shadow-lg developer-card">
            <div className="row g-0">
               {/** Left side */}

               <div className="col-md-4 text-center p-4 bg-primary text-white">
                 <img
                  src={img1}
                  alt="Developer"
                  className="img-fluid rounded-circle border border-4 border-light mb-3"
                  style={{ width: "180px", height: "180px" }}
                />
                <h2>{detail.name}</h2>
                <p className="fw-bold">{detail.domain}</p>
                 <p>{detail.phone}</p>
                <p>{detail.email}</p>

                <div className="mt-4">
                  <a href={detail.socialLinks.facebook}
                  className="btn btn-light m-1"
                  >
                    facebook
                  </a>

                  <a href={detail.socialLinks.linkedin}
                  className="btn btn-light m-1"
                  >
                    Linkedin
                  </a>

                   <a href={detail.socialLinks.github}
                  className="btn btn-light m-1"
                  >
                    Github
                  </a>
                </div>
               </div>

               {/** Right Side  */}
               <div className="col-md-8 p-5">
                <h3 className="text-primary">About Me</h3>
                  <p>{detail.about}</p>
                  
                  <hr />

             <h3 className="text-primary">Education</h3>
                
                <ul>
                  {detail.education.map((edu)=>(
                    <li>{edu}</li>
                  ))}
                </ul>

                <hr/>
            <h3 className="text-primary">Skills</h3>

            {detail.skills.map((skills)=>(
           <div className="mb-3">
            <label>{skills.name}</label>

           <div className="progress">
      <div
        className={`progress-bar ${skills.color}`}
        role="progressbar"
        style={{ width: skills.percentage }}
      >
            {skills.percentage}
 
           </div>
            </div>
           </div>

            

             ))}

               </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Developer
