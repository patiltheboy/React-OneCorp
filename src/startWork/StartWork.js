import React, { useState } from "react";
import './StartWork.css'
import { Button, Container } from "react-bootstrap";
import CreateANewWork from "./startWorkModal/CreateANewWork";
import SubCategory from "./startWorkModal/SubCategory";
import WorkTitle from "./startWorkModal/WorkTitle";
import Pricing from "./startWorkModal/Pricing";
import Delivery from "./startWorkModal/Delivery";
import WorkDescription from "./startWorkModal/WorkDescription";
import DeliveryFormat from "./startWorkModal/DeliveryFormat";
import WorkSample from "./startWorkModal/WorkSample";
import Preview from "./startWorkModal/Preview";
import WorkSampleSelect from "./startWorkModal/WorkSampleSelect";

function StartWork() {
    // -----------------Modal-------------------
    const [createANewWorkShow, setCreateANewWorkShow] = useState(false);
    const [subCategoryShow, setSubCategoryShow] = useState(false);
    const [workTitleShow, setWorkTitleShow] = useState(false);
    const [pricingShow, setPricingShow] = useState(false);
    const [deliveryShow, setDeliveryShow] = useState(false);
    const [workDescriptionShow, setWorkDescriptionShow] = useState(false);
    const [deliveryFormatShow, setDeliveryFormatShow] = useState(false);
    const [workSampleShow, setWorkSampleShow] = useState(false);
    const [workSampleSelectShow, setWorkSampleSelectShow] = useState(false);
    const [previewShow, setPreviewShow] = useState(false);

    // -------------------Close Modal----------------
    const closeModal = () => {
        setCreateANewWorkShow(false);
        setSubCategoryShow(false);
        setWorkTitleShow(false);
        setPricingShow(false);
        setDeliveryShow(false);
        setWorkDescriptionShow(false);
        setDeliveryFormatShow(false);
        setWorkSampleShow(false);
        setWorkSampleSelectShow(false);
        setPreviewShow(false);;
    }

    // ----------------Next Button------------------------------
    const gotoSubCategory = () => {
        setCreateANewWorkShow(false);
        setSubCategoryShow(true);
    }
    const gotoWorkTitle = () => {
        setWorkTitleShow(true);
        setSubCategoryShow(false);
    }
    const gotoPricing = () => {
        setPricingShow(true);
        setWorkTitleShow(false);
    }
    const gotoDelivery = () => {
        setDeliveryShow(true);
        setPricingShow(false);
    }
    const gotoWorkDescription = () => {
        setWorkDescriptionShow(true);
        setDeliveryShow(false);
    }
    const gotoDeliveryFormat = () => {
        setDeliveryFormatShow(true);
        setWorkDescriptionShow(false);
    }
    const gotoWorkSample = () => {
        setWorkSampleShow(true);
        setDeliveryFormatShow(false);
    }
    const gotoWorkSampleSelect =()=>{
        setWorkSampleSelectShow(true);
        setWorkSampleShow(false);
    }
    const gotoPreview = () => {
        setPreviewShow(true);
        setWorkSampleSelectShow(false);
    }

    // --------------------------Back Button------------------------
    const backCreateWork = () => {
        setCreateANewWorkShow(true);
        setSubCategoryShow(false);
    }
    const backSubCategory = () => {
        setWorkTitleShow(false);
        setSubCategoryShow(true);
    }
    const backWorkTitle = () => {
        setPricingShow(false);
        setWorkTitleShow(true);
    }
    const backPricing = () => {
        setDeliveryShow(false);
        setPricingShow(true);
    }
    const backDelivery = () => {
        setWorkDescriptionShow(false);
        setDeliveryShow(true);
    }
    const backWorkDescription = () => {
        setDeliveryFormatShow(false);
        setWorkDescriptionShow(true);
    }
    const backDeliveryFormat = () => {
        setWorkSampleShow(false);
        setDeliveryFormatShow(true);
    }
    const backWorkSample = () => {
        setPreviewShow(false);
        setWorkSampleShow(true);
    }
    const backWorkSampleSelect = () =>{
        setWorkSampleShow(false);
        setWorkSampleSelectShow(true);
    }




    return (
        <Container>
            <Button onClick={() => setCreateANewWorkShow(true)} className="mt-5">Start Work</Button>

            <CreateANewWork
                show={createANewWorkShow}
                cancelHandler={closeModal}
                next={gotoSubCategory}
                title={'Create A New Work'}
            />

            {/* -----------------------------------SubCategory----------------------------------------- */}

            <SubCategory
                show={subCategoryShow}
                cancelHandler={closeModal}
                next={gotoWorkTitle}
                back={backCreateWork}
                title={'Sub Category'}
            />

            {/* -------------------------------------Work Title----------------------------------------- */}
            <WorkTitle
                show={workTitleShow}
                cancelHandler={closeModal}
                next={gotoPricing}
                back={backSubCategory}
                title={'Work Title'}
            />

            {/* ---------------------------------------Pricing-------------------------------------------- */}
            <Pricing
                show={pricingShow}
                cancelHandler={closeModal}
                next={gotoDelivery}
                back={backWorkTitle}
                title={'Pricing'}
            />

            {/* ---------------------------------------Delivery------------------------------------------- */}
            <Delivery
                show={deliveryShow}
                cancelHandler={closeModal}
                next={gotoWorkDescription}
                back={backPricing}
                title={'Delivery'}
            />

            {/* ---------------------------------------Work Description------------------------------------ */}
            <WorkDescription
                show={workDescriptionShow}
                cancelHandler={closeModal}
                next={gotoDeliveryFormat}
                back={backDelivery}
                title={'Work Description'}
            />

            {/* ---------------------------------------Delivery Format-------------------------------------- */}
            <DeliveryFormat
                show={deliveryFormatShow}
                cancelHandler={closeModal}
                next={gotoWorkSample}
                back={backWorkDescription}
                title={'Delivery Format'}
            />

            {/* ---------------------------------------Work Sample------------------------------------------- */}
            <WorkSample
                show={workSampleShow}
                cancelHandler={closeModal}
                next={gotoWorkSampleSelect}
                back={backDeliveryFormat}
                title={'Work Sample'}
            />

            {/* -------------------------------------Work Sample Select------------------------------------- */}
            <WorkSampleSelect 
            show={workSampleSelectShow}
            cancelHandler={closeModal}
            next={gotoPreview}
            back={backWorkSample}
            title={'Select Cover Picture or Video'}
            />

            {/* -----------------------------------------Preview---------------------------------------------- */}
            <Preview
                show={previewShow}
                cancelHandler={closeModal}
                back={backWorkSampleSelect}
                title={'Preview'}
            />


            {/*---------------- testing ------------------------------*/}

            {/* <div className="mt-5" >
                <label >
                    <input type="radio" className="card-input-element" />
                    <Card className="cardsiz card-input">
                        <Card.Body className="bdcenter card-input">
                            <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="imgsizz" />
                            <p className="categorytext"> Graphic &amp; Design</p>
                        </Card.Body>
                    </Card>
                </label>

                <div id="select">
                    <label>
                        <input 
                        type="radio" 
                        className="inputRadio selectColorChange" 
                        id="select-gd"
                        />
                        <Card className="selectColor" >
                            <Card.Body>
                                <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="imgsizz" />
                                <p className="categorytext dabutton"> Graphic &amp; Design</p>
                            </Card.Body>
                        </Card>
                    </label>

                    <label>
                        <input type="radio" className="inputRadio selectColorChange" id="select-pt"/>
                        <Card className="selectColor" >
                            <Card.Body>
                                <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="imgsizz" />
                                <p className="categorytext dabutton"> Graphic &amp; Design</p>
                            </Card.Body>
                        </Card>
                    </label>

                </div>


            </div> */}



            {/* <div className="container">
                <h1>Radio Buttons as Cards</h1>
                
                    <label>
                        <input type="radio" name="product" className="selectClr" />
                        <div className="selectText">
                            <div >Product A</div>
                            <div >
                                Product specific content
                            </div>
                        </div>
                    </label>
                
                    <label>
                        <input type="radio" name="product" className="selectClr" />
                        <div className="selectText">
                            <div >Product A</div>
                            <div >
                                Product specific content
                            </div>
                        </div>
                    </label>
            </div> */}



        </Container>
    )
}
export default StartWork;







