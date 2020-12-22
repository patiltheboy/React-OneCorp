import React, { Component } from "react";    
    
class testing1 extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNumber: '',    
            city: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, emailId, dob, gender, phoneNumber, city } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //City    
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "Select city.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, cityErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Admission Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="city">City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Pune">Pune</option>    
                                <option value="Mumbai">Mumbai</option>    
                                <option value="Hyderabad">Hyderabad</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default testing1;

// import React, { useState } from "react";
// import { Overlay } from "react-bootstrap";

// function Testing() {

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");

//     const [firstNameErr, setFirstNameErr] = useState("");
//     const [lastNameErr, setLastNameErr] = useState("");
//     const [errors, setErrors] = useState({
        
//     })

//     const formValidation = () => {
//         const firstNameErr = {};
//         const lastNameErr = {};
//         let isValid = true;

//         if (firstName.length < 5) {
//             firstNameErr.firstName = "first name is too short";
//             isValid = false;
//         }
//         if (firstName.length > 10) {
//             firstNameErr.firstName = "first name is too long";
//             isValid = false;
//         }
//         if (!lastName.includes("123")) {
//             lastNameErr.lastName123 = "last name 123"
//             isValid = false;
//         }
//         setFirstNameErr(firstNameErr);
//         setLastNameErr(lastNameErr);
//         return isValid
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if(formValidation()){
//             alert('hello')
//         }
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <label>First Name : </label>
//             <input type="text"
//                 value={firstName}
//                 onChange={(e) => { setFirstName(e.target.value) }}
//             />
//             <br />
//             {firstNameErr.firstName && (
//                         <p className="errorMsg" >{firstNameErr.firstName}</p>
//                     )}
//             <label>Last Name : </label>
//             <input type="text"
//                 value={lastName}
//                 onChange={(e) => { setLastName(e.target.value) }}
//             />
//             <br />
//             {/* {Object.keys(lastNameErr).map((key) => {
//                 return <div style={{ color: 'red' }}>{lastNameErr}</div>
//             })} */}

//             <button type="submit">Submit</button>

//         </form>
//     )
// }

// export default Testing;