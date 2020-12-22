import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';



function WorkSample() {

  const [select, setSelect] = useState('');

  return (

    <Container style={{ maxWidth: 500, maxHeight: 200 }}>
      <div>
        <label className="option_item">
          <input type="radio" className="checkbox workRadio" name="select" />

          <div className="option_inner quora workS">
            <div className="tickmark" />

            <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

          </div>

        </label>

        <label className="option_item">
          <input type="radio" className="checkbox workRadio" name="select" />

          <div className="option_inner quora workS">
            <div className="tickmark" />

            <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

          </div>

        </label>

        <label className="option_item">
          <input type="radio" className="checkbox workRadio" name="select" />

          <div className="option_inner quora workS">
            <div className="tickmark" />

            <img src="https://www.rozgaarindia.com/assets/img/graphic_design_color.png" className="workSelectimg" />

          </div>

        </label>

      </div>


    </Container >

  );
}
export default WorkSample;






















// import React, { useCallback } from "react";
// import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useDropzone } from 'react-dropzone'
// import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function WorkSample() {
//     const onDrop = useCallback((acceptedFiles) => {
//         acceptedFiles.forEach((file) => {
//             const reader = new FileReader()

//             reader.onabort = () => console.log('file reading was aborted')
//             reader.onerror = () => console.log('file reading has failed')
//             reader.onload = () => {
//                 // Do whatever you want with the file contents
//                 const binaryStr = reader.result
//                 console.log(binaryStr)
//             }
//             reader.readAsArrayBuffer(file)
//         })

//     }, [])
//     const { getRootProps, getInputProps } = useDropzone({ onDrop })

//     return (
        // <Container style={{ maxWidth: 500, maxHeight: 200 }}>
        //     <div className="start">
        //         <div className="startHeading">Upload Work Sample</div>
      //         <label className="startP">Showcase your previous work samples to get more orders</label>

        //             <div {...getRootProps()} className="fileBorder mt-4">
        //                 <input {...getInputProps()} />
        //                 <div className="text-center pt-5">
        //                     <FontAwesomeIcon icon={faPlusCircle} style={{ fontSize: 100, color: 'darkcyan' }} />
        //                     <div className="pt-3">Add Your Files</div>
        //                 Upto 2GB
        //                 <p className="pt-5">Upload files</p>
        //                 </div>

        //             </div>

        //         <Link to="/preview" ><button className="btnSubmit mt-5">NEXT</button></Link>
        //     </div>
        // </Container >
//     )
// }
// export default WorkSample;


// import React, { useMemo, useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import ReactDOM from "react-dom";
// import { useDropzone } from "react-dropzone";

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out"
// };

// const activeStyle = {
//   borderColor: "#2196f3"
// };

// const acceptStyle = {
//   borderColor: "#00e676"
// };

// const rejectStyle = {
//   borderColor: "#ff1744"
// };

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: "auto",
//   height: 200,
//   padding: 4,
//   boxSizing: "border-box"
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden"
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%"
// };

// function WorkSample(props) {
//   const [files, setFiles] = useState([]);
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     acceptedFiles,
//     open
//   } = useDropzone({
//     accept: "image/*",
//     noClick: true,
//     noKeyboard: true,
//     onDrop: acceptedFiles => {
//       setFiles(
//         acceptedFiles.map(file =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file)
//           })
//         )
//       );
//     }
//   });

//   const style = useMemo(
//     () => ({
//       ...baseStyle,
//       ...(isDragActive ? activeStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {})
//     }),
//     [isDragActive, isDragReject]
//   );

//   const thumbs = files.map(file => (
//     <div style={thumb} key={file.name}>
//       <div style={thumbInner}>
//         <img src={file.preview} style={img} />
//       </div>
//     </div>
//   ));

//   useEffect(
//     () => () => {
//       // Make sure to revoke the data uris to avoid memory leaks
//       files.forEach(file => URL.revokeObjectURL(file.preview));
//     },
//     [files]
//   );

//   const filepath = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <div className="container">
//       <div {...getRootProps({ style })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here</p>
//         <button type="button" onClick={open}>
//           Open File Dialog
//         </button>

//       </div>
//       {/* <section>
//         <h4>Files</h4>
//         <ul>{filepath}</ul>
//       </section> */}
//       <section >{thumbs}</section>
//     </div>
//   );
// }
// export default WorkSample;