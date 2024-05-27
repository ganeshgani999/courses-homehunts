import Navbar from '../Navbar'
import './index.css'
import mentor from '../assets/mentor.png'

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='home-container'>
                <div className='details-container'>
                    <h1>UX/UI DESIGN</h1>
                    <h3>UI UX DESIGN COURSE IN CHENNAI</h3>
                    <p>
                        In the last years, we have trained 500+ students in UI UX design courses in Chennai. 
                        Most of our UX UI designing students have succeed placements in 
                        reputed companies with our support.
                    </p>
                    <div className='input-container'>
                        <input
                        type='email'
                        placeholder='Enter Your Email'
                        />
                        <button>
                            DOWNLOAD PROSPECTUS
                        </button>
                    </div>
                </div>
                <div>
                    <div className='mentor-container'>
                        <img src={mentor} alt='Mentor-img' className='Mentor-img'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home