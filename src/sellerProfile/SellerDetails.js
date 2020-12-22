import { faEdit, faPen, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { CardDeck, Card, Col, Container, } from "react-bootstrap";
import ShowMore from 'react-show-more';

function SellerDetails() {

    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [certification, setCertification] = useState([]);
    const [member, setMember] = useState({});
    const [userId, setUserId] = useState('');
    let skill = "";
    let educations = "";
    let certifications = "";


    // This is local storage id 
    var logedin = "1332";

    console.log(userId)


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "userid": "52784",
                "Auth-Token": "Ezxe01MBXU2werWrW2Wi342ASDADAShyIIoKvmYI"
            })
        };
        fetch('https://rozgaar.onecorp.co.in/bridge/getProfileStatus', requestOptions)
            .then(response => response.json())
            .then(res => (
                setUserId(res.data.members.USERID),
                setSkills(res.data.skills),
                setEducation(res.data.education),
                setCertification(res.data.certification),
                setMember(res.data.members) // object api data pass
            ));
    }, []);
    // console.log(result)


    skill = skills.map((item, index) => (
        <div key={index} >
            {/* {console.log(item)} */}
            {/* {console.log(item.skill)} */}
            <span className="foatLeft card">{item.skill}</span>
        </div>
    ));

    educations = education.map((item, index) => (
        <div key={index} >
            {/* {console.log(item.degree)} */}
            <span className="foatLeft card">{item.degree}</span>
        </div>
    ));

    certifications = certification.map((item, index) => (
        <div key={index}>
            <span className="foatLeft card">{item.dertificate_award}</span>
            {/* {console.log(item.dertificate_award)} */}
        </div>
    ));



    return (
        <Container >

            <ShowMore
                lines={1}
                more='Show more'
                less='Show less'
                anchorClass=''
            >
                {member.description}
            </ShowMore>

            <Col className="workpdTop borderWorkP" >
                <h3 className="portfolioh3">More Details new</h3>

                <CardDeck className="cardpd">
                    <Card>
                        <span className="headT" >Languages
                        {(userId !== logedin) ? (
                                <span style={{ float: 'right' }}>
                                    <FontAwesomeIcon icon={faEdit} color='blue' />
                                </span>
                            ) : ''}
                        </span>

                        <div className="pd">
                            {skill}
                        </div>
                    </Card>

                    <Card>
                        <span className="headT" >Education / Certification
                        {(userId !== logedin) ? (
                                <span style={{ float: 'right' }}>
                                    <FontAwesomeIcon icon={faPen} color='blue' />
                                </span>
                            ) : ''}
                        </span>
                        <div className="pd">
                            {educations} {certifications}
                        </div>
                    </Card>
                </CardDeck>
                <CardDeck className="cardpd">
                    <Card>
                        <span className="headT" >Work Experience
                        {(userId !== logedin) ? (
                                <span style={{ float: 'right' }}>
                                    <FontAwesomeIcon icon={faPen} color='blue' />
                                </span>
                            ) : ''}
                        </span>
                        <div className="pd">
                            <div className=" foatLeft card ">{member.description} {/*Logo design (3year)*/}</div>
                            {/* <div className=" foatLeft card">Vector tracing (3year)</div>
                                <div className=" foatLeft card">Brochure design (3year)</div> */}
                        </div>
                    </Card>
                </CardDeck>
            </Col>

        </Container>
    )
}




export default SellerDetails;




{/* <span>
{(userId !== logedin) ? (
    <span>edit</span>
) : ''}
</span> */}