import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function BasicInfo() {

    const [inputFile, setInputFile] = useState('');

    const [values, setValues] = useState({
        name: '',
        email: '',
        mobile: '',
        state: '',
        about: '',
        language: '',
    });
    const [errors, setErrors] = useState('');

    const validate = () => {
        let errors = {};
        let isValid = true;

        //Email
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!values.email) {
            errors.email = 'Email address is required';
            isValid = false;
        } else if (!pattern.test(values.email)) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }
        // Name
        if (!values.name) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (!(values.name).match(/^[a-z A-Z ]*$/)) {
            errors.name = 'Name is invalid'
            isValid = false;
        }
        // Mobile
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required"
            isValid = false;
        } else if (!(values.mobile).match(/^[0-9\b]{10}$/)) {
            errors.mobile = "Mobile Number is invalid"
            isValid = false;
        }
        // State
        if (!values.state || !values.state === "select") {
            errors.state = "Select state";
            isValid = false;
        }
        // about
        if (!values.about) {
            errors.about = "About yourself is required";
            isValid = false;
        }
        // Language
        if (!values.language || !values.language === "select") {
            errors.language = "Select Language";
            isValid = false;
        }
        if (!inputFile) {
            errors.inputFile = 'Username required';
            isValid = false;
        }
        // return
        setErrors(errors)
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate(values)) {
            alert('You have been successfully registered.')
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });

    };


    return (
        <>
            <div className="basicInfoTitle">Tell us about yourself. This information will appear on your public profile
            so that potential buyers know you better.
        </div>
            <Form className="mt-5" noValidate>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && (
                        <p className="errorMsg" >{errors.name}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        autoComplete="on"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && (
                        <p className="errorMsg" >{errors.email}</p>
                    )}
                </Form.Group>

                <Form.Group >
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                        autoComplete="off"
                        type="text"
                        name="mobile"
                        maxLength={10}
                        onChange={handleChange}
                        value={values.mobile}
                    />
                    {errors.mobile && (
                        <p className="errorMsg" >{errors.mobile}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select"
                        name="state"
                        onChange={handleChange}
                        value={values.state}
                    >
                        <option value="select"></option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                    {errors.state && (
                        <p className="errorMsg" >{errors.state}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="baicInfoHead">About</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        name="about"
                        value={values.about}
                        onChange={handleChange}
                        placeholder="Write about yourself, give an introduction, tell about your skills, experience and what you are good at"
                    />
                    <Form.Text className="text-muted">
                        Note: Do not mention your Website, Mobile Number, Email Address and/or any contact details in this section
                        </Form.Text>
                    {errors.about && (
                        <p className="errorMsg" >{errors.about}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="baicInfoHead">Languages</Form.Label>
                    <Form.Text className="text-muted">
                        Tell your buyers which language(s) you prefer
                        </Form.Text>
                    <Form.Label className="mt-3">Select Languages</Form.Label>
                    <Form.Control as="select"
                        name="language"
                        value={values.language}
                        onChange={handleChange}
                    >
                        <option value="select"></option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                    {errors.language && (
                        <p className="errorMsg" >{errors.language}</p>
                    )}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Add Introductory Video</Form.Label>
                    <Form.Text className="text-muted">
                        Add introductory video: Upload a video of yourself with details you would like to let your buyer know
                        </Form.Text>
                    <Form.Group>
                        <input type="text" className="inputLabel" value={inputFile} />
                        <label className="labelInputFile" htmlFor="file">Upload</label>
                    {errors.inputFile && (
                        <p className="errorMsg" >{errors.inputFile}</p>
                    )}
                        <input
                            type="file"
                            name="selectedFile"
                            id="file"
                            className="upload-photo"
                            onChange={(e) => {

                                switch (e.target.name) {
                                    // Updated this
                                    case 'selectedFile':
                                        if (e.target.files.length > 0) {
                                            // Accessed .name from file 
                                            setInputFile(e.target.files[0].name);
                                        }
                                        break;
                                    default:
                                        setInputFile(e.target.value);
                                }
                            }
                            }
                        />
                    </Form.Group>
                </Form.Group>
            </Form>

            <Button variant="success" size="lg" block className="mt-5 mb-3" onClick={handleSubmit}>Proceed</Button>
        </>
    )
}
export default BasicInfo;