import React, { useState } from "react";
import "./aboutsyles.css"
import pic from "../../assets/3.png"
import circle from "../../assets/circle.png"
import pic2 from "../../assets/2.png"
import pic3 from "../../assets/1.png"


function About(){
    const [Word , setWord]=useState("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth.");
    const [selectedDiv, setSelectedDiv] = useState(null);
    const handleWord = (newWord , divId) => {setWord(newWord); setSelectedDiv(divId);}
    const getDivStyle = (divId) => {
        return {
          fontWeight: divId === selectedDiv ? 'bold' : 'normal',
          fontSize: divId === selectedDiv ? "28px" : "22px",
        };
    }
    const [imageUrl, setImageUrl] = useState(pic);
    const changeImage = (divId) => {
          if(divId===1){
            setImageUrl(pic);}
           else if(divId===2){
            setImageUrl(pic2);
          }
          else if(divId===3){
            setImageUrl(pic3);
          }
    };
    return(

        <div className="about-us" id = "about-us">
            <div className="page">
                <div className="left">
                    <div className="container">
                        <img src={imageUrl} alt="img" className="pic"/>
                        <h3 className="media-heading">Who We Are</h3>
                        <p>{Word}</p>
                        <h3 className="media-heading">What We Do</h3>
                        <p className="media">Navigating the complexities of modern enterprises, we specialize in healthcare evolution, digital supremacy, talent incubation, and strategic consultancy. We craft bespoke solutions that propel businesses into a league of their own</p>
                        <h3 className="media-heading">Our Approach</h3>
                        <p className="media"> Fusing creativity, agility, and client-centric devotion, we intricately weave breakthroughs in healthcare, digital prominence, talent synergies, and strategic foresight. Our commitment to excellence manifests in tailored strategies for sustained triumph across diverse industries.</p>
                    </div>
                </div>
                <div className="right">
                <h1 className="about-text">ABOUT US</h1>
                    <div className="box">
                            <img className="img" alt="Group" src={circle}  onClick={() => {handleWord("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth."); setSelectedDiv(1); changeImage(1);}}/>
                            <div onClick={() => {handleWord("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth."); setSelectedDiv(1);changeImage(1);}} style={getDivStyle(1)}   className="text-wrapper">Who We Are</div>
                    </div>
                    <div className="box">
                            <img className="img" alt="Group" src={circle} onClick={() => {handleWord('Navigating the complexities of modern enterprises, we specialize in healthcare evolution, digital supremacy, talent incubation, and strategic consultancy. We craft bespoke solutions that propel businesses into a league of their own'); setSelectedDiv(2);changeImage(2);}} />
                            <div onClick={() => {handleWord('Navigating the complexities of modern enterprises, we specialize in healthcare evolution, digital supremacy, talent incubation, and strategic consultancy. We craft bespoke solutions that propel businesses into a league of their own'); setSelectedDiv(2);changeImage(2);}} style={getDivStyle(2)} className="text-wrapper">What We Do</div>
                    </div>
                    <div className="box">
                            <img className="img" alt="Group" src={circle} onClick={() => {handleWord("Fusing creativity, agility, and client-centric devotion, we intricately weave breakthroughs in healthcare, digital prominence, talent synergies, and strategic foresight. Our commitment to excellence manifests in tailored strategies for sustained triumph across diverse industries.");setSelectedDiv(3);}} />
                            <div onClick={() => {handleWord("Fusing creativity, agility, and client-centric devotion, we intricately weave breakthroughs in healthcare, digital prominence, talent synergies, and strategic foresight. Our commitment to excellence manifests in tailored strategies for sustained triumph across diverse industries.");setSelectedDiv(3);changeImage(3);}} style={getDivStyle(3)}  className="text-wrapper">Our Approach</div>
                    </div>
                </div>
                <div className="container-mob">
                <img src={imageUrl} alt="img" className="pic-mob"/>
                
                <p>Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth.</p>
                </div>
            </div>
        </div>
    )
}

export default About;

