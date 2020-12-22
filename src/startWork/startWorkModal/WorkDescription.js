import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { FaArrowLeft } from "react-icons/fa";

export default function WorkDescription(props) {

    // ------------------Work description States---------------
    const [count, setCount] = useState('');

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
                    <div className="startHeading">Describe your work</div>
                    <label className="startP">Explain your service in details so clients can understand if this meet their needs</label>

                    <div className="deliveryInputDiv">
                        <label style={{ float: 'left' }}>Min Characters: 120</label>
                        <label style={{ float: 'right' }}
                        >Count:{count.length}</label>

                        <textarea
                            placeholder="Describe in detail what will you offer to your clients."
                            className="textareaWD"
                            minLength="120"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                        />
                        <div className="instructionText">* You can edit your description anytime.</div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>
    );

}
