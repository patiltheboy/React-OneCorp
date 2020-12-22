import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default function Certification(props) {


    return (

        <div>

            <Modal show={props.show}  onHide={props.cancelHandler.bind(this)}>

                <Modal.Header closeButton>

                    <Modal.Title>{props.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    {props.certification}
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={props.cancelHandler.bind(this)}>Close</Button>

                    <Button variant="primary" onClick={props.certificationAdd.bind(this)}>Save Changes</Button>

                </Modal.Footer>

            </Modal>

        </div>

    );

}
