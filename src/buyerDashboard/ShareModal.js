import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';

import { SocialIcon } from 'react-social-icons'

export default function ShareModal(props) {

    const url = 'https://www.rozgaarindia.com/preview/Graphic-Design/157951505728/test-task.'
    const [copy, setCopy] = useState({
        copySuccess: ''
    });

    const copyCodeToClipboard = () => {
        const el = copy
        el.select()
        document.execCommand("copy")
        setCopy({ copySuccess: 'Copied!' })
    }


    return (

        <div>

            <Modal show={props.show} onHide={props.cancelHandler.bind(this)} className="shareModalHeight">

                <Modal.Header closeButton>

                    <Modal.Title>{props.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body className="text-center">
                    <a target="_blank" href={"https://facebook.com/sharer/sharer.php?u=" + url} className="mr-4">
                        <SocialIcon network="facebook" />
                    </a>

                    <a target="_blank" href={"https://twitter.com/intent/tweet?url=" + url} className="mr-4">
                        <SocialIcon network="twitter" />
                    </a>

                    <a target="_blank" href={"https://web.whatsapp.com/send?text=" + url} className="mr-4">
                        <SocialIcon network="whatsapp" />
                    </a>

                    <a target="_blank" href={"mailto:?body=" + url} className="mr-4">
                        <SocialIcon network="email" />
                    </a>

                    <a target="_blank" href={"https://www.linkedin.com/shareArticle?mini=true&url=" + url}>
                        <SocialIcon network="linkedin" />
                    </a>

                    <label className="shareModelCopytext">
                        <input type="text"
                            ref={(el) => setCopy(el)}
                            value={url}
                            className="shareModalLink"
                        />
                        <div className="shareModalCopy" onClick={copyCodeToClipboard}>Copy</div>
                    </label>

                </Modal.Body>

            </Modal>

        </div>

    );

}
