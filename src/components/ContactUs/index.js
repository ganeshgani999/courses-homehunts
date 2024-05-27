import Navbar from '../Navbar/index'
import './index.css'

import logo from '../assets/nav-logo.jpg'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import map from '../assets/Google_Maps 1.png'

const ContactUs = () => (
    <>
        <Navbar />
        <section className='background-section'>
            <img src={logo} alt='Logo' />
            <div className='info-container'>
                <div className='mail-container'>
                    <img src={mail} alt='mail' />
                    <p>info@webdschool.com</p>
                </div>
                <div className='mail-container'>
                    <img src={phone} alt='phone' />
                    <p>+99 4463869700</p>
                </div>
                <div className='location-container'>
                    <img src={location} alt='location' />
                    <div className='location-details'>
                        <p>Web D School, No.30, 1st floor,</p>
                        <p>SSR Pankajam Towers,</p>
                        <p>Arunachalam Road,</p>
                        <p>above kovai pazhamudir cholai,</p>
                        <p>saligramam,</p>
                        <p>Chennai- 600 093.</p>
                    </div>
                </div>
            </div>
            <div className='map-container'>
                <img src={map} alt="Google Map" />
                <p className='insti-details'>Our institute is within 5 km
                    radius from these following areas
                </p>
                <div>
                    <p>Vadapalani, Guindy, T.Nagar, </p>
                    <p>KK Nagar, Ashok Nagar,</p>
                    <p>Saligramam</p>
                </div>
                <div className='social-icons'>
                    <img src={insta} alt="insta" />
                    <img src={facebook} alt="insta" />
                    <img src={youtube} alt="insta" />
                </div>
            </div>
        </section>
    </>
)
export default ContactUs