import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default function Language(props) {


    return (

        <div>

            <Modal show={props.show}  onHide={props.cancelHandler.bind(this)}>

                <Modal.Header closeButton>

                    <Modal.Title>{props.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    {props.language}
                </Modal.Body>


                <Modal.Footer>

                    <Button variant="secondary" onClick={props.cancelHandler.bind(this)}>Close</Button>

                    <Button variant="primary" onClick={props.languageAdd.bind(this) && props.cancelHandler.bind(this)}>Save Changes</Button>

                </Modal.Footer>

            </Modal>

        </div>

    );

}
