import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default function Skill(props) {


    return (

        <div>

            <Modal show={props.skillshow}  onHide={props.cancelHandler.bind(this)}>

                <Modal.Header closeButton>

                    <Modal.Title>{props.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    {props.skill}                    
                    {props.skillyear}
                </Modal.Body>


                <Modal.Footer>

                    <Button variant="secondary" onClick={props.cancelHandler.bind(this)}>Close</Button>

                    <Button variant="primary" onClick={props.skillAdd.bind(this)}>Save Changes</Button>

                </Modal.Footer>

            </Modal>

        </div>

    );

}
