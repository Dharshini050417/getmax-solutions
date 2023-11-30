import './Solution.css';
import image from '../../assets/GetMax logo.png';
import arrow from '../../assets/arrow.png'
import training from '../../assets/training.png';
import socialmedia from '../../assets/socialmedia.png';
import ushealthcare from '../../assets/ushealthcare.png';
import recruitment from '../../assets/recruitment.png';


function Solution() {
    return (
        <div className='Solution' align='center' id = "solutions">

            <h1 id="sol-head">
                Our Solutions
            </h1>

            <p className='sol-para'>
                Your Success, Our Services. Tailored Solution for Every Business Challenge.
                <br />
                Discover the Power of Innovation and Excellence. Join Us on the Road to Success!
            </p>

            <div className='cont'>

                <img src={image} className='logo' />

                <div className='cont1'>

                    <img src={ushealthcare} className='ushc' />

                    <h4>
                        US Health Care RCM
                    </h4>

                    <p >
                        Simplifying Revenue Cycle Management in U.S. healthcare sector for maximum efficiency and profitability.
                    </p>
                    <a href=''>
                        <b>
                            Learn more
                        </b>
                        <img src={arrow} className='arrow' />
                    </a>

                </div>

                <div className='cont2'>

                    <img src={socialmedia} className='socialmedia' />

                    <h4>
                        Social Media Management
                    </h4>

                    <p >
                        Managing Social media to improve the reach of your ideas
                    </p>
                    <a href=''>
                        <b>
                            Learn more
                        </b>
                        <img src={arrow} className='arrow' />
                    </a>

                </div>

                <div className='cont3'>

                    <img src={training} className='training' />

                    <h4>
                        Training and Placement
                    </h4>

                    <p >
                        Empowering individuals with relevant skills and connecting them to exciting carrer oportunities.
                    </p>
                    <a href=''>
                        <b>
                            Learn more
                        </b>
                        <img src={arrow} className='arrow' />
                    </a>

                </div>

                <div className='cont4'>

                    <img src='{Buisness}' className='Buisness' />

                    <h4>
                        Buisness Consulting
                    </h4>

                    <p >
                        Empowering individuals with relevant skills and connecting them to exciting carrer oportunities.
                    </p>

                    <a href=''>
                        <b>
                            Learn more
                        </b>
                        <img src={arrow} className='arrow' />
                    </a>

                </div>

                <div className='cont5'>

                    <img src={recruitment} className='recruitment' />

                    <h4>
                        Recruitment Outsourcing
                        <br /> Processing
                    </h4>

                    <p >
                        Streamlining hiring processes, saving you time and resources, and bringing the right talent onboard
                    </p>
                    <a href=''>
                        <b>
                            Learn more
                        </b>
                        <img src={arrow} className='arrow' />
                    </a>

                </div>

            </div>

        </div>
    );
}


export default Solution;