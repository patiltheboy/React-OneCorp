import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { FaArrowLeft } from "react-icons/fa";

export default function SubCategory(props) {

    const [category, setCategory] = useState('');

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

                <div className="mt-3">
                    <div >
                        <label className="subCatText">
                            <input
                                type="radio"
                                name="category"
                                className="subCatRadio"
                                value="Online Lessons"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="catText">
                                <div className="p-1">Online Lessons</div>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className="subCatText">
                            <input
                                type="radio"
                                name="category"
                                className="subCatRadio"
                                value="Relationship Advisor"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="catText">
                                <div className="p-1">Relationship Advisor</div>
                            </div>
                        </label>
                    </div>

                    <div >
                        <label className="subCatText">
                            <input
                                type="radio"
                                name="category"
                                className="subCatRadio"
                                value="Health, Nutrition &amp; Fitness"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="catText">
                                <div className="p-1">Health, Nutrition &amp; Fitness</div>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className="subCatText">
                            <input
                                type="radio"
                                name="category"
                                className="subCatRadio"
                                value="Spiritual &amp; Healing"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="catText">
                                <div className="p-1">Spiritual &amp; Healing</div>
                            </div>
                        </label>
                    </div>

                    <div >
                        <label className="subCatText">
                            <input
                                type="radio"
                                name="category"
                                className="subCatRadio"
                                value="Bloggers"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="catText">
                                <div className="p-1">Bloggers</div>
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

