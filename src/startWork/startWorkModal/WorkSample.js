import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { useDropzone } from 'react-dropzone';

import { FaPlusCircle, FaArrowLeft, FaTimes } from "react-icons/fa";


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    marginLeft: 9,
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    margin: 5,
    width: 130,
    height: 130,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: '100%',
    height: '100%'
};


export default function WorkSample(props) {
    const [myFiles, setMyFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setMyFiles([...myFiles, ...acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))]);
        }
    });

    const removeFile = file => () => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
    }

    const thumbs = myFiles.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
                <FaTimes className="fatimes" onClick={removeFile(file)} />
            </div>
        </div>
    ));

    return (
        <Modal show={props.show} onHide={props.cancelHandler.bind(this)}>

            <Modal.Header closeButton>

                <Modal.Title>
                    <strong style={{ "font-size": "20px" }}>
                        {<FaArrowLeft onClick={props.back.bind(this)} />}
                    </strong>
                    <span style={{ paddingLeft: 50 }}>{props.title}</span>
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <div className="start">
                    <div className="startHeading">Upload Work Sample</div>
                    <label className="startP">Showcase your previous work samples to get more orders</label>

                    <div {...getRootProps()} className="fileBorder mt-4">
                        <input {...getInputProps()} />
                        <div className="text-center" style={{ paddingTop: 40 }}>
                            <FaPlusCircle style={{ fontSize: 100, color: 'darkcyan' }} />
                            <div className="pt-3">Add Your Files</div>
                        Upto 2GB
                        <p className="pt-4">Upload files</p>
                        </div>
                    </div>
                    <div style={thumbsContainer}>
                        {thumbs}
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="success" className="w-100" onClick={props.next.bind(this)}>NEXT</Button>

            </Modal.Footer>

        </Modal>
    );

}
