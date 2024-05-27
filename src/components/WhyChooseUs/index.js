import Navbar from '../Navbar'
import './index.css'

import liveinteract from '../assets/live-interactive.png'
import workexperience from '../assets/gain-working.png'
import onebyone from '../assets/1-1 assistance.png'
import expertadvice from '../assets/expert-advice.png'
import mocass from '../assets/mock-int.png'
import placement from '../assets/placement-guaranted.png'
import chargir from '../assets/char1.png'
import chargie from '../assets/char2.png'
import congnizant from '../assets/Cognizant-Logo 1.png'
import accent from '../assets/Accenture-logo 1.png'
import zoho from '../assets/Zoho_Corporation-Logo 1.png'
import hindu from '../assets/The-Hindu-Logo 1.png'
import lol from '../assets/download 1.png'

const WhyChooseUs = () => (
        <>
            <Navbar />
            <div className='main-container'>
                <h1>Why Choose Us</h1>
                    <div className='choose-section'>
                        <div>
                            <img src={liveinteract} alt='interactive-img' />
                            <p>Live Interactive class</p>
                        </div>
                        <div>
                            <img src={workexperience} alt='interactive-img' />
                            <p>Gain working experience</p>
                        </div>
                        <div>
                            <img src={onebyone} alt='interactive-img' />
                            <p>1-1 assistance</p>
                        </div>
                        <div>
                            <img src={expertadvice} alt='interactive-img' />
                            <p>Expert advise</p>
                        </div>
                        <div>
                            <img src={mocass} alt='interactive-img' />
                            <p>Mock assessment</p>
                        </div>
                        <div>
                            <img src={placement} alt='interactive-img' />
                            <p>Placement guaranteed</p>
                        </div>
                    </div>
            </div>
            <div className='super-charge-container'>
                <h2 className='super-charge-heading'>Supercharge your career right away</h2>
                <div className='card-container'>
                    <div className='super-charge-card'>
                        <div className='card-img-conatiner'>
                            <img src={chargie} alt='card-mentor' className='card-img'/>
                        </div>
                        <div className='card-details-container'>
                            <h3>Internship / Certificate program</h3>
                            <p>
                            The intern’s responsibilities,
                            the skills they developed, and an evaluation of their
                            performance.
                            </p>
                            <button className='button'>
                                Explore Now
                            </button>
                        </div>
                    </div>
                    <div className='super-charge-card'>
                        <div className='card-img-conatiner'>
                            <img src={chargir} alt='card-mentor' className='card-img'/>
                        </div>
                        <div>
                            <h3>Internship / Certificate program</h3>
                            <p>
                            The intern’s responsibilities,
                            the skills they developed, and an evaluation of their
                            performance.
                            </p>
                            <button className='button'>
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-conatiner'>
                <h2 className='job-heading'>Our Learners Work at</h2>
                <div className='job-images'>
                    <img src={congnizant} alt="job-company" />
                    <img src={accent} alt="job-company" />
                    <img src={zoho} alt="job-company" />
                    <img src={hindu} alt="job-company" />
                    <img src={lol} alt="job-company" />
                </div>
            </div>
        </>
)

export default WhyChooseUs