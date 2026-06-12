import React, { useState } from 'react'
import Footer from './Footer';

function Contact() {

  const[username,setUsername]= useState("")
  const[email,setEmail] =useState("")
  const[subject,setSubject] =useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(username === "" || email === "" || subject ==="")
    {
      alert("Please fill the All field !")
      return
    }

    alert("Form Submitted Succefully")
    

     // clean input 
     setEmail("")
     setUsername("")
     setSubject("")
  };


  return (
    <>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3>Contact Us</h3>
          </div>

          <div className="card-body">
            <form  onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name <small className='text-danger'>*</small></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address <small className='text-danger'>*</small></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject<small className='text-danger'>*</small></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message <small className='text-primary'>(options)</small></label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="card shadow mt-4">
          <div className="card-body">
            <h4>School Information</h4>
            <hr />

            <p>
              <strong>School Name:</strong> ABC Public School
            </p>

            <p>
              <strong>Address:</strong> Mumbai, Maharashtra, India
            </p>

            <p>
              <strong>Email:</strong> school@gmail.com
            </p>

            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact