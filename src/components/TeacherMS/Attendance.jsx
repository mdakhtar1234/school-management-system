import React from 'react'

function Attendance() {
  return (
     <>
    <hr/>
         
      <div class="attendance-box">

    <div class="header">
        Student Attendance
    </div>

    <div class="p-4">

        <div class="table-responsive">

            <table class="table table-bordered">

                <thead >
                    <tr >
                        <th class="text-primary">Sr No</th>
                        <th class="text-primary">Enrollment</th>
                        <th class="text-primary">First Name</th>
                        <th class="text-primary">Last Name</th>
                        <th class="text-primary">Present</th>
                        <th class="text-danger">Absent</th>
                        <th class="text-primary">Date</th>
                        <th class="text-primary">Comment</th>
                    </tr>
                </thead>

                <tbody id="studentTable">

                    <tr>
                        <td>1</td>
                        <td>202500012</td>
                        <td>Ali</td>
                        <td>Khan</td>
                        <td class="text-center">
                            <input type="checkbox"/>
                        </td>
                          <td class="text-center">
                            <input type="checkbox"/>
                        </td>
                        <td class="text-center">20/04/2012</td>
                        <td>
                            <textarea class="form-control"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>202500013</td>
                        <td>Rahul</td>
                        <td>Kumar</td>
                        <td class="text-center">
                            <input type="checkbox"/>
                        </td>
                         <td class="text-center">
                         <input  type="checkbox"/>
                        </td>
                         <td class="text-center">20/04/2012</td>
                        <td>
                            <textarea class="form-control"></textarea>
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

        <button class="btn btn-success px-5">
            Save Attendance
        </button>

    </div>

</div>
    </>
  )
}

export default Attendance
