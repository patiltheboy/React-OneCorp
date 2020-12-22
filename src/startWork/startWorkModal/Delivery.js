import React, { useState } from 'react';

import { IoMdPaperPlane } from "react-icons/io";

import { FaArrowLeft } from "react-icons/fa";

import { Button, Modal } from 'react-bootstrap';

export default function Delivery(props) {

    const [choose, setChoose] = useState('0');


    const handleClick = (e) => {
        e.preventDefault();
        console.log(choose)
    }


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
                    <div className="startHeading">How soon can you deliver your work</div>
                    <label className="startP">Everyone likes quick &amp; perfect delivery. In how many days will you deliver your work ?</label>

                    <div className="deliveryInputDiv">
                        <IoMdPaperPlane className="deliveryIcon" />
                        <input
                            type="text"
                            placeholder="Delivery in days"
                            className="deliveryInput"
                            maxLength="2"
                            value={choose}
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    setChoose(e.target.value)
                                }
                            }
                            }
                        />

                    </div>

                    <div className="startHeading mt-3">Work Corrections</div>
                    <label className="startP">Offerings revisions bulid client confidence. Please select how many revisions will you provide ?</label>

                    <div className="mt-3 text-center">
                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                defaultChecked="0"
                                value="0"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >0</div>
                            </div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                value="1"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >1</div>
                            </div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                value="2"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >2</div>
                            </div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                value="3"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >3</div>
                            </div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                value="4"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >4</div>
                            </div>
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="category"
                                className="dayRadio"
                                value="5+"
                                onChange={(e) => setChoose(e.target.value)}
                            />
                            <div className="daySelect deliveryDays">
                                <div >5+</div>
                            </div>
                        </label>

                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>
    );

}
