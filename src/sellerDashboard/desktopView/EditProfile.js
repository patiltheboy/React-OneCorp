import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import BasicInfo from "./BasicInfo";
import "./EditProfile.css";
import LinkSocialAccount from "./LinkSocialAccount";
import ProfessionalExperience from "./ProfessionalExperience";

function EditProfile() {

    const [key, setKey] = useState('profesionalExperience');

    return (
        <Container className="mt-5">
            <Row>
                <Col md={3}>

                </Col>
                <Col md={9}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="editTabHeadS editTabHead"
                    >
                        <Tab eventKey="basicInfo" title="Basic Info">

                            <BasicInfo />

                        </Tab>

                        <Tab eventKey="profesionalExperience" title="Profesional Experience">

                            <ProfessionalExperience />

                        </Tab>

                        <Tab eventKey="linkSocialAccounts" title="Link Social Accounts">

                            <LinkSocialAccount />

                        </Tab>

                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfile;