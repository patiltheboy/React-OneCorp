import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { faBookmark, faBookReader, faCalendarAlt, faGlobeAsia, faGraduationCap, faPlus, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Education from "../modal/Education";
import Certification from "../modal/Certification";


function Step4() {
    // -----------Modal---------------
    const [educationShow, setEducationShow] = useState(false);
    const [certificationShow, setCertificationShow] = useState(false);

    const closeModal = () => {
        setEducationShow(false);
        setCertificationShow(false);
    };

    // ----------Education----------
    const [country, setCountry] = useState('');
    const [degree, setDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [specialised, setSpecialised] = useState('');
    const [year, setYear] = useState('');

    const educationAdd = (e) => {
        e.preventDefault();
        console.log(country);
        console.log(degree);
        console.log(university);
        console.log(specialised);
        console.log(year)
    }

    //---------Certification--------------
    const [certificate, setCertificate] = useState('');
    const [certifiedfrom, setCertifiedFrom] = useState('');
    const [certificateyear, setCertificateYear] = useState('');

    const certificationAdd = (e) => {
        e.preventDefault();
        console.log(certificate);
        console.log(certifiedfrom);
        console.log(certificateyear);
    }

    return (
        <Container style={{ maxWidth: 700, marginBottom: 20, marginTop: 20 }}>
            <div className="p-4 mr-0 stepBorder" >
                <div className="">
                    <label><b style={{ fontSize: 20, }}>Education</b></label>
                    <p className="text-justify pt-1">
                        Add the areas of study and degree earned.
                    </p>
                    <div className="addBtn" onClick={() => setEducationShow(true)}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add Educational Info
                    </div>

                    {/* --------------After Adding Educational Info-------------- */}
                    <div className="educerAdd">
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faGlobeAsia} style={{ width: 20 }} /><b className="educerText">Country</b>
                            <b className="educerModalText">{country}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faGraduationCap} style={{ width: 20 }} /><b className="educerText">Degree</b>
                            <b className="educerModalText">{degree}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faUniversity} style={{ width: 20 }} /><b className="educerText">College</b>
                            <b className="educerModalText">{university}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faBookmark} style={{ width: 20 }} /><b className="educerText">Specialised</b>
                            <b className="educerModalText">{specialised}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faCalendarAlt} style={{ width: 20 }} /><b className="educerText">Year</b>
                            <b className="educerModalText">{year}</b>
                        </div>
                        <div className="text-center mt-4">
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger" className="ml-4">Remove</Button>
                        </div>
                    </div>

                    {/* --------------Education Modal-------------- */}
                    <Education
                        show={educationShow}
                        cancelHandler={closeModal}
                        educationAdd={educationAdd}
                        title={'Educational Info'}
                        education={
                            <div>
                                <label ><b>Country</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faGlobeAsia} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Country of College"
                                        className="pl-4 inputNoBorder"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </div>
                                <label ><b>Degree</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Degree"
                                        className="pl-4 inputNoBorder"
                                        value={degree}
                                        onChange={(e) => setDegree(e.target.value)}
                                    />
                                </div>
                                <label ><b>College/University Name</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faUniversity} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Mention Your College"
                                        className="pl-4 inputNoBorder"
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    />
                                </div>
                                <label ><b>Specialised</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faBookmark} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Your Specialization"
                                        className="pl-4 inputNoBorder"
                                        value={specialised}
                                        onChange={(e) => setSpecialised(e.target.value)}
                                    />
                                </div>
                                <label ><b>Year</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                                    <input
                                        type="text"
                                        maxLength={4}
                                        placeholder="Year"
                                        className="pl-4 inputNoBorder"
                                        value={year}
                                        onChange={(e) => {
                                            const re = /^[0-9\b]+$/;
                                            if (e.target.value === '' || re.test(e.target.value)) {
                                                setYear(e.target.value)
                                            }
                                        }
                                        }
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>



                {/* ------------------------------------------Certification-------------------------------------------------- */}

                <div className="pt-5">
                    <label>  <b style={{ fontSize: 18, }}>Mention Your Achievements</b></label>
                    <p className="text-justify pt-1">
                        You can share any certification you recevied. This is a power booster for work orders.
                    </p>
                    <div className="addBtn" onClick={() => setCertificationShow(true)}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add Certification
                    </div>

                    {/* ------------------After Adding Certification Info------------------ */}

                    <div className="educerAdd">
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faBookReader} style={{ width: 20 }} /><b className="educerText">Certificate</b>
                            <b className="educerModalText">{certificate}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faBookmark} style={{ width: 20 }} /><b className="educerText">From</b>
                            <b className="educerModalText">{certifiedfrom}</b>
                        </div>
                        <div className="educerSub">
                            <FontAwesomeIcon icon={faCalendarAlt} style={{ width: 20 }} /><b className="educerText">Year</b>
                            <b className="educerModalText">{certificateyear}</b>
                        </div>
                        <div className="text-center mt-4">
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger" className="ml-4">Remove</Button>
                        </div>
                    </div>

                    {/* ----------------------Certification Modal------------------ */}
                    <Certification
                        show={certificationShow}
                        cancelHandler={closeModal}
                        certificationAdd={certificationAdd}
                        title={'Add Certification'}
                        certification={
                            <div className="m-3">
                                <label ><b>Certification</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faBookReader} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Mention Certification Name"
                                        className="pl-4 inputNoBorder"
                                        value={certificate}
                                        onChange={(e) => setCertificate(e.target.value)}
                                    />
                                </div>
                                <label ><b>Certified From</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faBookmark} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Certified From"
                                        className="pl-4 inputNoBorder"
                                        value={certifiedfrom}
                                        onChange={(e) => setCertifiedFrom(e.target.value)}
                                    />
                                </div>
                                <label ><b>Certificate Year</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                                    <input
                                        type="text"
                                        maxLength={4}
                                        placeholder="Year"
                                        className="pl-4 inputNoBorder"
                                        value={certificateyear}
                                        onChange={(e) => {
                                            const re = /^[0-9\b]+$/;
                                            if (e.target.value === '' || re.test(e.target.value)) {
                                                setCertificateYear(e.target.value)
                                            }
                                        }
                                        }
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>

                <button className="btnSubmit mt-5">Finish</button>

            </div>
        </Container>
    )
}
export default Step4;