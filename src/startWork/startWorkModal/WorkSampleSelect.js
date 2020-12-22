import React, { useState } from 'react';

import { Button, Card, Modal } from 'react-bootstrap';

import { FaArrowLeft } from "react-icons/fa";



export default function WorkSampleSelect(props) {

    const [select, setSelect] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(select)
    }

    return (
        <Modal show={props.show} onHide={props.cancelHandler.bind(this)}>

            <Modal.Header closeButton>

                <Modal.Title>
                    <strong style={{ "font-size": "20px" }}>
                        {<FaArrowLeft onClick={props.back.bind(this)} />}
                    </strong>
                    <span style={{ paddingLeft: 40, fontSize: 15, fontWeight: 'bold' }}>{props.title}</span>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <div className="start" >
                    <div id="select" className="text-center ">
                        <div>
                            <label className="option_item">
                                <input type="radio" className="checkbox workRadio" name="select" />

                                <div className="option_inner quora workS">
                                    <div className="tickmark" />

                                    <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

                                </div>

                            </label>

                            <label className="option_item">
                                <input type="radio" className="checkbox workRadio" name="select" />

                                <div className="option_inner quora workS">
                                    <div className="tickmark" />

                                    <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

                                </div>

                            </label>

                            <label className="option_item">
                                <input type="radio" className="checkbox workRadio" name="select" />

                                <div className="option_inner quora workS">
                                    <div className="tickmark" />

                                    <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

                                </div>

                            </label>

                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>
    );

}
