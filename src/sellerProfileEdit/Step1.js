import { faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, CardDeck, Container, } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Step1() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [about, setAbout] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(gender);
        console.log(dob);
        console.log(about);

    };

    return (
        <Container style={{ maxWidth: 700, marginBottom: 20, marginTop: 20 }}>
            <div className="p-4 mr-0 stepBorder">
                <b style={{ fontSize: 20, textAlign: 'center' }}><p>Lets fill some basic details</p></b>
                <p className="text-justify mt-3">Tell us a bit about yourself. This information will appear on your public profile,
                    so that potential buyers can get to know you better.</p>
                <label ><b>Full Name</b></label>
                <div>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="pl-4 inputNoBorder"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <label ><b>Gender</b></label>
                <CardDeck id="gender">
                    <Card className="mt-0" style={{ float: 'left' }}>
                        <input className="formRM"
                            type="radio"
                            id="gender_m"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => { setGender(e.target.value) }}
                        />
                        <label for="gender_m" className="pl-4">M</label>
                    </Card>

                    <Card className="mt-0" style={{ float: 'left' }}>
                        <input className="formRM"
                            type="radio"
                            id="gender_f"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => { setGender(e.target.value) }}
                        />
                        <label for="gender_f" className="pl-4">F</label>
                    </Card>

                    <Card className="mt-0" style={{ float: 'left' }}>
                        <input className="formRM"
                            name="gender"
                            id="gender_o"
                            type="radio"
                            value="Other"
                            checked={gender === "Other"}
                            onChange={(e) => { setGender(e.target.value) }}
                        />
                        <label for="gender_o" className="pl-4">O</label>
                    </Card>
                </CardDeck>

                <label className="mt-3" ><b >Date of Birth</b></label>
                <input
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                    className="inputNoBorder"
                />

                <label ><FontAwesomeIcon icon={faInfo} /><b className="pl-2">About Me:</b></label>
                <textarea
                    className="textarea"
                    type="text"
                    placeholder="Brief description of yourself"
                    onChange={(e) => setAbout(e.target.value)}
                    value={about}
                />

                <Link to="./step2" ><div className="skipBtn" >Skip</div></Link>

                <Link to="./step2" ><button className="btnSubmit" onClick={handleAdd}>NEXT</button></Link>

            </div>
        </Container>
    )
}