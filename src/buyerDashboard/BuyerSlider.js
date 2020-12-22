import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ImgComp from "./ImgComp";
import './Slider.css'

export function BuyerSlider() {

    let sliderArr = [
        <ImgComp src="card2.jpg" />,
        // <ImgComp src="videoplayback.mp4" />,
        // <ImgComp src="Dil_Kahi_Ka.mp3" />,
        // <ImgComp src="200.pdf" />,
        // <ImgComp src="search-list.xlsx" />,
        // <ImgComp src="word-file.docx" />,
        // <ImgComp src="file.ppt" />
        <ImgComp src="card1.jfif" />,
        <ImgComp src="card3.jfif" />,
        <ImgComp src="card4.jpg" />,
        <ImgComp src="img1.jpg" />,
        <ImgComp src="img3.jpg" />,
        <ImgComp src="img4.png" />,
    ]

    const [x, setX] = useState(0);

    const [activeIdx, setActiveIdx] = useState(0)

    const goLeft = () => {
        console.log(x)
        // x === 0 ? setX((sliderArr.length-1)):  setX(x + 100);
        // x === + 100 * (sliderArr.length = 0) ? setX(x - 0) : setX(x + 100);
        if (x === + 100 * (sliderArr.length = 0)) {
            setX(x - 0)
        } else {
            setX(x + 100)
        }
    };
    const goRight = () => {
        console.log(x);
        // x === - 100 * (sliderArr.length - 1) ? setX(x + 0) : setX(x - 100);

        if (x === - 100 * (sliderArr.length - 1)) {
            setX(x + 0)
        } else {
            setX(x - 100)
        }
    };


    const handleDotClick = (idx) => {

        if (activeIdx =>+100 * sliderArr.length) {
            setActiveIdx(activeIdx +100)
        } else {
            setActiveIdx(activeIdx-100 )
        }
        console.log(activeIdx)
    }

    // React.useEffect(() => {
    //     if (isTicking) sleep(300).then(() => setIsTicking(false))
    // }, [isTicking])

    // React.useEffect(() => {
    //     setActiveIdx((sliderArr.length - (sliderArr[0] % sliderArr.length)) % sliderArr.length) // prettier-ignore
    // }, [sliderArr])
    // const [slide, setSlide] =useState({
    //     activeSlide: 0
    // })
    // const { activeSlide} = slide
    // const prevSlide=()=> {
    //      slide = setSlide.activeSlide - 1 < 0
    //       ? sliderArr.length - 1
    //       : setSlide.activeSlide - 1;
    //     this.setSlide({
    //       activeSlide: slide
    //     });
    //     console.log(slide)
    //   }

    // const nextSlide=()=>{

    //     let  slide = activeSlide + 1 < sliderArr.length
    //       ? activeSlide + 1
    //       : 0;
    //     setSlide({
    //       activeSlide: slide
    //     });
    //     console.log(slide)

    //   }

    return (
        <Container>

            <div className="slider">
                {sliderArr.map((item, index) => {
                    return (
                        <div key={index} idx={index} activeIdx={activeIdx} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })}
                <div id="goLeft" onClick={goLeft} className="video-slider-btn left-side">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div id="goRight" onClick={goRight} className="video-slider-btn right-side" >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>

            </div>

            <div style={{ overflow: 'hidden' }}>

                {/* <div onClick={thumbBtn}> */}
                <div className="thumbSlider">
                    {
                        sliderArr.slice(0, sliderArr.length).map((thumb, index) => {
                            return (
                                <div key={index} className="thumSlide" style={{ transform: `translateX(${activeIdx}%)` }}>
                                    
                                    <span
                                        key={index}
                                        onClick={handleDotClick}
                                    >{thumb}</span>
                                </div>
                            )
                        })
                    }

                </div>
                {/* </div> */}

            </div>


        </Container>
    )
}