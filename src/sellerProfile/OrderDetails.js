import React from "react";
import { Container, Card, Accordion, } from "react-bootstrap";

function OrderDetails() {

    return (
        <Container>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="bdrBtm">
                        <span class="text-blue">1</span>
                        <span class="text-black pl-3">Order Details</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <span class="text-blue">2</span>
                        <span class="text-black pl-3">Payment Options</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}
export default OrderDetails;