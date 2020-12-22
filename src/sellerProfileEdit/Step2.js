import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { faCity, faGlobeAsia, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Step2() {

    const [country, setCountry] = useState('');
    const [states, setStates] = useState('');
    const [city, setCity] = useState('');

    const handleNext = (e) => {
        e.preventDefault();
        console.log(country);
        console.log(states);
        console.log(city);
    }

    return (
        <Container style={{ maxWidth: 700, marginBottom: 20, marginTop: 20 }}>
            <div className="p-4 mr-0 stepBorder">
                <b style={{ fontSize: 20, textAlign: 'center' }}><p>Where are you based</p></b>

                <p className="text-justify pt-1">
                    We take your privacy very seriously. Only your state and
                    country will be shown to clients.
                </p>
                <label ><b>Country</b></label>
                <div>
                    <FontAwesomeIcon icon={faGlobeAsia} className="icon" />
                    <input
                        type="text"
                        placeholder="Enter Country Name"
                        className="pl-4 inputNoBorder"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <label ><b>State</b></label>
                <div>
                    <FontAwesomeIcon icon={faCity} className="icon" />
                    <input
                        type="text"
                        placeholder="Enter State Name"
                        className="pl-4 inputNoBorder"
                        value={states}
                        onChange={(e) => setStates(e.target.value)}
                    />
                </div>

                <label ><b>City</b></label>
                <div>
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    <input
                        type="text"
                        placeholder="Enter City Name"
                        className="pl-4 inputNoBorder"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>



                <Link to="./step3" ><div className="skipBtn" >Skip</div></Link>

                <Link to="./step3" ><button className="btnSubmit" onClick={handleNext}>NEXT</button></Link>


            </div>
        </Container>
    )
}