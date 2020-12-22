import React from "react";
import { Button, Col, Form } from "react-bootstrap";

function MobileLinkSocialAccount() {

    return (
        <>
            <div className="basicInfoTitle">Share your social pages link url
        </div>
            <Form className="mt-5">
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Facebook
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Instagram
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Linkedin
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Twitter
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Others
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </Form>

            <Button variant="success" block className="mt-5 mb-3">Save</Button>
        </>
    )
}
export default MobileLinkSocialAccount;