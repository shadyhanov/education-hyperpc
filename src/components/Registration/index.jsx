import React from "react";
import './Registration.css';

export const Login = () => {
    return (
        <div className="registration">
            <div className="pages">
                 <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="FirstName"  required/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="LastName" required/>
                        <div class="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom03" required/>
                        <div class="invalid-feedback">
                        Please provide a valid city.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom04" class="form-label">State</label>
                        <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Kyrgyzstan</option>
                        <option>Uzbekistan</option>
                        <option>Azerbaijan</option>
                        <option>Tajikstan</option>
                        <option>India</option>
                        <option>Turkey</option>
                        <option>China</option>
                        <option>Germany</option>
                        <option>Great Britain</option>
                        <option>France</option>
                        <option>Russian</option>
                        <option>Kazakstan</option>
                        <option>Canada</option>
                        </select>
                        <div class="invalid-feedback">
                        Please select a valid state.
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationCustom05" required/>
                        <div class="invalid-feedback">
                        Please provide a valid zip.
                        </div>
                    </div>

                    <label>Phone number</label>
                    <div class="input-group" style={{width: '300px'}}>
                        <div>
                            <select class="form-select" id="validationCustom04" required style={{width: '110px'}}>
                                <option selected disabled value="">+996</option>
                                <option>+996</option>
                                <option>+998</option>
                                <option>+994</option>
                                <option>+992</option>
                                <option>+91</option>
                                <option>+90</option>
                                <option>+86</option>
                                <option>+49</option>
                                <option>+44</option>
                                <option>+33</option>
                                <option>+7</option>
                                <option>+1</option>
                            </select>
                        </div>
                        <input type="number" aria-label="First name" class="form-control" required/>
                    </div>

                    <label>WhatsApp number</label>
                    <div class="input-group" style={{width: '300px'}}>
                        <div>
                            <select class="form-select" id="validationCustom04" required style={{width: '110px'}}>
                                <option selected disabled value="">+996</option>
                                <option>+996</option>
                                <option>+998</option>
                                <option>+994</option>
                                <option>+992</option>
                                <option>+91</option>
                                <option>+90</option>
                                <option>+86</option>
                                <option>+49</option>
                                <option>+44</option>
                                <option>+33</option>
                                <option>+7</option>
                                <option>+1</option>
                            </select>
                        </div>
                        <input type="number" aria-label="First name" class="form-control" required/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>


                </form>
                


            </div>
        </div>
    )
}