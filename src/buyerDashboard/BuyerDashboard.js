import React, { useState, } from 'react';
import './BuyerDashboard.css'
import { Row, Col, Container, Card, Button, Tab, Tabs, CardDeck, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar, faShareAlt, faHeart, faMapMarker, faRupeeSign, faFileAlt, faClock, faSyncAlt, faEye, faStarHalf,
    faArrowCircleLeft, faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';
import ItemsCarousel from 'react-items-carousel';
import {BuyerSlider} from "./BuyerSlider"
import { Link } from 'react-router-dom';


export function BuyerDashboard() {

    const [activeItemIndex, setActiveItemIndex] = useState('');
    const chevronWidth = 40;

    return (

        <Container>
            <Row className="mt-4">

                <Col md={7}>

                    <div>
                        <img src="images.jpg" className="roundImg" />
                        <div className="buyerTextL pt-1">
                            <span className="fontsize">Manish Harlalka</span>
                            <span style={{ float: 'right' }}>
                                <span className="btn_style"> Chat </span>
                                <span className="pdL">
                                    <Link to="/"><FontAwesomeIcon icon={faShareAlt} /></Link> 
                                </span>
                                <span className="pdL">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </span>
                            <span className="displayFloatRoot">
                                <span className="font_size">
                                    Graphic Designer
                                </span>
                                <span className="pdLI">
                                    <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                    <strong style={{ "color": "#00a1ff", "font-size": "14px" }}> 4.5</strong>
                                </span>
                                <span className="pdLI">
                                    <strong style={{ "color": "#00a1ff", "font-size": "14px" }}>10 Reviews</strong>
                                </span>
                            </span>
                            <span className="displayFloatRoot">
                                <span className="font_sizeL">
                                    {<FontAwesomeIcon icon={faMapMarker} />}
                                </span>
                                <span className="padding_left font_sizeL" >
                                    Lucknow, Uttar Pradesh
                                                               </span>
                            </span>
                        </div>
                    </div>

                    {/* --------------------------Slider---------------------------------------- */}

                    <BuyerSlider />

                </Col>

                {/* ---------------------------------------- */}

                <Col md={5}>
                    <Card>
                        <Tabs defaultActiveKey="Deliverables" className="sd_navt tab_margin navt navt-tabs card-header-tabs">
                            <Tab eventKey="Deliverables" title="Deliverables" className="navt-item navt-link active" >
                                <div className="mt-3">
                                    <span className="tabheadsize">Task Price</span>
                                    <span className="tabheadsize" style={{ float: 'right' }}>
                                        <strong style={{ "font-size": "20px" }}>
                                            < FontAwesomeIcon icon={faRupeeSign} />
                                        </strong>5000</span>
                                </div>
                                <hr />
                                <div className="educerSub">
                                    <FontAwesomeIcon icon={faFileAlt} style={{ width: 20 }} />
                                    <b className="educerText">Files Included</b>
                                    <b className="educerModalText"> SOURCE FILES<br />
                                        JPG/JPEG<br />
                                        PDF<br />
                                        DOC/DOCS</b>
                                </div>
                                <div className="educerSub mt-5">
                                    <FontAwesomeIcon icon={faClock} style={{ width: 20 }} />
                                    <b className="educerText"> Delivery Time</b>
                                    <b className="educerModalText">4 Days</b>
                                </div>
                                <div className="educerSub mt-5">
                                    <FontAwesomeIcon icon={faSyncAlt} style={{ width: 20 }} />
                                    <b className="educerText">Revision</b>
                                    <b className="educerModalText">2</b>
                                </div>

                                <div className="mt-4">
                                    <Button variant="success" size="lg" block> Order Now</Button>
                                </div>
                                <div className="mt-3">
                                    <Button variant="outline-secondary" size="lg" block>Chat With Seller</Button>
                                </div>

                            </Tab>
                            <Tab eventKey="About Task" title="About Task" className="navt-item navt-link active" >
                            </Tab>
                        </Tabs>
                    </Card>
                </Col>
            </Row>


            <div className="bTexteading" > Manish Harlalka's other works</div>
            <div className="mt-4">
                <div style={{ padding: 20 }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={4}
                        gutter={20}
                        leftChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleLeft} />}</div>}
                        rightChevron={<div style={{ fontSize: 30 }}>{<FontAwesomeIcon icon={faArrowCircleRight} />}</div>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >

                        <CardDeck className="cardpd">
                            <Card>
                                <Card.Img variant="top" src="img1.jpg" className="imgSize" />
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
                                <Card.Img variant="top" src="img4.png" className="imgSize" />
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
                                <Card.Img variant="top" src="img3.jpg" className="imgSize" />

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
                                <Card.Img variant="top" src="img1.jpg" className="imgSize" />

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
                                <Card.Img variant="top" src="img1.jpg" className="imgSize" />
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
                                <Card.Img variant="top" src="img4.png" className="imgSize" />
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
                                <Card.Img variant="top" src="img3.jpg" className="imgSize" />

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
                                <Card.Img variant="top" src="img1.jpg" className="imgSize" />

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
            </div>
            <Row className="mt-4">
                <Col md={7}>
                    <div className="bTexteading" >Reviews</div>
                    <Card className="mt-4">
                        <Card.Header style={{ "background-color": "white" }}>
                            <div>
                                <span className="fontsize">10 Customer Reviews</span>
                                <span className="displayFloatRoot">
                                    <span className="font_size">
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStarHalf} />
                                    </span>
                                    <span className="font_size pl-2">
                                        4.5 out of 5
                                    </span>
                                </span>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <img src="iconimg.png" className="roundImgsm" />
                                <div className="textrw">
                                    <span className="fontsize">Manish Harlalka</span>
                                    <span className="pdLI">
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                    </span>
                                    <span className="displayFloatRoot font_size">
                                        5 months ago
                                                                        </span>
                                    <span className="displayFloatRoot font_size pt-4">
                                        I saw work done by Armin and reached out even though is was out of my budget and
                                        said a month was required and we were launching in two weeks! I wrote Armin and
                                        sent him what i had and he kindly agreed to work on it promising a cute animation.
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src="iconimg.png" className="roundImgsm" />
                                <div className="textrw">
                                    <span className="fontsize">Manish Harlalka</span>
                                    <span className="pdLI">
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                    </span>
                                    <span className="displayFloatRoot font_size">
                                        5 months ago
                                                                        </span>
                                    <span className="displayFloatRoot font_size pt-4">
                                        I saw work done by Armin and reached out even though is was out of my budget and
                                        said a month was required and we were launching in two weeks! I wrote Armin and
                                        sent him what i had and he kindly agreed to work on it promising a cute animation.
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src="iconimg.png" className="roundImgsm" />
                                <div className="textrw">
                                    <span className="fontsize">Manish Harlalka</span>
                                    <span className="pdLI">
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                    </span>
                                    <span className="displayFloatRoot font_size">
                                        5 months ago
                                                                        </span>
                                    <span className="displayFloatRoot font_size pt-4">
                                        I saw work done by Armin and reached out even though is was out of my budget and
                                        said a month was required and we were launching in two weeks! I wrote Armin and
                                        sent him what i had and he kindly agreed to work on it promising a cute animation.
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <img src="iconimg.png" className="roundImgsm" />
                                <div className="textrw">
                                    <span className="fontsize">Manish Harlalka</span>
                                    <span className="pdLI">
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                        <FontAwesomeIcon className="icon_sizE" icon={faStar} />
                                    </span>
                                    <span className="displayFloatRoot font_size">
                                        5 months ago
                                                                        </span>
                                    <span className="displayFloatRoot font_size pt-4">
                                        I saw work done by Armin and reached out even though is was out of my budget and
                                        said a month was required and we were launching in two weeks! I wrote Armin and
                                        sent him what i had and he kindly agreed to work on it promising a cute animation.
                                    </span>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={5}>
                    <div className="bTexteading">My Portfolio</div>

                    <div className="imagesView container1 mt-4">
                        <div className="image">
                            <img src="img1.jpg" className="ImageSize " />
                            <img src="img3.jpg" className="ImageSize " />
                            <img src="img4.png" className="ImageSize" />
                            <img src="paris.jpg" className="ImageSize" />
                        </div>
                        <div className="middle">
                            <Button variant="outline-dark">View Portfolio</Button>{' '}
                        </div>
                    </div>
                    <div className="imagesView container1 mt-4">
                        <div className="image">
                            <img src="img1.jpg" className="ImageSize " />
                            <img src="img3.jpg" className="ImageSize " />
                            <img src="img4.png" className="ImageSize" />
                            <img src="paris.jpg" className="ImageSize" />
                        </div>
                        <div className="middle">
                            <Button variant="outline-dark">View Portfolio</Button>{' '}
                        </div>
                    </div>
                    <div className="imagesView mt-4">
                        <Button variant="success" size="lg" block>View Portfolio</Button>
                    </div>

                </Col>

            </Row>
        </Container>
    );
}
// export default BuyerDashboard;