import React from 'react';

import { FaArrowLeft, FaMeh, FaRupeeSign } from "react-icons/fa";

import { Modal, Button, Card } from 'react-bootstrap';

export default function Preview(props) {


    return (
        <Modal show={props.show} onHide={props.cancelHandler.bind(this)}>

            <Modal.Header closeButton>

                <Modal.Title>
                    <strong style={{ "font-size": "20px" }}>
                        {<FaArrowLeft onClick={props.back.bind(this)} />}
                    </strong>
                    <span style={{ paddingLeft: 50 }}>{props.title}</span>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <div className="start">
                    <div className="startHeading">Work Preview</div>
                    <label className="startP">This is your work card that clients will see.</label>

                    <Card className="cardShadow mt-3">
                        <Card.Img variant="top" src="card1.jfif" style={{ height: 250 }} />

                        <div className="previewText">I can convert your idea into viral video.</div >

                        <div className="mt-5">
                            <FaMeh className="previewIcon" />
                            <b className="previewName">Rahul Rock</b>
                            <div className="previewName">React</div>

                            <label style={{ float: 'right', color: 'green', marginLeft: 5 }}>
                                from <FaRupeeSign  /> <b>500</b></label>
                        </div>
                    </Card>
                    <div className="mt-5 pb-2" style={{ borderBottom: '1px solid  lavender', }}>
                        <b>Description</b>
                        <b style={{ float: 'right' }}>Amount (INR)</b>
                    </div>

                    <div className="mt-3">
                        <label>One time activation fees</label>
                        <label style={{ float: 'right' }}><FaRupeeSign  /> 99</label>
                    </div>

                    <div className="mt-3 pb-2" style={{ borderBottom: '1px solid  lavender', }}>
                        <label className="previewLastText">This is to verify your details and onboard you as a certified seller</label>

                    </div>

                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.cancelHandler.bind(this)}>SUBMIT FOR REVIEW</Button>

            </Modal.Footer>

        </Modal>
    );

}
