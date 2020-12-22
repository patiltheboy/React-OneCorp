import React, { useState } from 'react';

import { FaArrowLeft, FaRupeeSign } from "react-icons/fa";

import { Modal, Button } from 'react-bootstrap';


export default function Pricing(props) {

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
                    <div className="startHeading">Set your pricing</div>
                    <label className="startP">How much price would you charge your customers for this work.
                        Be competitive on your pricing.</label>

                    <div className="mt-4 text-center">
                        <h6 >Your service price</h6>
                        <FaRupeeSign className="iconRupee" />
                        <input
                            type="text"
                            className="formprice"
                            placeholder="Enter Amount"
                            maxLength="7"
                            value={count}
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    setCount(e.target.value)
                                }
                            }
                            }
                        />

                    </div>
                    <div className="mt-4">
                        <label className="startP">Once you publish your work, clients will see your rate inclusive
                        of Rozgaar india service fee and taxes. On successfull work delivery, you will receive
                            <strong> full amount: <FaRupeeSign /> {count}</strong></label>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>

    );

}
