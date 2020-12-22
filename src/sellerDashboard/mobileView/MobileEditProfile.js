import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import MobileBasicInfo from "./MobileBasicInfo";
import MobileLinkSocialAccount from "./MobileLinkSocialAccount";
import MobileProfessionalExperience from "./MobileProfessionalExperience";

function MobileEditProfile() {

    const [key, setKey] = useState('basicInfo');

    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={3}>

                </Col>
                <Col md={9}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="editTabHeadSM editTabHeadM"
                    >
                        <Tab eventKey="basicInfo" title="Basic Info">

                            <MobileBasicInfo />

                        </Tab>

                        <Tab eventKey="profesionalExperience" title="Profesional Experience">

                            <MobileProfessionalExperience />

                        </Tab>

                        <Tab eventKey="linkSocialAccounts" title="Link Social Accounts">

                            <MobileLinkSocialAccount/>

                        </Tab>

                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default MobileEditProfile;