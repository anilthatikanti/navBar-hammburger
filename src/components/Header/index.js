// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-style">
    <Link to="/" className="link">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="navBtn" testid="hamburgerIconButton">
            <GiHamburgerMenu className="menu" />
          </button>
        }
        className="popup-content"
        position="center center"
      >
        {close => (
          <>
            <div className="popupContainer">
              <div className="popupCloseContainer">
                <button
                  testid="closeButton"
                  className="closeBtn"
                  type="button"
                  onClick={() => close()}
                >
                  <IoMdClose className="closeIcon" />
                </button>
              </div>
              <ul className="navigationContainer">
                <Link to="/" className="link" onClick={() => close()}>
                  <li className="iconContainer">
                    <AiFillHome className="icon" />
                    <h1 className="iconName">Home</h1>
                  </li>
                </Link>
                <Link to="/about" className="link" onClick={() => close()}>
                  <li className="iconContainer">
                    <BsInfoCircleFill className="icon" />
                    <h1 className="iconName">About</h1>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)
export default Header
