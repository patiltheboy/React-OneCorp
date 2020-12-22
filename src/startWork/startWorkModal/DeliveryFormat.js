import React from 'react';

import { Modal, Accordion, Card, Button } from 'react-bootstrap';

import { FaArrowLeft, FaAngleDown } from "react-icons/fa";

export default function DeliveryFormat(props) {


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
                    <div className="startHeading">Select the formats of your delivery</div>
                    <label className="startP">In which format the buyer will get work?</label>

                    <Accordion className="mt-3">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="bdrBtm">
                            <label className="accodionHead">Files</label>
                            <label style={{ float: 'right' }}><FaAngleDown /></label>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">

                            <div id="format" className="mt-3 text-center">
                                <label className="checkboxLabel" htmlFor="format_0">
                                    <input type="checkbox" id="format_0" className="checkboxTop" />
                                    <label htmlFor="format_0" className="checkLabelText">SOURCE FILES</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_1" className="checkboxTop" />
                                    <label htmlFor="format_1" className="checkLabelText">JPG/JPEG</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_2" className="checkboxTop" />
                                    <label htmlFor="format_2" className="checkLabelText">PNG</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_3" className="checkboxTop" />
                                    <label htmlFor="format_3" className="checkLabelText">BMP</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_4" className="checkboxTop" />
                                    <label htmlFor="format_4" className="checkLabelText">GIF</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_5" className="checkboxTop" />
                                    <label htmlFor="format_5" className="checkLabelText">PDF</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_6" className="checkboxTop" />
                                    <label htmlFor="format_6" className="checkLabelText">DOC/DOCX</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_7" className="checkboxTop" />
                                    <label htmlFor="format_7" className="checkLabelText">XLS/XLSX</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_8" className="checkboxTop" />
                                    <label htmlFor="format_8" className="checkLabelText">PPT/PPTX</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_9" className="checkboxTop" />
                                    <label htmlFor="format_9" className="checkLabelText">OTHERS</label>
                                </label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                            </div>

                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <label className="accodionHead">Audio &amp; Video</label>
                            <label style={{ float: 'right' }}><FaAngleDown /></label>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div id="format" className="mt-3 text-center">
                                <label className="checkboxLabel" htmlFor="format_0">
                                    <input type="checkbox" id="format_0" className="checkboxTop" />
                                    <label htmlFor="format_0" className="checkLabelText">SOURCE FILES</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_1" className="checkboxTop" />
                                    <label htmlFor="format_1" className="checkLabelText">AAC</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_2" className="checkboxTop" />
                                    <label htmlFor="format_2" className="checkLabelText">WAV</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_3" className="checkboxTop" />
                                    <label htmlFor="format_3" className="checkLabelText">WMA</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_4" className="checkboxTop" />
                                    <label htmlFor="format_4" className="checkLabelText">MP4</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_5" className="checkboxTop" />
                                    <label htmlFor="format_5" className="checkLabelText">AVI</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_6" className="checkboxTop" />
                                    <label htmlFor="format_6" className="checkLabelText">FLV</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_7" className="checkboxTop" />
                                    <label htmlFor="format_7" className="checkLabelText">GIF</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_9" className="checkboxTop" />
                                    <label htmlFor="format_9" className="checkLabelText">OTHERS</label>
                                </label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                            </div>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <label className="accodionHead">Webinars &amp; Live Sessions</label>
                            <label style={{ float: 'right' }}><FaAngleDown /></label>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <div id="format" className="mt-3 text-center">
                                <label className="checkboxLabel" htmlFor="format_0">
                                    <input type="checkbox" id="format_0" className="checkboxTop" />
                                    <label htmlFor="format_0" className="checkLabelText">0-15 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_1" className="checkboxTop" />
                                    <label htmlFor="format_1" className="checkLabelText">15-30 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_2" className="checkboxTop" />
                                    <label htmlFor="format_2" className="checkLabelText">30-45 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_3" className="checkboxTop" />
                                    <label htmlFor="format_3" className="checkLabelText">45-60 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_4" className="checkboxTop" />
                                    <label htmlFor="format_4" className="checkLabelText">60-75 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_5" className="checkboxTop" />
                                    <label htmlFor="format_5" className="checkLabelText">75-90 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_6" className="checkboxTop" />
                                    <label htmlFor="format_6" className="checkLabelText">90-105 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_7" className="checkboxTop" />
                                    <label htmlFor="format_7" className="checkLabelText">105-120 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_8" className="checkboxTop" />
                                    <label htmlFor="format_8" className="checkLabelText">120-135 Min</label>
                                </label>

                                <label className="checkboxLabel">
                                    <input type="checkbox" id="format_9" className="checkboxTop" />
                                    <label htmlFor="format_9" className="checkLabelText">OTHERS</label>
                                </label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                                <label style={{ width: '120px', margin: 6 }}></label>
                            </div>
                        </Accordion.Collapse>

                    </Accordion>

                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>
    );

}
