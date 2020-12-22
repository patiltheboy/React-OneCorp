import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

function ProfessionalExperience() {


    const [values, setValues] = useState({
        college: '',
        degree: '',
        degree_year: '',
        work_postion: '',
        years_of_experience: '',
        skills: '',
        certification_name: '',
        certification_year: '',
        certification_provided_by: '',
    });
    const [errors, setErrors] = useState('');

    const validate = () => {
        let errors = {};
        let isValid = true;

        // College/ University Name
        if (!values.college) {
            errors.college = "College/ University Name is required";
            isValid = false;
        }
        // Degree
        if (!values.degree) {
            errors.degree = "Degree is required";
            isValid = false;
        }
        // Language
        if (!values.degree_year || !values.degree_year === "select") {
            errors.degree_year = "Select Year";
            isValid = false;
        }
        // Work Postion
        if (!values.work_postion) {
            errors.work_postion = "Degree is required";
            isValid = false;
        }
        // years_of_experience
        if (!values.years_of_experience || !values.years_of_experience === "select") {
            errors.years_of_experience = "Select Years of Experience";
            isValid = false;
        }
        // Skills
        if (!values.skills) {
            errors.skills = "Skills is required";
            isValid = false;
        }
        // Certfication Name
        if (!values.certification_name) {
            errors.certification_name = "Certfication Name is required";
            isValid = false;
        }
        // Certfication Year
        if (!values.certification_year) {
            errors.certification_year = "Year is required"
            isValid = false;
        } else if (!(values.certification_year).match(/^[0-9\b]{10}$/)) {
            errors.certification_year = "Year is invalid"
            isValid = false;
        }
        // Certfication Provided By
        if (!values.certification_provided_by) {
            errors.certification_provided_by = "Provided By is required";
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

    const addUniversity = (event) => {
        event.preventDefault();

        setValues({ college: '', degree: '', degree_year: '' })
        console.log(values.college, values.degree, values.degree_year)
    }

    return (
        <>
            <div className="basicInfoTitle">Briefly explain your educational and professional background so
            buyers can hire you easily and quickly.
        </div>
            <Form className="mt-5">


                <Form.Group>
                    <Form.Label>College/University Name</Form.Label>
                    <Form.Control type="text"
                        name="college"
                        value={values.college}
                        onChange={handleChange}
                    />
                    {errors.college && (
                        <p className="errorMsg" >{errors.college}</p>
                    )}
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control type="text"
                                name="degree"
                                value={values.degree}
                                onChange={handleChange}
                            />
                            {errors.degree && (
                                <p className="errorMsg" >{errors.degree}</p>
                            )}
                        </Col>

                        <Col>
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select"
                                name="degree_year"
                                value={values.degree_year}
                                onChange={handleChange}
                            >
                                <option value="select"></option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                            {errors.degree_year && (
                                <p className="errorMsg" >{errors.degree_year}</p>
                            )}
                        </Col>
                    </Form.Row>
                </Form.Group>
                <div className="desktopAddBtn" onClick={addUniversity}>Add</div>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Work Experience</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Label>Work Position</Form.Label>
                            <Form.Control type="text"
                                name="work_postion"
                                value={values.work_postion}
                                onChange={handleChange}
                            />
                            {errors.work_postion && (
                                <p className="errorMsg" >{errors.work_postion}</p>
                            )}
                        </Col>
                        <Col>
                            <Form.Label>Years of experience</Form.Label>
                            <Form.Control as="select"
                                name="years_of_experience"
                                value={values.years_of_experience}
                                onChange={handleChange}
                            >
                                <option value="select"></option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                            {errors.years_of_experience && (
                                <p className="errorMsg" >{errors.years_of_experience}</p>
                            )}
                        </Col>
                    </Form.Row>
                </Form.Group>
                <div className="desktopAddBtn">Add</div>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Skills</Form.Label>
                    <Form.Label className="ml-2">(Upto 10 keywords)</Form.Label>
                    <div>
                        <Form.Label>Skills</Form.Label>
                    </div>
                    <Form.Control type="text" name="skills"
                        value={values.skills}
                        onChange={handleChange}
                    />
                    {errors.skills && (
                        <p className="errorMsg" >{errors.skills}</p>
                    )}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Personal Achievments</Form.Label>
                    <div>
                        <Form.Label>Certification Name</Form.Label>
                    </div>
                    <Form.Control type="text"
                        name="certification_name"
                        value={values.certification_name}
                        onChange={handleChange}
                    />
                    {errors.certification_name && (
                        <p className="errorMsg" >{errors.certification_name}</p>
                    )}
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Year</Form.Label>
                            <Form.Control type="text"
                                name="certification_year"
                                maxLength={4}
                                value={values.certification_year}
                                onChange={handleChange}
                            />
                            {errors.certification_year && (
                                <p className="errorMsg" >{errors.certification_year}</p>
                            )}
                        </Col>
                        <Col>
                            <Form.Label>Provided by</Form.Label>
                            <Form.Control type="text"
                                name="certification_provided_by"
                                value={values.certification_provided_by}
                                onChange={handleChange}
                            />
                            {errors.certification_provided_by && (
                                <p className="errorMsg" >{errors.certification_provided_by}</p>
                            )}
                        </Col>
                    </Form.Row>
                </Form.Group>
                <div className="desktopAddBtn">Add</div>

            </Form>

            <Button variant="success" size="lg" block className="mt-5 mb-3" onClick={handleSubmit}>Proceed</Button>
        </>
    )
}
export default ProfessionalExperience;