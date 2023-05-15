import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.scss'



function Sidebar () {
    return (
    <div className='nav-bar'>
        

        <nav>
            <NavLink exact = "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="white"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="white"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="white"/>
            </NavLink>

        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/yana-zykova-8b273964/'>
                    <FontAwesomeIcon icon={faLinkedin} color="white"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/yanazykova'>
                    <FontAwesomeIcon icon={faGithub} color="white"/>
                </a>
            </li>
        </ul>
        
    </div>
        )

}

export default Sidebar;