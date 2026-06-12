import React from 'react'
import notices from '../assets/NoticeBoardData';
import Footer from './Footer';
function NoticeBoard() {
   
  return (
    <>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Notice Board</h2>

      <div className="row">
        {notices.map((notice) => (
          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{notice.title}</h5>
                <p className="text-muted">{notice.date}</p>
               <ul>
                <li>{notice.description}</li>
               </ul>
              </div>

              <div className="card-footer text-center">
                <button className="btn btn-primary btn-sm">
                  View Notice
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default NoticeBoard