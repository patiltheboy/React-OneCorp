import React from "react";
import { Button, Col, Form } from "react-bootstrap";

function MobileProfessionalExperience() {

    return (
        <>
            <div className="basicInfoTitle">Briefly explain your educational and professional background so
            buyers can hire you easily and quickly.
        </div>
            <Form className="mt-5">
                <Form.Group>
                    <Form.Label>College/University Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <div className="mobileAddBtn">Add</div>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Work Experience</Form.Label>
                    <div>
                        <Form.Label>Work Position</Form.Label>
                    </div>

                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Years of experience</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <div className="mobileAddBtn">Add</div>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Work Experience</Form.Label>
                    <Form.Label className="ml-2">(Upto 10 keywords)</Form.Label>
                    <div>
                        <Form.Label>Skills</Form.Label>
                    </div>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Personal Achievments</Form.Label>
                    <div>
                        <Form.Label>Certification Name</Form.Label>
                    </div>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Provided by</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <div className="mobileAddBtn">Add</div>

            </Form>

            <Button variant="success" size="lg" block className="mt-5 mb-3">Proceed</Button>
        </>
    )
}
export default MobileProfessionalExperience;