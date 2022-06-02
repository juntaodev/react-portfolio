import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSafari } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={Logos} alt="logo" />
        <img className="sub-logo" src={Logos} alt="logo" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="works-link" to="/works">
          <FontAwesomeIcon icon={faSafari} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
