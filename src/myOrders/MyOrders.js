import React, { useRef, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import './MyOrders.css'
import { MyOrdersComp } from "./MyOrdersComp";

export const MyOrders = () => {

    const [key, setKey] = useState('active');
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="tabHeadS tabHead"
                    >
                        <Tab eventKey="active" title="Active">
                            <MyOrdersComp />
                            <MyOrdersComp />
                            <MyOrdersComp />

                        </Tab>

                        <Tab eventKey="deliverd" title="Deliverd">
                            <MyOrdersComp />
                            <MyOrdersComp />
                            <MyOrdersComp />
                        </Tab>

                        <Tab eventKey="completed" title="Completed">
                            <MyOrdersComp />
                            <MyOrdersComp />
                            <MyOrdersComp />
                        </Tab>

                        <Tab eventKey="cancelled" title="Cancelled">
                            <MyOrdersComp />
                            <MyOrdersComp />
                            <MyOrdersComp />
                        </Tab>

                    </Tabs>

                </Col>
            </Row>

        </Container>
    )
}