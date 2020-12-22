import React from "react";
import { Row, Col, Container, Image, Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faCommentDollar, faShareAltSquare, faReplyAll, faTruck, faCartArrowDown, faStarHalfAlt, } from '@fortawesome/free-solid-svg-icons'
import "./Policies.css"

function Policies(props) {
    return (
        <div>
            <Image src="Policies_Guidelines.png" style={{ "width": "100%" }} />
            <h2 className="text-center mt-4" >Rozgaar India Policies &amp; Guidelines: Freelancer</h2>

            <div >
                {/* <Image src="keepitreal.jpg" style={{ "width": "100%",  }} /> */}
                <Container className="mt-3">
                    <Card className="text-justify">
                        <div className="mt-3 text-center headP">Keep It Real</div>
                        <ul>
                            <li>
                                Use a genuine profile picture not a random photo from
                                google images or a picture of someone who isn’t you
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Include an accurate and informative description of your
                                professional background and make your work as much descriptive.
                                This means remaining conscious of your competition using skills,
                                keywords and other details.
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Make sure to add your accurate education and skills
                                to showcase your exact qualification. Add personal
                                achievements too that is a plus to your profile.
                                Do not worry about being a fresher. Mention the real information
                            </li>
                        </ul>
                        <ul>
                            <li>
                                For a pro seller having 15+ years of professional
                                experience, contact Rozgaar India moderation team
                                while setting up your profile for extra credibility.
                            </li>
                        </ul>
                    </Card>
                </Container>
            </div>

            <div className="pt-5">

                <Container className="mt-3">
                    <Card className="text-justify">
                        <Image src="communication.png" style={{ "width": "100%", }} />
                        <div className="mt-3 text-center headP">Communication is all-important</div>
                        <ul>
                            <li>
                                To maintain a professional service marketplace, the
                                work you’re offering should align with our Terms
                                &amp; Conditions.
                        </li>
                        </ul>
                        <ul>
                            <li>
                                All communication regarding your business should be
                                kept in Rozgaar India. Sharing any personal contact
                                information including but not limited to phone
                                number, email address, personal website, home or
                                office address etc is against rozgaarindia.com policy.
                                When communicating on Rozgaar India, you are enjoying
                                the benefits of our platform’s ease of use and security.
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Be professional when communicating with your customers.
                                Be polite and use courteous language. Send them
                                informative updates and messages of the project to
                                maintain a collaborative relationship.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Spamming is not allowed on Rozgaar India. Please
                                respect each other's privacy by not sharing offers,
                                questions, suggestions or anything not directly
                                related to the service or orders. If you receive
                                a spam message or a message violating our T&amp;C,
                                report rozgaar india team immediately.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                The best way to get a good review is to be professional,
                                quickly responsive, and courteous. Deliver your work on
                                time or even a bit ahead of time to get a good rating.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                And most importantly, don’t discriminate based on
                                gender, religion, ethnicity or nationality. Diversity
                                is an integral part of Rozgaar India!
                            </li>
                        </ul>
                    </Card>
                </Container>
            </div>

            <div className="pt-5">

                <Container className="mt-3">
                    <Card className="text-justify">
                        <Image src="optimizing.png" style={{ "width": "100%", }} />
                        <div className="mt-3 text-center headP">Optimising Your Work Content</div>
                        <ul>
                            <li>
                                Description The right words can attract the right
                                customers. Here’s what you’ll need to refine your content:
                        </li>
                        </ul>
                        <ul>
                            <li>
                                A clear concise title: This is your first impression.
                                It's what shows up in the search, so add the most
                                relevant keyword in your title so that your work
                                will appear in the search results. Also, your work
                                title starts with, “I can,” so make sure it’s
                                followed by a strong verb.
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Use Keywords Browse competitive works to see what the
                                most common keywords are for your service. Then make
                                sure you add the relevant tags to your work in the
                                description.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Describe in detail what you offer This is the section
                                where you make the case for yourself as a Rozgaar
                                India seller. Be clear about what you offer, your
                                skills, and what distinguishes you from others in
                                your category. This is also where you should mention
                                the type of service you aren't willing to do. Avoid
                                repeating information that you've provided in other
                                sections of your Rozgaar India.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                When required, specify what languages, platforms, and
                                software you will use. Don’t forget to include keywords
                                that your target customers will look for. Mention your
                                turnaround time as well and if you're open for negotiations
                                &amp; customisations.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Your description should give them all the answers Include
                                FAQs about the work you’ll offer. This way, there’s no
                                confusion as to what you will deliver.
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Foregoing ask their Work requirement To save time and
                                avoid misunderstandings: prior lay out all your
                                requirements so your customers can specify exactly
                                what they need. Make sure your requirements cover
                                everything you need to start working on the order.
                            </li>
                        </ul>
                    </Card>
                </Container>
            </div>

            <Container>
                <CardDeck className="text-justify mt-5">
                    <Card>
                        <Card.Img variant="top" src="Work_Sample.png" style={{ "width": "100%", }} />
                        <Card.Title className="mt-3 text-center headP">Portfolio of Work Sample</Card.Title>
                        <ul>
                            <li>
                                Drive customers to your services showing them with
                                the best visuals by perfecting your portfolio with
                                these tips:
                        </li>
                        </ul>
                        <ul>
                            <li>
                                Add captivating images and videos to make the best
                                first impression Your images should be original
                                and high resolution. Video is also a great way to
                                showcase your skills. Flaunt your skills by
                                uploading a variety of work samples.
                        </li>
                        </ul>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="Tips.png" style={{ "width": "100%", }} />
                        <Card.Title className="mt-3 text-center headP">Tip: work with videos perform better.</Card.Title>
                        <ul>
                            <li>
                                For non-visual services, create a unique and
                                relevant image that explains your work and
                                attracts buyers. Tip: To add credibility,
                                we highly recommend using a photo of yourself in
                                your work image.
                        </li>
                        </ul>
                        <ul>
                            <li>
                                As mentioned above, we recommend including videos.
                                You can include a web/app preview, or simply a
                                video of yourself explaining what you offer to
                                the buyers. You can upload PDF of more work
                                samples, as they are typically the best option for
                                displaying written-word content.
                        </li>
                        </ul>
                    </Card>

                </CardDeck>
            </Container>

            <Container>
                <div className="text-justify mt-5 borderPolicis">
                    <Card className="mb-3">
                        <Card.Img variant="top" src="Pricing.png" style={{ "width": "100%", }} />
                        <Card.Title className="mt-3 text-center headP">Your Work Pricing</Card.Title>
                        <p className="p-3">
                            Now that you learnt how to describe your work, let’s talk
                            about how to price your work so you can start earning more.
                        </p>
                    </Card>
                    <CardDeck className="pt-4">
                        <Card>
                            <Card.Img variant="top" src="Tips_2.png" style={{ "width": "100%", }} />
                            <Card.Title className="mt-3 text-center headP">
                                When considering how to price your work, think about the following:
                                </Card.Title>
                            <ul>
                                <li>
                                    How long does the service take you to complete?
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    What is your time worth?
                        </li>
                            </ul>
                            <ul>
                                <li>
                                    Keep in mind that your revenue will be 100% of the
                                    said amount but buyer will pay tax extra on your
                                    charged amount
                        </li>
                            </ul>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="Tips_3.png" style={{ "width": "100%", }} />
                            <Card.Title className="mt-3 text-center headP">
                                Below are some pricing best practices:
                                </Card.Title>
                            <p style={{ fontSize: 20, paddingLeft: 20, fontWeight: 600 }}>Set your price</p>
                            <ul>
                                <li>
                                    Check out what the average rate in rozgaar india is
                                    for the service you’re offering to know how to set
                                    your price.
                            </li>
                            </ul>
                            <ul>
                                <li>
                                    Customized pricing - Mention open for price
                                    customisations tailored to your customers’
                                    business needs.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    As you grow your business and your reputation on
                                    Rozgaar India, it’s an opportunity to raise your
                                    rates to maximize your potential.
                                </li>
                            </ul>
                        </Card>
                    </CardDeck>
                </div>
            </Container>

            <div className="pt-5 ">
                <div className="pt-3 text-center borderHead headP">Promoting Your Work</div>
                <Image src="Promotework.png" style={{ "width": "100%", }} />
                <div className="mt-3 text-center headP">Three ways to share and promote your work:</div>
            </div>

            <section className=" borderBtm">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12 col-sm-12 text-center">
                            <ul className="timeline">
                                <li className=" wow fadeInLeft">
                                    <div className="timeline-badge"><FontAwesomeIcon icon={faRupeeSign} /></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="timeline-title ">Custom price offers</h4>
                                        </div>
                                        <div className="timeline-body text-justify">
                                            <p >Generate custom offers for buyers who need a more personalised service offering</p>
                                        </div>
                                    </div>
                                    <div className="timeline-heading-1">
                                        <h4 className="timeline-title ">Custom price offers</h4>
                                    </div>
                                </li>
                                <li className="timeline-inverted wow fadeInRight">
                                    <div className="timeline-heading-1">
                                        <h4 className="timeline-title ">Feedback score</h4>
                                    </div>
                                    <div className="timeline-badge warning"><FontAwesomeIcon icon={faCommentDollar} /></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="timeline-title">Feedback score</h4>
                                        </div>
                                        <div className="timeline-body text-justify">
                                            <p>Feedback score and other parameters will help you to
                                            perform better on search results. Always thrive to
                          get a 5 star rating</p>
                                        </div>
                                    </div>
                                </li>
                                <li className=" wow fadeInLeft">
                                    <div className="timeline-badge danger"><FontAwesomeIcon icon={faShareAltSquare} /></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="timeline-title">Social media share</h4>
                                        </div>
                                        <div className="timeline-body text-justify">
                                            <p>Share your profile on all your social media to promote
                          yourself.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-heading-1">
                                        <h4 className="timeline-title ">Social media share</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-3 borderBtm">
                <Container>
                    <Row >
                        <Col md={8}>
                            <div className="mt-3 text-center headP">Connecting With Your Buyers</div>
                            <Image src="ConnectingBuyer.png" style={{ "width": "100%",  }} className="" />
                            <div className="mt-3 text-center subHeadP">Here are some tips for how to best connect with your clients on Rozgaar India.</div>
                            <div className="text-justify" >
                                <ul>
                                    <li>
                                        Quick replies win more customers: Being responsive to customers will create a positive experience and help you build a strong reputation on Rozgaar India. Make sure you provide thorough updates to your clients throughout the entire process that will increase your opportunity to receive future business. Use the Rozgaar India app to respond to your messages anytime and from anywhere.
                                </li>
                                </ul>
                                <ul>
                                    <li>
                                        Let clients know you’re there for them and have everything you need to get started, once you receive their order requirements. Follow up on any questions or concerns they may have to give them the confidence they need.
                                </li>
                                </ul>
                                <ul>
                                    <li>
                                        Create clarity on the process- Let clients know beforehand that they should be expecting to receive drafts, their delivery, and any feedback.
                                </li>
                                </ul>
                                <ul>
                                    <li>
                                        Deliver on-time quality work. Make sure the delivery fulfills your clients requirements and is of top quality work. Follow up with customers to ensure they’re pleased with the work they got and don't forget to ask for a rating.
                                </li>
                                </ul>
                                <ul>
                                    <li>
                                        Give your customers the best experience possible. This is extremely important for your progress and success as a seller on Rozgaar India. If due to some circumstance you need more time to deliver your work, be proactive and let your client know ahead of time and request a delivery due date extension in the rozgaar india help centre.
                                </li>
                                </ul>

                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mt-3 text-center headP">Managing Your Sales</div>
                            <Image src="managingsales.png" style={{ "width": "100%",  }} />
                            <div className="saleSub">
                                <ul>
                                    <li>
                                        All the hard work you’ve done so far in improving your
                                        work means very little unless you analyze and track
                                        your work performance.
                                </li>
                                </ul>
                                <ul>
                                    <li>
                                        Here’s a quick guide on how to use Rozgaar India Analytics.
                                </li>
                                </ul>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <section className=" borderBtm">
                <Container>
                    <Row>
                        <Col md={4} >
                            <div className="mt-3 text-center headingP">Track these 4 key standards:</div>
                            <ul className="keySubHeading">
                                <FontAwesomeIcon icon={faReplyAll} className="iconSize" />
                            Message Response Rate
                    </ul>

                            <ul className="keySubHeading">
                                <FontAwesomeIcon icon={faTruck} className="iconSize" />
                            On-time Deliveries
                    </ul>

                            <ul className="keySubHeading">
                                <FontAwesomeIcon icon={faCartArrowDown} className="iconSize" />
                            Completed Orders
                    </ul>

                            <ul className="keySubHeading">
                                <FontAwesomeIcon icon={faStarHalfAlt} className="iconSize" />
                            Overall Seller Rating
                    </ul>


                        </Col>

                        <Col md={4}>
                            <div className="mt-3 text-center headingP">My Work Section</div>
                            <ul className="text-justify">
                                Track the progress of each work under my work section. Select
                                a work, check clicks, page views, and more statistics over
                                the past 30 days.
                    </ul>
                        </Col>

                        <Col md={4}>
                            <div className="mt-3 text-center headingP">Improve</div>

                            <ul className="text-justify">
                                If your Work hasn’t been getting enough views or orders,
                                consider making some changes that can help you earn more.
                                You can experiment with the pricing of your work, replace
                                the main image of your work, or change your work title
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                <h2 className="mt-3">Learn from the data and keep on improving!</h2>
            </Container>
        </div>
    );
}

export default Policies;