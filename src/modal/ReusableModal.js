import React from 'react';

import { Modal, Button } from 'react-bootstrap';

export default function ReusableModal(props) {


    return (

        <div>

            <Modal show={props.show}  onHide={props.cancelHandler.bind(this)}>

                <Modal.Header closeButton>

                    <Modal.Title>{props.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    {props.language}
                    {props.skill}                    
                    {props.skillyear}
                </Modal.Body>


                <Modal.Footer>

                    <Button variant="secondary" onClick={props.cancelHandler.bind(this)}>Close</Button>

                    <Button variant="primary">Save Changes</Button>

                </Modal.Footer>

            </Modal>

        </div>

    );

}




































// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';

// const ReusableModal = (props) => {
//     const { closeModal } = props;
//     const { saveModal } = props;

    // const closeicon = () => (
    //     <FontAwesomeIcon icon={faTimesCircle}
    //         onClick={closeModal}
    //         style={{
    //             color: 'rebeccapurple',
    //             cursor: 'pointer',
    //             position: 'absolute',
    //             top: 15,
    //             right: '0.5rem',
    //             fontSize: 20
    //         }}
    //     />
    // );

    // const cancel = () => (
    //     <button
    //         onClick={closeModal}
    //         style={{
    //             color: 'black',
    //             cursor: 'pointer',
    //             backgroundColor: 'transparent',
    //             border: 0,
    //             position: 'absolute',
    //             bottom: '0.3rem',
    //         }}
    //     >Cancel</button>
    // );

//     const save = () => (
//         <button
//             onClick={saveModal}
//             style={{
//                 color: 'black',
//                 cursor: 'pointer',
//                 backgroundColor: 'transparent',
//                 border: 0,
//                 position: 'absolute',
//                 bottom: '0.3rem',
//                 marginLeft: 70
//             }}
//         >Save Changes</button>
//     );


//     return (
//         <div className="overlay">
//             <div className="content">
//                 {closeicon()}
//                 {props.children}
//                 {cancel()}
//                 {save()}
//             </div>
//         </div>
//     );
// };


// export default ReusableModal;