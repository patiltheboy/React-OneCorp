import { faComments, faEllipsisH, faEye, faFileAlt, faRupeeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button, Card, Image, OverlayTrigger, Popover, } from "react-bootstrap";

export const MyOrdersComp = () => {

    const [show, setShow] = useState(true);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <Card className="mt-3">
            <div className="p-2 orderFont">
                <Image src="card2.jpg" alt="RozgaarIndia" className="ordersImg" />
                <div className="ordersHead">
                    <b>I can do a creative business logo at best price</b>
                    <OverlayTrigger
                        trigger="click"
                        key='left'
                        placement='left'
                        rootClose={true}
                        overlay={
                            <Popover id={`popover-positioned-1`}
                                className="overlaystyle"
                            >
                                <Popover.Title as="h3">ID: #1580454172431</Popover.Title>
                                <Popover.Content >
                                    <div style={{ fontSize: 20 }}>
                                        <span><FontAwesomeIcon icon={faFileAlt} /></span>
                                        <span className="pl-3">Requirments</span>
                                    </div>
                                    <div className="overlayFont">
                                        <span><FontAwesomeIcon icon={faComments} /></span>
                                        <span className="pl-3">Chat</span>
                                    </div>
                                    <div className="overlayFont">
                                        <span><FontAwesomeIcon icon={faEye} /></span>
                                        <span className="pl-3">View Feedback</span>
                                    </div>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <button className="dotBtn" style={{ outline: "none" }} ref={target} onClick={!show}>
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </button>
                    </OverlayTrigger>

                </div>
                <div label className="orderto">
                    <span>Order to:</span>
                    <span className="pl-1">Gaurav Singh</span>
                    <span className="pl-1">(<FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />4.5)</span>
                    <span className="pl-3">Order Date:</span>
                    <span className="pl-1">10-06-2020</span>
                    <span className="pl-3">Due Date:</span>
                    <span className="pl-1">12-06-2020</span>
                </div>

                <div className="orderStatus">
                    <p className="mb-0" style={{ textAlign: "end" }}>Order Amount</p>
                    <span>Order Status:</span>
                    <span className="pl-1" style={{ color: "orange" }}>Pending</span>
                    <span style={{ float: "right" }}><FontAwesomeIcon icon={faRupeeSign} /> 389</span>
                </div>
            </div>

        </Card>
    )
}