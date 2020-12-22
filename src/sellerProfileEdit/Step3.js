import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { faCalendarAlt, faLaptopCode, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Language from "../modal/Language";
import Skill from "../modal/Skill";


function Step3() {
    // --------Modal---------
    const [modalShow, setModalShow] = useState(false)
    const [skillShow, setSkillShow] = useState(false)

    const closeModal = () => {
        setModalShow(false);
        setSkillShow(false);
    };

    // --------Language--------
    const [language, setLanguage] = useState('');

    const languageAdd = (e) => {
        e.preventDefault();
        console.log(language)
    }

    // ---------Skill----------
    const [skill, setSkill] = useState('');
    const [skillyear, setSkillYear] = useState('');

    const skillAdd = (e) => {
        e.preventDefault();
        console.log(skill);
        console.log(skillyear);
    }


    return (
        <Container style={{ maxWidth: 700, marginBottom: 20, marginTop: 20 }}>
            <div className="p-4 mr-0 stepBorder">
                <div className="">
                    <label> <b style={{ fontSize: 20, }}>Languages</b></label>

                    <p className="text-justify pt-1">
                        This will let your buyers to communicate with you in their naive language.
                </p>


                    <div className="addBtn" onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Add Languages
                        </div>

                    {/* -------After Adding Language Info------------- */}

                    {/* <div className="languageAdd">
                        <p>{language}</p>
                    </div> */}

                    {/* --------------------Language Modal------------------- */}
                    <Language
                        show={modalShow}
                        cancelHandler={closeModal}
                        languageAdd={languageAdd}
                        title={'Known Languages'}
                        language={
                            <textarea
                                placeholder="Eg: Hindi, English"
                                style={{ width: '100%' }}
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            />
                        }
                    />

                </div>


                {/* ----------------------------------Skill------------------------------------------- */}

                <div className="pt-5">
                    <label>  <b style={{ fontSize: 20, }}>Area of expertise</b></label>

                    <p className="text-justify pt-1">
                        Mention your skills, this will be shown in your work details.
                </p>

                    <div className="addBtn" onClick={() => setSkillShow(true)}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            Add Your Skills
                        </div>

                    {/* -------After Adding Skill Info------------- */}
                    <Table bordered style={{ marginTop: 20 }}>
                        <tr>
                            <td>{skill}</td>
                            <td style={{ textAlign: 'center' }}>{skillyear} Years</td>
                            <td style={{ width: 20 }}><FontAwesomeIcon icon={faTimes} /></td>
                        </tr>
                    </Table>


                    {/* --------------------Skill Modal------------------- */}

                    <Skill
                        skillshow={skillShow}
                        cancelHandler={closeModal}
                        skillAdd={skillAdd}
                        title={'Add Your Skills'}
                        skill={
                            <div>
                                <label ><b>Skill</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                                    <input
                                        type="text"
                                        placeholder="Add Your Skills"
                                        className="pl-4 inputNoBorder"
                                        value={skill}
                                        onChange={(e) => setSkill(e.target.value)}
                                    />
                                </div>
                            </div>

                        }
                        skillyear={
                            <div>
                                <label ><b>Years</b></label>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                                    <input
                                        type="text"
                                        maxLength={2}
                                        placeholder="Year"
                                        className="pl-4 inputNoBorder"
                                        value={skillyear}
                                        onChange={(e) => {
                                            const re = /^[0-9\b]+$/;
                                            if (e.target.value === '' || re.test(e.target.value)) {
                                                setSkillYear(e.target.value)
                                            }
                                        }
                                        }
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>

                <Link to="./step4" ><div className="skipBtn" >Skip</div></Link>

                <Link to="./step4" ><button className="btnSubmit">NEXT</button></Link>

            </div>
        </Container>
    )
}
export default Step3;