import React from 'react';
import { Image } from 'react-bootstrap';

function ImgComp(props) {
    let imgStyles = {
        width: 100 + "%",
        height: "100%"
    }


    let imageFormats = ['png', 'jpg', 'jpeg', 'gif']
    let videoFormats = ['wmv', 'mp4', 'avi', 'mov']
    let audioFormats = ['mp3', 'wav']
    let docFileFormats = ['doc', 'docx']
    let pptFileFormats = ['ppt', 'pptx']
    let xlsFileFormats = ['xls', 'xlsx']
    let pdfFileFormats = ['pdf']


    return (
        <div style={imgStyles}>
            {((pdfFileFormats.find(element => element === props.src.split('.').pop()) ? (
                <embed src={props.src} controls style={imgStyles} />

            ) : ((docFileFormats.find(element => element === props.src.split('.').pop()) ? (
                <a href={props.src} controls style={imgStyles} >
                    <img src="default_word_image.png" style={imgStyles} />
                </a>
            ) : ((xlsFileFormats.find(element => element === props.src.split('.').pop()) ? (
                <a href={props.src} controls style={imgStyles} >
                    <img src="default_excel_image.png" style={imgStyles} />
                </a>

            ) : ((pptFileFormats.find(element => element === props.src.split('.').pop()) ? (
                <a href={props.src} controls style={imgStyles} >
                    <img src="default_powerpoint_image.png" style={imgStyles} />
                </a>

            ) : ((audioFormats.find(element => element === props.src.split('.').pop()) ? (
                <audio src={props.src} controls style={imgStyles} />

            ) : ((videoFormats.find(element => element === props.src.split('.').pop()) ? (
                <video src={props.src} type="video/mp4" controls preload="none" style={imgStyles} />

            ) : (
                    <img src={props.src} style={imgStyles} />
                )))))))))))))
            }
        </div>

    )
}

export default ImgComp;


// <img src={props.src} style={imgStyles}/>
        // <video src={props.src} style={imgStyles} controls/>