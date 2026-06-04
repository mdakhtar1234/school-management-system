import React from 'react'

export default function AddmissionForm() {
    return (

        <>
            <hr/>
            <div class="container">
                <div class="form-container">

                    <h2>School Admission Form</h2>

                    <form>

                        {/* Student Name */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Student Name *
                            </label>

                            <div class="col-md-4">
                                <input type="text"
                                    class="form-control"
                                    placeholder="First Name" />
                            </div>

                            <div class="col-md-5">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Last Name" />
                            </div>
                        </div>

                        {/**Phone */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Phone Number
                            </label>

                            <div class="col-md-9">
                                <input type="tel"
                                    class="form-control"
                                    placeholder="Enter Phone Number" />
                            </div>
                        </div>

                        {/**Email */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Email *
                            </label>

                            <div class="col-md-9">
                                <input type="email"
                                    class="form-control"
                                    placeholder="Enter Email" />
                            </div>
                        </div>

                        {/**Gender */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Gender
                            </label>

                            <div class="col-md-9">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input"
                                        type="radio" name="gender" />
                                    <label class="form-check-label">
                                        Male
                                    </label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input"
                                        type="radio" name="gender" />
                                    <label class="form-check-label">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/**Class */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Class Applying For *
                            </label>

                            <div class="col-md-9">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Enter Class" />
                            </div>
                        </div>

                        {/**DOB */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Date of Birth *
                            </label>

                            <div class="col-md-9">
                                <input type="date"
                                    class="form-control" />
                            </div>
                        </div>

                        {/**Parent Name  */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Parent/Guardian Name *
                            </label>

                            <div class="col-md-4">
                                <input type="text"
                                    class="form-control"
                                    placeholder="First Name" />
                            </div>

                            <div class="col-md-5">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Last Name" />
                            </div>
                        </div>

                        {/** Address */}
                        <div class="row mb-3">
                            <label class="col-md-3 col-form-label">
                                Current Address
                            </label>

                            <div class="col-md-9">
                                <input type="text"
                                    class="form-control mb-2"
                                    placeholder="Street Address" />

                                <input type="text"
                                    class="form-control mb-2"
                                    placeholder="Street Address Line 2" />

                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text"
                                            class="form-control"
                                            placeholder="City" />
                                    </div>

                                    <div class="col-md-6">
                                        <select class="form-select">
                                            <option>Select State</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Arunachal Pradesh</option>
                                            <option>Assam</option>
                                            <option> Bihar</option>
                                            <option>Chhattisgarh</option>
                                            <option>Goa</option>
                                            <option>Gujarat</option>
                                            <option>Haryana</option>
                                            <option>Himachal Pradesh</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="row mt-2">
                                    <div class="col-md-6">
                                        <input type="text"
                                            class="form-control"
                                            placeholder="Zip Code" />
                                    </div>

                                    <div class="col-md-6">
                                        <select class="form-select">
                                            <option>Select Country</option>
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>UK</option>

                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>



                        {/**Submit Button  */}
                        <div class="text-center">
                            <button type="submit"
                                class="btn btn-primary px-5">
                                Form Submit
                            </button>
                        </div>

                    </form>

                </div>
            </div>


        </>
    )
}
