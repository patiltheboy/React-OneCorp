import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import { FaArrowLeft } from "react-icons/fa";

export default function WorkTitle(props) {

    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        e.preventDefault();
        console.log(title)
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
                    <div className="startHeading">Give your work title</div>
                    <label className="startP">Explain your service in brief that will attract clients to check your work details.</label>

                    <div className="mt-3">
                        <span><label className="textLabel">I Can</label>
                            <textarea
                                placeholder="Your title here"
                                className="formcontrol p-2"
                                maxLength="80"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </span>
                    </div>
                    <h6 style={{ textAlign: 'end' }}>{title.length}/80</h6>

                    <div className="startHeading mb-3">Title Suggestion</div>

                    <div>
                        <label className="titleSelect">
                            <input
                                type="radio"
                                name="category"
                                className="workRadio"
                                value="Solve computer related issues"
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                            <div className="workText">
                                <div className="p-1">Solve computer related issues</div>
                            </div>
                        </label>
                    </div>

                    <div >
                        <label className="titleSelect">
                            <input
                                type="radio"
                                name="category"
                                className="workRadio"
                                value="Solve computer related issues1"
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                            <div className="workText">
                                <div className="p-1">Solve computer related issues1</div>
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
