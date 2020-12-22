import React, { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';

export default function CreateANewWork(props) {

    const [select, setSelect] = useState('');

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(select)

    }


    return (


        <Modal show={props.show} onHide={props.cancelHandler.bind(this)}>

            <Modal.Header closeButton>

                <Modal.Title>{props.title}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <div className="start" >
                    <div className="startHeading">Select your work category</div>
                    <label className="startP">Choose a category in which you would like offer your service to clients.</label>

                    <div id="select" className="text-center mt-4">
                        <div>

                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-gd"
                                    value="Graphic &amp; Design"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="imgsizz" />
                                    <p className=""> Graphic &amp; Design</p>

                                </Card>
                            </label>



                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-pt"
                                    value="Programming &amp; Tech"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/programming_tech_color.png" className="imgsizz" />
                                    <p className="">Programming &amp; Tech</p>

                                </Card>
                            </label>



                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-bc"
                                    value="Business &amp; Consultancy"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/business_color.png" className="imgsizz" />
                                    <p className="">Business &amp; Consultancy</p>

                                </Card>
                            </label>



                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-mv"
                                    value="Music &amp; Video"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/music_video_color.png" className="imgsizz" />
                                    <p className="">Music &amp; Video</p>

                                </Card>
                            </label>



                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-ls"
                                    value="Lifestyle"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/lifestyle_color.png" className="imgsizz" />
                                    <p className="">Lifestyle</p>

                                </Card>
                            </label>



                            <label>
                                <input
                                    type="radio"
                                    name="Select"
                                    className="workRadio"
                                    htmlFor="select-more"
                                    value="More"
                                    onChange={(e) => { setSelect(e.target.value) }}
                                />
                                <Card className="work workWidth" >

                                    <img src="https://www.rozgaarindia.com/assets/img/more_color.png" className="imgsizz" />
                                    <p className="">More</p>

                                </Card>
                            </label>

                        </div>


                    </div>
                </div>

            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>

    );

}