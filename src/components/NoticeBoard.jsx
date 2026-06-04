import React from 'react'

function NoticeBoard() {
   const notices = [
    {
      id: 1,
      title: "Summer Vacation",
      date: "10 June 2026",
      description: "School will remain closed from 15 June to 30 June."
    },
    {
      id: 2,
      title: "Annual Sports Day",
      date: "20 July 2026",
      description: "Annual Sports Day will be organized on the school ground."
    },
    {
      id: 3,
      title: "Exam Schedule",
      date: "01 August 2026",
      description: "Mid-Term Examination timetable has been published."
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Notice Board</h2>

      <div className="row">
        {notices.map((notice) => (
          <div className="col-md-4 mb-4" key={notice.id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{notice.title}</h5>
                <p className="text-muted">{notice.date}</p>
                <p>{notice.description}</p>
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
  );
}

export default NoticeBoard