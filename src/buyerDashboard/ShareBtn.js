import { faAngleDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ShareModal from "./ShareModal";
function ShareBtn() {
    // -----------------Modal-------------------
    const [shareModalShow, setShareModalShow] = useState(false);

    // -------------------Close Modal----------------
    const closeModal = () => {
        setShareModalShow(false);
    }

    const [like, setLike] = useState({ liked: false })

    const label = like.liked ? <FontAwesomeIcon icon={faHeart} className="liked" /> : <FontAwesomeIcon icon={faHeart} className="unliked"/>

    const handleClick = () => {
        setLike({ liked: !like.liked })
    }
    return (
        <Container>
            <Button onClick={() => setShareModalShow(true)} className="mt-5">Start Work</Button>

            <ShareModal
                show={shareModalShow}
                cancelHandler={closeModal}
                title={'Share'}
            />

            <div>
                <span className="pdL">
                    <FontAwesomeIcon onClick={handleClick} icon={faHeart} className="fa" />
                </span>
            </div>

            <div className="customContainer">
                <span  onClick={handleClick}>
                    {label}</span>
            </div>

        </Container>
    )
}
export default ShareBtn;







