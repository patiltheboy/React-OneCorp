import React, { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
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

function UploadFiles(props) {
  const [myFiles, setMyFiles] = useState([])

//   const onDrop = useCallback(acceptedFiles => {
//     setMyFiles([...myFiles, ...acceptedFiles])
//   }, [myFiles])

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

  const removeAll = () => {
    setMyFiles([])
  }

  const files = myFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes{" "}
      <button onClick={removeFile(file)}>Remove File</button>
    </li>
  ));

  const thumbs = myFiles.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
        <button onClick={removeFile(file)}>Remove File</button>
      </div>
    </div>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
          {thumbs}
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {files.length > 0 && <button onClick={removeAll}>Remove All</button>}
    </section>
  )
}

export default UploadFiles;