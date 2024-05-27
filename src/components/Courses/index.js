
import Navbar from '../Navbar/index'
import './index.css'

import fulstack from '../assets/full-stack-developer-1946887-1651585 1.png'
import appdeve from '../assets/rapid-dev@3x-1024x609 (1) 1.png'
import dataanalysis from '../assets/data-analysis-vector-graphics-analytics-stock-photography-png-favpng-Q5L43fTUFgW8MYA9e2uHN3Xw2-removebg-preview 1.png'
import time from '../assets/history 1.png'
import ruppe from '../assets/rupee 1.png'
import python from '../assets/python-5-logo-png-transparent 1.png'
import java from '../assets/java 1.png'
import matlap from '../assets/matlab 1.png'
import photoone from '../assets/photo1.png'
import phototwo from '../assets/photo2.png'
import photothree from '../assets/photo3.png'

const Courses = () => (
    <>
        <Navbar />
        <section className='placement-section'>
            <h2>Placement Graduated Course</h2>
            <div className='placement-card-container'>
                <div className='placement-card'>
                    <img src={fulstack} alt="full-stack" />
                    <div className='course-details'>
                        <h3>Full Stack Developer</h3>
                        <div>
                            <img src={time} alt='time-img'/>
                            <p>6 Months Course</p>
                        </div>
                        <div>
                            <img src={ruppe} alt='Rupee-img'/>
                            <p>stipend offered</p>
                        </div>
                        <button className='know-more-button'>
                            Know More
                        </button>
                    </div>
                </div>
                <div className='placement-card'>
                    <img src={appdeve} alt="App-Developer" />
                    <div className='course-details'>
                        <h3>App Developers</h3>
                        <div>
                            <img src={time} alt='time-img'/>
                            <p>6 Months Course</p>
                        </div>
                        <div>
                            <img src={ruppe} alt='Rupee-img'/>
                            <p>stipend offered</p>
                        </div>
                        <button className='know-more-button'>
                            Know More
                        </button>
                    </div>
                </div>
                <div className='placement-card'>
                    <img src={dataanalysis} alt="full-stack" />
                    <div className='course-details'>
                        <h3>Data Analysis & Data Science</h3>
                        <div>
                            <img src={time} alt='time-img'/>
                            <p>6 Months Course</p>
                        </div>
                        <div>
                            <img src={ruppe} alt='Rupee-img'/>
                            <p>stipend offered</p>
                        </div>
                        <button className='know-more-button'>
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section className='internship-section'>
            <h2>Internship Bases / Certificate Program</h2>
            <div className='internship-card-container'>
                <div className='internship-card'>
                    <img src={python} alt="python" />
                    <div className='internship-card-details'>
                        <h3>Python</h3>
                        <p>4.2 | 85,524 Learners</p>
                        <button>
                            Leran More
                        </button>
                    </div>
                </div>
                <div className='internship-card'>
                    <img src={java} alt="python" />
                    <div className='internship-card-details'>
                        <h3>Java</h3>
                        <p>4.9 | 86,200 Learners</p>
                        <button>
                            Leran More
                        </button>
                    </div>
                </div>
                <div className='internship-card'>
                    <img src={matlap} alt="python" />
                    <div className='internship-card-details'>
                        <h3>Matlap</h3>
                        <p>4.2 | 63,300 Learners</p>
                        <button>
                            Leran More
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section className='students'>
            <div className='students-container'>
                <div className='students-card'>
                    <img src={photothree} alt='student' />
                    <h3>Ravina</h3>
                    <p>I am pursuing my UI/UX course in Web D School. I found the best professional 
                        training institute where I could enhance my skills, experience and knowledge with 
                        practical guidance. I would recommend Web D School to those people who are looking 
                        for career enhancement in their care. </p>
                </div>
                <div className='students-card'>
                    <img src={photoone} alt='student' />
                    <h3>Selvakumar</h3>
                    <p>
                        I am currently pursuing UI/UX
                        design course at Web D School.
                        This is an excellent institute where you can learn things
                        practically and explore new
                        technology in the designing fields. Trainers at Web D School
                        are friendly motivate us to attain
                        our goal.  
                    </p>
                </div>
                <div className='students-card'>
                    <img src={phototwo} alt='student' />
                    <h3>Vijay</h3>
                    <p>
                    After completing my UG in panimalar, I decided to do a UX UI designing course at Web D school. 
                    They even taught us the fine concepts in UX UI. Theyconducted a lot of activities. 
                    Trainers were so friendly and kind. This course gave me a new path and a new experience.
                    </p>
                </div>
            </div>
        </section>
    </>
)
export default Courses