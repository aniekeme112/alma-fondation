import about_us from '../about us/asset/about_us.jpeg'
import './about_s.css'
import Tabs from './Tabs'
import { render } from "react-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About_us() {
    return(

        <>
        <h1 className="h1">ALMA <span className='foundation'>FOUNDATION</span> </h1>
        
        <div className='div_text'>
                <p className='p_h'>Dive in to know more about us, our vision, philosophy and culture that binds us to our clients and employees. Every composition of us is built around you, our client and you, our employee.</p>
                </div>
        <h1 className="h1">ABOUT <span className='foundation'>US</span> </h1>



                <Tabs />
        </>   
        
        )
}

export default About_us