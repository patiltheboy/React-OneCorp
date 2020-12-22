// import { faBookmark, faCalendarAlt, faGlobeAsia, faGraduationCap, faLaptopCode, faUniversity } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import ReusableModal from './ReusableModal';

// function Modal(props) {

//     const [modalShow, setModalShow] = useState(false)

//     const closeModal = () => {
//         setModalShow(false);
//     };

//     return (

//         <div>
//             <Button variant="primary" onClick={() => setModalShow(true)} >
//                 Launch Modal
//             </Button>
//             <ReusableModal
//                 show={modalShow}
//                 cancelHandler={closeModal}
//                 title={'Educational Info'}
//                 skill={
//                     <div>
//                         <label ><b>Country</b></label>
//                         <div>
//                             <FontAwesomeIcon icon={faGlobeAsia} className="icon" />
//                             <input type="text" placeholder="Country of College" className="pl-4" />
//                         </div>
//                         <label ><b>Degree</b></label>
//                         <div>
//                             <FontAwesomeIcon icon={faGraduationCap} className="icon" />
//                             <input type="text" placeholder="Enter Your Degree" className="pl-4" />
//                         </div>
//                         <label ><b>College/University Name</b></label>
//                         <div>
//                             <FontAwesomeIcon icon={faUniversity} className="icon" />
//                             <input type="text" placeholder="Mention Your College" className="pl-4" />
//                         </div>
//                         <label ><b>Specialization</b></label>
//                         <div>
//                             <FontAwesomeIcon icon={faBookmark} className="icon" />
//                             <input type="text" placeholder="Your Specialization" className="pl-4" />
//                         </div>
//                         <label ><b>Year</b></label>
//                         <div>
//                             <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                             <input type="text" placeholder="Year" className="pl-4" />
//                         </div>
//                     </div>
//                 }
//             />

//         </div>



//     )
// }
// export default Modal;







// // import React, {useState} from 'react';
// // import ReusableModal from './ReusableModal';

// // function Modal() {

// //     const [status, setStatus] = useState(false);

// //     return (

// //         <div>
// //             { status && (<ReusableModal
// //                 closeModal={() => setStatus(false)}
// //                 saveModal={() => setStatus(false)}
// //             >

// //                 <h2>The content of the modal</h2>

// //             </ReusableModal>)}
// //             <div className="container">
// //                 <h2>This is the page content</h2>
// //                 <button onClick={() => setStatus(true)}>Open Modal</button>
// //             </div>

// //         </div>



// //     )
// // }
// // export default Modal;


import React, { useState } from 'react';

function Modal() {

    const [selectedOption, setName] = useState();

    

    function formSubmit(event) {
        event.preventDefault();
        console.log(selectedOption)
    }

    return (

        <form onSubmit={formSubmit}>
            <h1>Gender: {selectedOption}</h1>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        value="Male"
                        checked={selectedOption === "Male"}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
            Male
          </label>
            </div>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        value="Female"
                        checked={selectedOption === "Female"}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
            Female
          </label>
            </div>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        value="Other"
                        checked={selectedOption === "Other"}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
            Other
          </label>
            </div>
            <div>
                Selected option is : {selectedOption}
            </div>
            <button className="btn btn-default" type="submit">
                Submit
        </button>
        </form>



    )
}
export default Modal;