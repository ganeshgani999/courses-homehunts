import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/components/Home'
import WhyChooseUs from '../src/components/WhyChooseUs'
import Courses from '../src/components/Courses'
import ContactUs from '../src/components/ContactUs'
import './App.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path="/About" element={<WhyChooseUs />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    </BrowserRouter>
)

export default App;