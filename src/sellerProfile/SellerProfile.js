import React, { useState, useEffect } from "react";
import { CardDeck, Card, Row, Col, Container, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faRupeeSign, faArrowCircleLeft, faArrowCircleRight, faEdit, } from '@fortawesome/free-solid-svg-icons'
import ItemsCarousel from 'react-items-carousel';
import ShowMore from 'react-show-more';
import "./SellerProfile.css"



function SellerProfile() {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [certification, setCertification] = useState([]);
    const [member, setMember] = useState([]);
    const [userId, setUserId] = useState('');
    let skill = "";
    let educations = "";
    let certifications = "";

    // This is local storage id 
    var logedin = "1332";


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "userid": "1332",
                "Auth-Token": "Ezxe01MBXU2werWrW2Wi342ASDADAShyIIoKvmYI"
            })
        };
        fetch('https://rozgaar.onecorp.co.in/bridge/getProfileStatus', requestOptions)
            .then(response => response.json())
            .then(res => (
                setSkills(res.data.skills),
                setEducation(res.data.education),
                setCertification(res.data.certification),
                setMember(res.data.members) // object api data pass
            ));
    }, []);
    // console.log(result)


    skill = skills.map((item, index) => (
        <div key={index} >
            {/* {console.log(item)} */}
            {/* {console.log(item.skill)} */}
            <span className="foatLeft card">{item.skill}</span>
        </div>
    ));

    educations = education.map((item, index) => (
        <div key={index} >
            {/* {console.log(item.degree)} */}
            <span className="foatLeft card">{item.degree}</span>
        </div>
    ));

    certifications = certification.map((item, index) => (
        <div key={index}>
            <span className="foatLeft card">{item.dertificate_award}</span>
            {/* {console.log(item.dertificate_award)} */}
        </div>
    ));

    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                </Col>

                <Col md={9} >
                    <Col className="workpdTop borderWorkP">
                        <Col className="textJustify" >
                            <span className="aboutH3" >About Me
                                    {(userId !== logedin) ? (
                                    <span style={{ float: 'right', fontSize: 20 }}>
                                        <FontAwesomeIcon icon={faEdit} color='blue' />
                                    </span>
                                ) : ''}
                            </span>
                            <ShowMore
                                lines={1}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                            >
                                {member.description}
                            </ShowMore>
                        </Col>
                    </Col>

                    <Col className="workpdTop borderWorkP" >

                        <h3 className="workH3">Works</h3>

                        <div style={{ padding: 20 }}>
                            <ItemsCarousel
                                requestToChangeActive={setActiveItemIndex}
                                activeItemIndex={activeItemIndex}
                                numberOfCards={3}
                                gutter={20}
                                leftChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleLeft} />}</div>}
                                rightChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleRight} />}</div>}
                                outsideChevron
                                chevronWidth={chevronWidth}
                            >

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card1.jfif" className="imgSize" />

                                        <Card.Text style={{ paddingTop: 10 }}>
                                            I can design modern, unique,  logos design
            </Card.Text>
                                        <Card.Footer>
                                            <small >STARTING AT</small><br />
                                            <strong><FontAwesomeIcon icon={faRupeeSign} /> 389</strong>
                                            <small type="submit" className="float-right ">
                                                <FontAwesomeIcon icon={faEye} />
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card2.jpg" className="imgSize" />

                                        <Card.Text style={{ paddingTop: 10 }}>
                                            I can do creative Vintage logo design.
            </Card.Text>
                                        <Card.Footer>

                                            <small >STARTING AT</small><br />
                                            <strong><FontAwesomeIcon icon={faRupeeSign} /> 389</strong>
                                            <small type="submit" className="float-right ">
                                                <FontAwesomeIcon icon={faEye} />
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card3.jfif" className="imgSize" />

                                        <Card.Text style={{ paddingTop: 10 }}>
                                            This is a wider card with supporting text
             </Card.Text>
                                        <Card.Footer>
                                            <small >STARTING AT</small><br />
                                            <strong><FontAwesomeIcon icon={faRupeeSign} /> 389</strong>
                                            <small type="submit" className="float-right ">
                                                <FontAwesomeIcon icon={faEye} />
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card1.jfif" className="imgSize" />

                                        <Card.Text style={{ paddingTop: 10 }}>
                                            Completed works at rozgaar India
            </Card.Text>
                                        <Card.Footer>
                                            <small >STARTING AT</small><br />
                                            <strong><FontAwesomeIcon icon={faRupeeSign} /> 389</strong>
                                            <small type="submit" className="float-right ">
                                                <FontAwesomeIcon icon={faEye} />
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>

                            </ItemsCarousel>
                        </div>

                        {/* <Row className="viewBtn">
                            <Link to="/WorkProfile"><button className="workBtn">View All</button></Link>
                        </Row>  */}

                    </Col>

                    <Col className="workpdTop borderWorkP" >
                        <h3 className="portfolioh3">Portfolio</h3>
                        <div style={{ padding: 20 }}>
                            <ItemsCarousel
                                requestToChangeActive={setActiveItemIndex}
                                activeItemIndex={activeItemIndex}
                                numberOfCards={3}
                                gutter={20}
                                leftChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleLeft} />}</div>}
                                rightChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleRight} />}</div>}
                                outsideChevron
                                chevronWidth={chevronWidth}
                            >
                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card1.jfif" className="imgSize" />
                                        <Card.Body>
                                            <Card.Text>
                                                Completed works at rozgaar India
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card2.jpg" className="imgSize" />
                                        <Card.Body>
                                            <Card.Text>
                                                Vintage Logo Design
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card3.jfif" className="imgSize" />
                                        <Card.Body>
                                            <Card.Text>
                                                Mordern Logo Design
                                 </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>

                                <CardDeck className="cardpd">
                                    <Card>
                                        <Card.Img variant="top" src="card1.jfif" className="imgSize" />
                                        <Card.Body>
                                            <Card.Text>
                                                Completed works at rozgaar India
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>

                            </ItemsCarousel>
                        </div>


                        {/* <Row className="viewBtn">
                            <Link to="/Portfolio"><button className="workBtn">View All</button></Link>
                        </Row> */}
                    </Col>

                    <Col className="workpdTop borderWorkP" >
                        <h3 className="portfolioh3">More Details</h3>
                        <CardDeck className="cardpd">
                            <Card>
                                <span className="headT" >Languages
                        {(userId !== logedin) ? (
                                        <span style={{ float: 'right' }}>
                                            <FontAwesomeIcon icon={faEdit} color='blue' />
                                        </span>
                                    ) : ''}
                                </span>
                                <div className="pd">
                                    {skill}
                                </div>
                            </Card>

                            <Card>
                                <span className="headT" >Education / Certification
                        {(userId !== logedin) ? (
                                        <span style={{ float: 'right' }}>
                                            <FontAwesomeIcon icon={faEdit} color='blue' />
                                        </span>
                                    ) : ''}
                                </span>
                                <div className="pd">
                                    {educations} {certifications}
                                </div>
                            </Card>
                        </CardDeck>
                        <CardDeck className="cardpd">
                            <Card>
                                <span className="headT" >Work Experience
                                    {(userId !== logedin) ? (
                                        <span style={{ float: 'right' }}>
                                            <FontAwesomeIcon icon={faEdit} color='blue' />
                                        </span>
                                    ) : ''}
                                </span>
                                <div className="pd">
                                    <div className=" foatLeft card">{member.description} {/*Logo design (3year)*/}</div>
                                    <div className=" foatLeft card">Vector tracing (3year)</div>
                                    <div className=" foatLeft card">Brochure design (3year)</div>
                                </div>
                            </Card>
                        </CardDeck>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
export default SellerProfile;