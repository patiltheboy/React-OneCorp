import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./MobileEditProfile.css";

function MobileBasicInfo() {

    const [inputFile, setInputFile] = useState('');
    
    return (
        <>
            <div className="basicInfoTitleM">Tell us about yourself. This information will appear on your public profile
            so that potential buyers know you better.
        </div>
            <Form className="mt-5">
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="baicInfoHead">About</Form.Label>
                    <Form.Control as="textarea" rows={3} className="text-justify"
                        placeholder="Write about yourself, give an introduction, tell about your skills, experience and what you are good at"
                    />
                    <Form.Text className="text-muted">
                        Note: Do not mention your Website, Mobile Number, Email Address and/or any contact details in this section
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="baicInfoHead">Languages</Form.Label>
                    <Form.Text className="text-muted">
                        Tell your buyers which language(s) you prefer
                        </Form.Text>
                    <Form.Label className="mt-3">Select Languages</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="baicInfoHead">Add Introductory Video</Form.Label>
                    <Form.Text className="text-muted">
                        Add introductory video: Upload a video of yourself with details you would like to let your buyer know
                        </Form.Text>
                </Form.Group>

                <Form.Group>
                        <input type="text" className="inputLabelM" value={inputFile} />
                        <label className="labelInputFileM" for="file">Upload</label>
                        <input
                            type="file"
                            name="selectedFile"
                            id="file"
                            className="upload-photoM"
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
            </Form>

            <Button variant="success" size="lg" block className="mt-5 mb-3">Proceed</Button>
        </>
    )
}
export default MobileBasicInfo;