import React from 'react'

function Fees() {
  return (
    <>
    <hr/>
    <h2>components-3</h2>
    <div class="container">
    <div class="fee-form">

        <h1>School Fee Payment</h1>

        <form>

            <div class="row mb-4">
                <div class="col-md-6">
                    <label>Student First Name *</label>
                    <input type="text" class="form-control" placeholder="First Name"/>
                </div>

                <div class="col-md-6">
                    <label>Student Last Name *</label>
                    <input type="text" class="form-control" placeholder="Last Name"/>
                </div>
            </div>

            <div class="mb-4">
                <label>Email Address *</label>
                <input type="email" class="form-control"/>
            </div>

            <div class="mb-4">
                <label>Phone Number *</label>
                <input type="tel" class="form-control"/>
            </div>

            <div class="mb-4">
                <label>Student ID *</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="mb-4">
                <label>Course / Program Name *</label>
                <input type="text" class="form-control"/>
            </div>

            <div class="mb-4">
                <label>Year of Study *</label>
                <select class="form-select">
                    <option>Select Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                </select>
            </div>

            <div class="row mb-4">

                <div class="col-md-6">
                    <label>Select Fee Type *</label>

                    <select class="form-select">
                        <option>Tuition Fee</option>
                        <option>Admission Fee</option>
                        <option>Exam Fee</option>
                        <option>Library Fee</option>
                        <option>Transport Fee</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label>Payment Method *</label>

                    <select class="form-select">
                        <option>UPI</option>
                        <option>Debit Card</option>
                        <option>Credit Card</option>
                        <option>Net Banking</option>
                        <option>Cash</option>
                    </select>
                </div>

            </div>

            <div class="mb-4">
                <label>Fee Amount (₹)</label>
                <input type="number" class="form-control" id="amount"/>
            </div>

            <div class="mb-4">
                <label>Remarks</label>
                <textarea class="form-control" rows="4"></textarea>
            </div>

            <div class="text-center">
                <button type="button" class="btn-pay" onclick="payFee()">
                    Pay Now
                </button>
            </div>

        </form>

    </div>
</div>
</>
  )
}

export default Fees